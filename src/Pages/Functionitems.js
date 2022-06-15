import React from 'react'

export const Functionitems = (props ) => {
  return (
    <>
    <div className='col-md-2'>
    <div className='function-div text-center'>
    <img src={props.functionimg}></img>
    <h5 className='fw-bolder'>{props.functionheading}</h5>
    </div>
    </div>
    </>
  )
}
