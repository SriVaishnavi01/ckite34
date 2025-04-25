// routes/index.js
const express = require('express');
const { createGenericRouter } = require('../Controllers/genericController');
const router = express.Router();

// Import all models
const logicalReasoning = require('../Model/APTITUDE/logicalReasoning');
const quantitativeAptitude= require('../Model/APTITUDE/quantitativeAptitude');
const verbalAbility = require('../Model/APTITUDE/verbalAbility');
const communication = require('../Model/SOFTSKILLS/communication');
const career = require('../Model/SOFTSKILLS/career');
const teamwork = require('../Model/SOFTSKILLS/team');
const Leadership = require('../Model/SOFTSKILLS/Leadership-Management');
const Values= require('../Model/SOFTSKILLS/Values');
const C_Sharp= require('../Model/TECHNICAL/c_sharp');
const Cprogramming = require('../Model/TECHNICAL/Cprogramming');
const Java = require('../Model/TECHNICAL/Java');
const Python = require('../Model/TECHNICAL/Python');
const webtechnology= require('../Model/TECHNICAL/webtechnology');
const Golang= require('../Model/TECHNICAL/Golang');
const Mern= require('../Model/TECHNICAL/Mern');
const Mean=require('../Model/TECHNICAL/Mean');
const Lamp=require('../Model/TECHNICAL/Lamp');
const Ruby=require('../Model/TECHNICAL/Ruby');
const Agile=require('../Model/IndustryExpertise/AgileDevelopement');
const Cloud=require('../Model/IndustryExpertise/CloudComputing');
const Audit=require('../Model/IndustryExpertise/Audit');
const Banking=require('../Model/IndustryExpertise/Banking');
const CloudComputing=require('../Model/IndustryExpertise/CloudComputing');
const Deveops=require('../Model/IndustryExpertise/Deveops');
const DigitalMarketing=require('../Model/IndustryExpertise/DigitalMarketing');
const Finance=require('../Model/IndustryExpertise/Finance');
const HR=require('../Model/IndustryExpertise/Hr');
const Insurance=require('../Model/IndustryExpertise/Insurance');
const Law=require('../Model/IndustryExpertise/Law');
const ProjectManagement=require('../Model/IndustryExpertise/ProjectManagement');
const Sales=require('../Model/IndustryExpertise/Sales');
const QualityManagement=require('../Model/IndustryExpertise/QualityManagement');
const SoftwareEngineering=require('../Model/IndustryExpertise/Softwareengineering');







// Create routes for each model
router.use(createGenericRouter(logicalReasoning, 'logical-reasoning'));
router.use(createGenericRouter(quantitativeAptitude, 'quantitative-aptitude'));
router.use(createGenericRouter(verbalAbility, 'verbal-ability'));
router.use(createGenericRouter(communication, 'communication-skills'));
router.use(createGenericRouter(career, 'career'));
router.use(createGenericRouter(teamwork, 'teamwork'));
router.use(createGenericRouter(Leadership, 'leadership'));
router.use(createGenericRouter(Values, 'values'));
router.use(createGenericRouter(C_Sharp, 'c-sharp'));
router.use(createGenericRouter(Cprogramming, 'c-programming'));
router.use(createGenericRouter(Java, 'java'));
router.use(createGenericRouter(Python, 'python'));
router.use(createGenericRouter(webtechnology, 'web-technology'));
router.use(createGenericRouter(Golang, 'golang'));
router.use(createGenericRouter(Mern, 'mern-stack'));
router.use(createGenericRouter(Mean, 'mean-stack'));
router.use(createGenericRouter(Lamp, 'lamp-stack'));
router.use(createGenericRouter(Ruby, 'ruby'));
router.use(createGenericRouter(Agile, 'agile'));
router.use(createGenericRouter(Cloud, 'cloud'));
router.use(createGenericRouter(Audit, 'audit'));
router.use(createGenericRouter(Banking, 'banking'));
router.use(createGenericRouter(CloudComputing, 'cloud-computing'));
router.use(createGenericRouter(Deveops, 'deveops'));
router.use(createGenericRouter(DigitalMarketing, 'digital-marketing'));
router.use(createGenericRouter(Finance, 'finance'));
router.use(createGenericRouter(HR, 'hr'));
router.use(createGenericRouter(Insurance, 'insurance'));
router.use(createGenericRouter(Law, 'law'));
router.use(createGenericRouter(ProjectManagement, 'project-management'));
router.use(createGenericRouter(Sales, 'sales'));
router.use(createGenericRouter(QualityManagement, 'quality-management'));
router.use(createGenericRouter(SoftwareEngineering, 'software-engineering'));
// router.use(createGenericRouter(, ''));


/*router.get('/softskills/random', async (req, res) => {
  try {
    const softSkillsCollections = [
      Adaptability,
      CommunicationSkills,
      CriticalThinking,
      EmotionalIntelligence,
      Leadership,
      ProblemSolving,
      TimeManagement,
      Teamwork,
      WorkEthics,
      Creativity,
      conflict,
    ];

    const randomQuestions = [];

    for (const Model of softSkillsCollections) {
      const randomDocs = await Model.aggregate([{ $sample: { size: 5 } }]); // Sample size per model
      randomQuestions.push(...randomDocs);
    }

    const shuffledQuestions = randomQuestions.sort(() => Math.random() - 0.5);

    res.json({
      totalQuestions: shuffledQuestions.length,
      questions: shuffledQuestions,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching random soft skills questions',
      error: error.message,
    });
  }
});*/








/*router.get('/softskills/random', async (req, res) => {
  try {
    const softSkillsCollections = [
      Adaptability,
      CommunicationSkills,
      CriticalThinking,
      EmotionalIntelligence,
      Leadership,
      ProblemSolving,
      TimeManagement,
      Teamwork,
      WorkEthics,
    ];

    const randomQuestions = [];

    for (const Model of softSkillsCollections) {
      const randomDocs = await Model.aggregate([{ $sample: { size: 5 } }]); // Sample size per model
      randomQuestions.push(...randomDocs);
    }

    const shuffledQuestions = randomQuestions.sort(() => Math.random() - 0.5);

    res.json({
      totalQuestions: shuffledQuestions.length,
      questions: shuffledQuestions,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching random soft skills questions',
      error: error.message,
    });
  }
});*/





module.exports = router;
/*const express = require('express');
const { createGenericRouter } = require('../controllers/GenricController');

// Import all models
const Adaptability = require('../Models/SOFTSKILLS/Adaptability');
const CommunicationSkills = require('../Models/SOFTSKILLS/CommunicationSkills');
const CriticalThinking = require('../Models/SOFTSKILLS/CriticalThinking');
const EmotionalIntelligence = require('../Models/SOFTSKILLS/EmotionalIntelligence');
const Leadership = require('../Models/SOFTSKILLS/Leadership');
const ProblemSolving = require('../Models/SOFTSKILLS/ProblemSolving');
const TimeManagement = require('../Models/SOFTSKILLS/TimeManagement');
const Teamwork = require('../Models/SOFTSKILLS/TeamWork');
const WorkEthics = require('../Models/SOFTSKILLS/WorkEthics');
const LogicalQuestions = require('../Models/APTITUDE/LogicalQuestions');
const Numerical = require('../Models/APTITUDE/Numerical');
const VerbalQuestions = require('../Models/APTITUDE/VerbalQuestions');



const router = express.Router();*/

// Add routes for soft skills collections
/*router.get('/softskills/random', async (req, res) => {
  try {
    const softSkillsCollections = [
      Adaptability,
      CommunicationSkills,
      CriticalThinking,
      EmotionalIntelligence,
      Leadership,
      ProblemSolving,
      TimeManagement,
      Teamwork,
      WorkEthics,
    ];

    const randomQuestions = [];

    for (const Model of softSkillsCollections) {
      const randomDocs = await Model.aggregate([{ $sample: { size: 5 } }]); // Sample size per model
      randomQuestions.push(...randomDocs);
    }

    const shuffledQuestions = randomQuestions.sort(() => Math.random() - 0.5);

    res.json({
      totalQuestions: shuffledQuestions.length,
      questions: shuffledQuestions,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching random soft skills questions',
      error: error.message,
    });
  }
});

// Generic routes for all models
router.use(createGenericRouter(Adaptability, 'adaptability'));
router.use(createGenericRouter(CommunicationSkills, 'communication-skills'));
router.use(createGenericRouter(CriticalThinking, 'critical-thinking'));
router.use(createGenericRouter(EmotionalIntelligence, 'emotional-intelligence'));
router.use(createGenericRouter(Leadership, 'leadership'));
router.use(createGenericRouter(ProblemSolving, 'problem-solving'));
router.use(createGenericRouter(TimeManagement, 'time-management'));
router.use(createGenericRouter(Teamwork, 'teamwork'));
router.use(createGenericRouter(WorkEthics, 'work-ethics'));
router.use(createGenericRouter(LogicalQuestions, 'logical-questions'));
router.use(createGenericRouter(Numerical, 'numerical-questions'));
router.use(createGenericRouter(VerbalQuestions, 'verbal-questions'));

module.exports = router;*/
