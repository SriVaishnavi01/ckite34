const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoosePaginate = require("mongoose-paginate-v2");
 // Import the Test model
const router = require("./Routers/genericIndex");
const resultRoutes = require("./Routers/Resultrouter");
const userRoutes = require("./Routers/userRoutes");
const RegisterRoutes = require("./Routers/registerRoutes");
dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());


// Database Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://ckite:ckite@ckite.6gtnt.mongodb.net/';
mongoose.plugin(mongoosePaginate);

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Routes
app.use("/api/v1", router);
app.use("/api", resultRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", RegisterRoutes);




// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
