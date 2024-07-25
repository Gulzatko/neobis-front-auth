import React from 'react';
import { useField } from 'formik';

const PasswordInput =({label, ...props})=> {
  const [field, meta] = useField(props)
 

  return (
    <div>
        <label>{label}</label>
        <input {...field} 
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
         />
         {meta.touched && meta.error && <p className='error'>{meta.error}</p>}
    </div>
  );
};

export default PasswordInput;