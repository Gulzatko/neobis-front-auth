import React from 'react';
import { useField } from 'formik';

const InputField =({label, ...props})=> {
  const [field, meta] = useField(props)
  console.log(field, 'field');
  console.log(meta, 'meta');

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

export default InputField;