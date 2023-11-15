import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import ProjectList from './pages/ProjectList';
import ProjectForm from './pages/ProjectForms'
import UpdateProjectForm from './pages/UpdateProjectForm';
const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<ProjectList />} />
        <Route path="/add" element={<ProjectForm />} />
        <Route path="/projects/:id" element={<UpdateProjectForm />} />
      </Routes>
    </Router>
  );
};

export default App;
