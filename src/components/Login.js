import React, {FormEvent, useState} from 'react';

 import '../App.css';

 import {Link} from "react-router-dom"
import {useFormik} from "formik";


 const Login=()=> {

  const [login, setLogin]= useState('');
  const [password, setPassword]= useState('');

  const handleSubmit = (e:FormEvent)=>{
      e.preventDefault();
  }

  return (
    <main className="form-signin">
    <form onSubmit={handleSubmit}>
      
      <h1 className="h3 mb-3 fw-normal">Well comeback!</h1>
  
      <div className="form-floating">
        <input type="text" className="form-control" id="floatingInput" value={login} onChange={e=>setLogin(e.target.value)} placeholder="name@example.com"/>
        <label for="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" 
               className="form-control" 
               id="floatingPassword" 
               placeholder="Password"
               value={password}
                onChange={(e)=>setPassword(e.target.value)} />
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
export default Login;







