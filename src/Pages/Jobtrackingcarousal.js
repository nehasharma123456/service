import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css"; 
import { Jobtrackitems } from './Jobtrackitems';


export const Jobtrackingcarousal = () => {
  const options = {
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
      0:{
        items:1
    },
        600:{
            items:2
        },
        1000:{
          items:4
      }
    }        
    }
  
  return (
    <div style={{overflow: "hidden"}}  >
    <div className='row d-flex justify-content-center pt-5 mt-5 pb-5 text-center'>
    <div className="col-md-6 px-5">
    <h1 className='fw-bolder' >
    Comprehensive Job Tracking</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p></div>
    
    </div>
    <OwlCarousel {...options}>
  
    <Jobtrackitems Jobtrackimages='./Images/track-1.png' JobtrackTitle="Job Search"  Jobtrackdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio."/>
    <Jobtrackitems Jobtrackimages='./Images/track-2.png' JobtrackTitle="Fleet Management" Jobtrackdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio."/>
    <Jobtrackitems Jobtrackimages='./Images/track-3.png' JobtrackTitle="GPS Tracking"  Jobtrackdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio."/>
    <Jobtrackitems Jobtrackimages='./Images/track-4.png' JobtrackTitle="Inventory"  Jobtrackdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio."/>
    <Jobtrackitems Jobtrackimages='./Images/track-4.png' JobtrackTitle="Dispatch"  Jobtrackdescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio."/>
  </OwlCarousel>

<div className='row d-flex justify-content-center  mt-5 pb-5 text-center'>
    <div className="col-md-5">
    <button className='btn btn-primary'>Access these Fatures</button>
    
    </div>
    </div>
    </div>
  )
}
