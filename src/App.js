import './Style/App.css';
import { Routes, Route } from "react-router-dom";
import Accueil from './Pages/Accueil';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import MentionsLegales from './Pages/MentionsLegales';
import Realisation from './Pages/Realisation';
import Services from './Pages/Services';
import bootstrap from 'bootstrap';


export default function App(){
  return(
    <div className='App'>
      <Routes>
        <Route path='/' element={<Accueil/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/mentionslegales' element={<MentionsLegales/>}></Route>
        <Route path='/realisation' element={<Realisation/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
      </Routes>
    </div>
  );
}



