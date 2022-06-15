import React from 'react'

export const Jobtrackitems = (props) => {
  return (
    <div >
    <div className="item">
    <div className="card Jobtrackitems" >
    <img src={props.Jobtrackimages} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title fw-bold">{props.JobtrackTitle}</h5>
      <p className="card-text">{props.Jobtrackdescription}</p>
      </div>
 
  </div>
    </div>
    
    </div>
  )
}
