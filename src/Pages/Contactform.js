import React, { useState } from 'react'

export const Contactform = () => {
  const modaldialog ={
        maxWidth:'800px'
  }
   

  const [inputArr, setInputArr] = useState([]);
  const [inputdata, setInputdata] = useState({
    "name" : "",
    "email" : "",
    "message": ""
});
  const inputhandler = (event) => {
    const name = event.target.name; 
    const value = event.target.value; 
    setInputdata({...inputdata, [name]:value  });
}

const formHandler = (event) => {
    event.preventDefault();
    //console.log(inputdata);
    // inputArr.push({inputdata})
    setInputArr([...inputArr, inputdata ]);
    setInputdata({
      "name" : "",
      "email" : "",
      "message": ""
  });
}
const deleteuser=(xid)=>
{

  let confirm_value = window.confirm("are you sure to want to detele data");
  if (confirm_value==true)
  {
    let newarr= inputArr.filter((items,index)=>
{
    return xid != index;
  
});
  setInputArr(newarr);
}
  else
  {
    return false;
  }
}

  return (
    <div>
    <section className='contactform py-5'>
    <div className='container'>
    <div className='row'>
    <div className='col-md-5 pe-5'>
    <div className='pe-5'>
    <h1 className='fw-bolder'>Have a question?</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    </div>
    <div className='col-md-7 px-5'>
    <div className='contact-form'>
    <form className='' method='post' onSubmit={formHandler}> 
    <div className="form-group row pt-4">
    <input type="text" className="form-control" value={inputdata.name}  placeholder="Enter Name" name='name' onChange={inputhandler}/>
  </div>
  <div className="form-group row pt-4">
    <input type="email" className="form-control" value={inputdata.email} id="exampleInputEmail1"  placeholder="Enter-Email" name='email' onChange={inputhandler}/>
  </div>
  <div className="form-group row pt-4">
    <textarea placeholder='Meassage' className="form-control" value={inputdata.message} name="message" onChange={inputhandler}></textarea>
   
  </div>
  <div className=" pt-5">
      
  <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
  Submit
  </button>
  </div>
</form>
    </div>
    </div>
    </div>
    </div>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" style={modaldialog }>
    <div className="modal-content">
      <div class="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <table className='table'>
        <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Meassage</th>
        <th>Action</th>
        </thead>
        <tbody>
        </tbody>
        {
          inputArr.map((items,value)=>{
            return(
                  <tr>
                  <td>{value+1}</td>
                  <td>{items.name}</td>
                  <td>{items.email}</td>
                  <td>{items.message}</td>
                  <td> <button type="submit" className="btn btn-danger me-2" onClick={()=>deleteuser(value)} >Delete</button>
                  <button type="submit" className="btn btn-success" >Edit</button>
                  </td>
                  </tr>
            )
          }

          )
        }
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </section>
    </div>
  )
}
