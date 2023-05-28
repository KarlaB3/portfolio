import './App.css';
import { NavFooter } from './components/NavFooter';
import { NavHeader } from './components/NavHeader';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogsPage } from './pages/BlogsPage';
import { ContactPage } from './pages/ContactPage';


function App() {
  return (
    <div className="App">
      <NavHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      {/* <NavFooter /> */}
    </div>
  );
}

export default App;
