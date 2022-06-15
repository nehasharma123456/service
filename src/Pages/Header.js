import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Contactform } from './Contactform';
import { CTA } from './CTA';
import { Home } from './Home';
import { Navrouting } from './Navrouting';

export const Header = () => {
  return (
    <div>
    <Router>
    <Navrouting/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cta" element={<CTA/>}>
          </Route>
          <Route path="/contactform" element={<Contactform/>}>
          </Route>
          
        </Routes>
    </Router>
    </div>
    
  )
}
