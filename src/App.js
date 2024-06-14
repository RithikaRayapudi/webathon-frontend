import React from 'react'
import {Routes,Route} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login1 from './pages/Login1';
import Signup from './pages/Signup';
import Community from './pages/Community';
import Sitdet from './pages/sitterdetails';
import Reference from './pages/Reference';
import Petschedule from './pages/Petschedule';
import Petdetails from './pages/Petdetails';
import Profile from './pages/Owner';
import Owndet from './pages/Owndet';
import Contact from './pages/Contact';
import About from './pages/About';
import Help from './pages/Help';
import Login2 from './pages/Login2';
import Profile2 from './pages/Profile2';
import Conandbook from './pages/Conandbook';
import Behav from './pages/Behav';
import Petcare from './pages/Petcare';
import Emergency from './pages/Emergency';

function App() {
  return (
    <div >
      <Routes>
          <Route element={<Dashboard/>}path="/"></Route>
          <Route element={<Login1/>}path="/Loginowners"></Route>
          <Route element={<Login2/>}path="/Loginsitters"></Route>
          <Route element={<Signup/>}path="/Signup"></Route>
          <Route element={<Community/>}path="/Community"></Route>
          <Route element={<Sitdet/>}path="/Sitterdetails"></Route>
          <Route element={<Reference/>}path="/Reference"></Route>
          <Route element={<Petschedule/>}path="/Petschedule"></Route>
          <Route element={<Petdetails/>}path="/Petdetails"></Route>
          <Route element={<Profile/>}path="/Profileowner"></Route>
          <Route element={<Profile2/>}path="/Profilesitter"></Route>
          <Route element={<Conandbook/>}path="/Bookings"></Route>
          <Route element={<Owndet/>}path="/Owndet"></Route>
          <Route element={<Contact/>}path="/Contact"></Route>
          <Route element={<About/>}path="/About"></Route>
          <Route element={<Help/>}path="/Help"></Route>
          <Route element={<Emergency/>}path="/Emergency"></Route>
          <Route element={<Petcare/>}path="/Petcare"></Route>
          <Route element={<Behav/>}path="/Behaviour"></Route>



      </Routes>
    </div>
  )
}

export default App