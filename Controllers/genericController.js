const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2'); // Ensure this is installed

const createGenericController = (Model) => {
  return {
    // 1. Create a single document
    create: async (req, res) => {
      try {
        const newDocument = new Model(req.body);
        const savedDocument = await newDocument.save();
        res.status(201).json(savedDocument);
      } catch (error) {
        res.status(400).json({
          message: 'Error creating document',
          error: error.message
        });
      }
    },

    // 2. Bulk create documents (Insert multiple at once)
    bulkCreate: async (req, res) => {
      try {
        if (!Array.isArray(req.body) || req.body.length === 0) {
          return res.status(400).json({ message: "Request body should be a non-empty array" });
        }

        const documents = await Model.insertMany(req.body);
        res.status(201).json({
          message: `${documents.length} documents inserted successfully`,
          documents
        });
      } catch (error) {
        res.status(400).json({
          message: 'Error inserting documents',
          error: error.message
        });
      }
    },

    // 3. Get all documents with filtering, sorting, and pagination
    getAll: async (req, res) => {
      try {
        const { 
          page = 1, 
          limit = 10, 
          sort = '-createdAt', 
          search,
          ...filters 
        } = req.query;

        const query = {};

        // Advanced search across multiple fields
        if (search) {
          query.$or = [
            { question: { $regex: search, $options: 'i' } },
            { hint: { $regex: search, $options: 'i' } },
            { answerDescription: { $regex: search, $options: 'i' } }
          ];
        }

        Object.keys(filters).forEach(key => {
          if (Array.isArray(filters[key])) {
            query[key] = { $in: filters[key] };
          } else {
            query[key] = { $regex: filters[key], $options: 'i' };
          }
        });

        const options = {
          page: parseInt(page),
          limit: parseInt(limit),
          sort,
          select: '-__v' // Exclude version key
        };

        const result = await Model.paginate(query, options);
        const shuffledQuestions = result.docs.sort(() => 0.5 - Math.random()); // Shuffle questions randomly

        res.json({
          total: result.totalDocs,
          totalPages: result.totalPages,
          currentPage: result.page,
          documents: shuffledQuestions
        });
      } catch (error) {
        res.status(500).json({
          message: 'Error fetching documents',
          error: error.message
        });
      }
    },

    // 4. Get a single document by custom ID
    getById: async (req, res) => {
      try {
        const { id } = req.params;
        const { populate } = req.query;
        let query = Model.findOne({ id });

        if (populate) {
          const populateFields = populate.split(',');
          populateFields.forEach(field => {
            query = query.populate(field.trim());
          });
        }

        const document = await query;

        if (!document) {
          return res.status(404).json({ message: 'Document not found' });
        }

        res.json(document);
      } catch (error) {
        res.status(500).json({
          message: 'Error fetching document',
          error: error.message
        });
      }
    },

    // 5. Update a document
    update: async (req, res) => {
      try {
        const { id } = req.params;
        const updateData = req.body;

        const forbiddenFields = ['_id', 'createdAt'];
        forbiddenFields.forEach(field => delete updateData[field]);

        const updatedDocument = await Model.findOneAndUpdate(
          { id },
          updateData,
          { 
            new: true, 
            runValidators: true 
          }
        );

        if (!updatedDocument) {
          return res.status(404).json({ message: 'Document not found' });
        }

        res.json(updatedDocument);
      } catch (error) {
        res.status(400).json({
          message: 'Error updating document',
          error: error.message
        });
      }
    },

    // 6. Delete a document
    delete: async (req, res) => {
      try {
        const { id } = req.params;
        const deletedDocument = await Model.findOneAndDelete({ id });

        if (!deletedDocument) {
          return res.status(404).json({ message: 'Document not found' });
        }

        res.json({
          message: 'Document successfully deleted',
          deletedDocument
        });
      } catch (error) {
        res.status(500).json({
          message: 'Error deleting document',
          error: error.message
        });
      }
    },

    // 7. Bulk delete documents
    bulkDelete: async (req, res) => {
      try {
        const { ids } = req.body; // Expected format: { ids: ['id1', 'id2', 'id3'] }
        const result = await Model.deleteMany({ _id: { $in: ids } });

        if (result.deletedCount === 0) {
          return res.status(404).json({ message: 'No documents found to delete' });
        }

        res.json({
          message: `${result.deletedCount} document(s) successfully deleted`
        });
      } catch (error) {
        res.status(500).json({
          message: 'Error deleting documents',
          error: error.message
        });
      }
    }
  };
};

// Generic Router Generator with Additional Routes
const createGenericRouter = (Model, routeName) => {
  const router = require('express').Router();
  const controller = createGenericController(Model);

  router.post(`/${routeName}`, controller.create);
  router.get(`/${routeName}`, controller.getAll);
  router.get(`/${routeName}/:id`, controller.getById);
  router.put(`/${routeName}/:id`, controller.update);
  router.delete(`/${routeName}/:id`, controller.delete);

  router.post(`/${routeName}/bulk`, controller.bulkCreate);
  router.delete(`/${routeName}/bulk`, controller.bulkDelete);

  return router;
};

module.exports = {
  createGenericController,
  createGenericRouter
};
