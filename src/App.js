// import './App.css';
import { NavFooter } from './components/NavFooter';
import { NavHeaderAlt } from './components/NavHeaderAlt';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';


function App() {
  return (
    <div className="App">
      <div class="alert alert-info" role="alert">
        This website is a work in progress. Stay tuned.
      </div>
      <NavHeaderAlt />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      <NavFooter />
    </div>
  );
}

export default App;
