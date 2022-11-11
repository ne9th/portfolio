import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'aos/dist/aos.css';
import { LandingPage } from './components/LandingPage';
import { ProjectDetail } from './components/ProjectDetail';
import { About } from './components/About';
import { Hobbies } from './components/Hobbies';

function App() {

  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/:projectType/:id" element={<ProjectDetail/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/hobbies" element={<Hobbies/>}/>
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
