import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LandingPage } from './components/LandingPage';
import { ProjectDetail } from './components/ProjectDetail';
import { AboutMe } from './components/AboutMe';
import { Hobbies } from './components/Hobbies';
AOS.init();

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/:projectType/:id" element={<ProjectDetail/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/hobbies" element={<Hobbies/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
