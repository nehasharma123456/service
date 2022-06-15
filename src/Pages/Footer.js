import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div>
    <section className='footer-section py-5 text-white'>
    <div className='container'>
    <div className='row'>
    <div className='col-md-3'>
    <img src='./Images/retina-logo.png'/>
    <ul className='px-0 d-flex justify-content-between'>
    <li>
    <Link to="">Login</Link>
    </li>
    <li>
    <button className='btn btn-light'>Get a Demo</button>
    </li>
    </ul>
    </div>
    <div className='col-md-3'>
    <div>
    <h5>About Service Vault</h5>
    <ul className="px-0">
    
    
    <li><Link to="">Features</Link></li>
    <li><Link to="">Industries</Link></li>
    <li><Link to="">Pricing</Link></li>
    </ul>
    
    </div>
    </div>
    <div className='col-md-3'>
    <div>
    <h5>Company</h5>
    <ul className="px-0">
    
    
    <li><Link to="">About Us</Link></li>
    <li><Link to="">Careers</Link></li>
    <li><Link to="">Press</Link></li>
    </ul>
    </div>
    </div>
    <div className='col-md-3'>
    <div>
    <h5>Help Center</h5>
    <ul className="px-0">
    
    <li><Link to="">Blog</Link></li>
    <li><Link to="">Knowledge Centre</Link></li>
    <li><Link to="">Contact Us</Link></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </section>
    </div>
  )
}
