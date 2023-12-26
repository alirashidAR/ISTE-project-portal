const multer = require('multer');
const Project = require('../models/projectModels');
const passport = require('passport');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const getProjects = async (req, res) => {
  try {
    // ... (same getProjects logic)
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProjectById = async (req, res) => {
  // ... (same getProjectById logic)
};

const createProject = async (req, res) => {
  // ... (same createProject logic)
};

const updateProject = async (req, res) => {
  // ... (same updateProject logic)
};

const deleteProject = async (req, res) => {
  // ... (same deleteProject logic)
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
