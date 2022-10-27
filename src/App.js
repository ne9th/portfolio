import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { ProjectDetail } from './components/ProjectDetail';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/:projectType/:id" element={<ProjectDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
