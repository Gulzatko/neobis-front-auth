import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';

export default  function Register() {
    const {id}= useParams();
    const navigate = useNavigate();

    const goBack=()=> navigate(-1);

     return (
      <main className="form-signin">
        <button onClick={goBack}> go back</button>
       <form>
        <h1 className="h3 mb-3 fw-normal">Create an account</h1>
        <div className="form-floating">
        <input type="email" className="form-control" id="floatingInput" placeholder="enter your email"/>
        <label for="floatingInput">Email address</label>
       </div>
  
      <div className="form-floating">
        <input type="Text" className="form-control" id="floatingInput" placeholder="Create a login"/>
        <label for="floatingInput">Create Login</label>
      </div>
     
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Create a password"/>
        <label for="floatingPassword">Create Password</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Confirm a password"/>
        <label for="floatingPassword">Confirm Password</label>
      </div>
  
     <button className="btn btn-dark w-100 py-2" type="submit">Enter</button>
     
     
    </form>
  </main>
  )
}

