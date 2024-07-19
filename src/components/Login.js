import React from 'react';
 import '../App.css'
 import {Link} from "react-router-dom"
import {useFormik} from "formik";


 export default function Login() {
 

  return (
    <main className="form-signin">
    <form>
      
      <h1 className="h3 mb-3 fw-normal">Well comeback!</h1>
  
      <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
      </div>
  
     <button className="btn btn-dark w-100 py-2" type="submit">Log in</button>
      <div>
        <Link to="/id">
        <span>Haven't account yet</span>
        </Link>
       
      </div>
     
    </form>
  </main>
   
  )
}







