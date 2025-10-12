import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FullPage from "./FullPage.jsx";
import ProjectsPage from "./ProjectsPage.jsx";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import ProjectDetails from './ProjectsDetails.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FullPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/projects/projectDetails/:id' element={<ProjectDetails/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
