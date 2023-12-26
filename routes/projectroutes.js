const express = require('express');
const projectController = require('../controllers/projectController');
const passport = require('passport');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get('/projects', projectController.getProjects);
router.get('/projects/:id', projectController.getProjectById);
router.post('/projects', passport.authenticate('jwt', { session: false }), upload.array('images'), projectController.createProject);
router.patch('/projects/:id', passport.authenticate('jwt', { session: false }), upload.array('images'), projectController.updateProject);
router.delete('/projects/:id', passport.authenticate('jwt', { session: false }), projectController.deleteProject);

module.exports = router;
