import React from 'react'
import { Functionitems } from './Functionitems'

export const Functions = () => {
  return (
    <div>
    <section className='pt-5'>
    <div className='container'>
    <div className='row d-flex justify-content-center text-center pb-5'>
    <div className='col-md-8'>
    <h1 className='fw-bolder pt-2'>Plus many more functions</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud .</p>
    </div>
    </div>
    <div className='row d-flex justify-content-center'>
    <Functionitems functionimg="./Images/ev_station.png" functionheading="Electrical
    Services"/>
    <Functionitems functionimg="./Images/nest_eco_leaf.png" functionheading="Electrical
    Services"/>
    <Functionitems functionimg="./Images/grass.png" functionheading="Electrical
    Services"/>
    <Functionitems functionimg="./Images/pool.png" functionheading="Electrical
    Services"/>
    <Functionitems functionimg="./Images/fire_extinguisher.png" functionheading="Electrical
    Services"/>
    
    </div>
    <div className='row d-flex justify-content-center pt-5'>
    <Functionitems functionimg="./Images/ev_station.png" functionheading="Electrical
    Services"/>
    <Functionitems functionimg="./Images/nest_eco_leaf.png" functionheading="Electrical
    Services"/>
    <Functionitems functionimg="./Images/grass.png" functionheading="Electrical
    Services"/>
    <Functionitems functionimg="./Images/pool.png" functionheading="Electrical
    Services"/>
    <Functionitems functionimg="./Images/fire_extinguisher.png" functionheading="Electrical
    Services"/>
    
    </div>
    <div className='row   pt-5 pb-5'>
    <div className="col-md-12 d-flex justify-content-center">
    <button className='btn btn-primary'>Apply</button>
    </div>
    </div>
    </div>
    </section>
    </div>
  )
}
