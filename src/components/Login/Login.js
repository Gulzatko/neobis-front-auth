import{useFormik} from 'formik';
import { Link } from 'react-router-dom';
import { basicSchema } from '../../schemas/index';
import "./Login.css"

const onSubmit = async(values, actions)=>{
  console.log(values);
  console.log(actions);
  await new Promise((resolve)=>setTimeout(resolve,1000));
  actions.resetForm()
}
 const Login=()=> {
  const {values,errors,touched,isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues:{
       login:"",
       password:"",
    },
    validationSchema:basicSchema,
    onSubmit,
  })
console.log(errors)

  return (
     <form onSubmit={handleSubmit} autoComplete='off'>
        <input 
        id="login"
         value={values.login}
         type='text' 
         onChange={handleChange}
         onBlur={handleBlur}
         placeholder='Enter your login'
         className={errors.login && touched.login ? "input-error": ""}
         />
         {errors.login && touched.login && <p className="error">{errors.login}</p>}
        <input 
        id="password"
        type="password" 
        placeholder='Enter your password'
        value={values.password}
         onChange={handleChange}
         onBlur={handleBlur}
         className={errors.password && touched.password ? "input-error": ""}
         />
         {errors.password && touched.password && <p className="error">{errors.password}</p>}
          
        <button disabled={isSubmitting} className="btn btn-dark w-100 py-2" type="submit"  >Log in</button>
         <div>
        <Link to="/id">
        <span>Haven't account yet</span>
        </Link>
       
      </div>
     
    </form>

   
  )
}
export default Login;







