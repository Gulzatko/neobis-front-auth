import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import {Form, Formik,Field} from "formik";
import{registerSchema} from "../../schemas/index";
 import InputField from './InputField';
import LoginInput from './LoginInput';
import PasswordInput from './PasswordInput';

const onSubmit= async(values, actions)=>{
  await new Promise((resolve)=>setTimeout(resolve, 1000));
  actions.resetForm();
}
const Register=()=> {
     const {id}= useParams();
     const navigate = useNavigate();
     const goBack=()=> navigate(-1);
   

     return (
      <Formik initialValues={{email:"", login:"", password:"", confirmPassword:""}} 
      validationSchema={registerSchema}
      onSubmit={onSubmit}
      >
       
         {({isSubmitting})=>(
          <Form>
              <button onClick={goBack}> go back</button>
              <h1 className="h3 mb-3 fw-normal">Create an account in Lorby</h1>
            <InputField
             label=""
              name="email"
              type="email"
              placeholder="Enter your email"
              />
              <LoginInput
               label=""
                name="login"
                type="text"
                placeholder="Create your login"
              />
              <PasswordInput
               label=""
               name="password"
               type="password"
               placeholder="Create your password"
               />
                 <PasswordInput
                   label=""
                   name="confirmPassword"
                   type="password"
                   placeholder="Confirm your password"
               />
          

            <button disabled={isSubmitting} className="btn btn-dark w-100 py-2" type="submit">Enter</button>
         </Form>

        )}
     
  </Formik>
      

  )
}
export default Register;

