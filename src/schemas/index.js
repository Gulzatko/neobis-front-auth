import * as yup from "yup";


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    login:yup.string().min(5).required("Required"),
    
    password:yup
    .string()
    .min(5)
    .matches(passwordRules,{message:"Please enter min 5 char, 1 upper case letter,1 lower case letter and 1 didgit"})
    .required("Required"),

});
export const registerSchema = yup.object().shape({
    login:yup
       .string().min(5)
       .required("Required"),
    email: yup
       .string().email("Please enter a valid email").required('Required'),
    password:yup
       .string()
        .min(5)
        .matches(passwordRules,{message:"Please enter min 5 char, 1 upper case letter,1 lower case letter and 1 didgit"})
        .required("Required"),
     confirmPassword:yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Required"),


})