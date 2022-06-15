import React from 'react'
import logo from "../assets/images/retina-logo.png";
import flag from "../assets/images/Group.png"
import { Jobtrackingcarousal } from './Jobtrackingcarousal';
import { CTA } from './CTA';
import { Insights } from './Insights';
import { Functions } from './Functions';
import { Contactform } from './Contactform';
import { Footer } from './Footer';
export const Home = () => {
 
  return (
    <div> 
    <div className="content-wrapper">
	
		<section className="wrapper image-wrapper bg-image bg-overlay bg-overlay-300 text-white" data-image-src="src/img/photos/bg2.jpg">
			<div className="container pt-17 pb-19 pt-md-19 pb-md-20 light-gallery-wrapper text-center">
				<div className="row mb-11 pt-5">
					<div className="col-md-12 col-lg-10 col-xxl-8 mx-auto" data-cues="zoomIn" data-group="page-title" data-interval="-200">
						<h2 className="banner-text">Super111 charge your work flow with</h2>
					<img src={logo}></img>					
					</div>
			</div>
			<div className='row d-flex justify-content-center pt-5 pb-5'>
			<div className='col-md-10'>
			<button class="btn btn-light" type="submit">Search</button>

			</div>
			
			</div>
			<div className='row d-flex justify-content-center pt-5 pb-5'>
			<div className='col-md-10'>
			<a class="text-white" type="submit">Discover</a>

			</div>
			
			</div>
			</div>
		</section>
	
	
	<section>
	<div className='container'>
	<div className='row  d-flex justify-content-center mt--150'>
	<div className="col-xl-10 ">
								<div className="card image-wrapper">
									<div className="card-body ">
										<div className="row align-items-center counter-wrapper  ">
											<div className="col-12 col-lg-6 ps-5">
												<h2 className=" text-dark fw-bolder ">The only multi-lingual platform available in the market</h2>
												<p className=" text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
												<button class="btn btn-primary" type="submit">Search</button>
												</div>
										
											<div className="col-12 col-lg-6">
												<img src={flag} className="w-100"/>
												
											</div>
										</div>
								
									</div>
								
								</div>
								
							</div>
	</div>
	</div>
	</section>


	
	
	
	
	
	</div>
	<Jobtrackingcarousal/>
	<CTA/>
	<Insights/>
	<Functions/>
	<Contactform/>
	<Footer/>
    </div>
  )
}
