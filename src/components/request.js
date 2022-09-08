import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import Axios from 'axios';
import { AppContainer, BoxContainer, FieldContainer, FieldError, FormContainer, SubmitButton } from "./styles";
import { Stack, TextField } from "@mui/material";
// import 'bootstrap/dist/css/bootstrap.css';


function Demo() {

  // const [error, setError] = useState(null);


//   const onsubmit = (values, submittingObject) => {
//       console.log(values);
//       submittingObject.resetForm();
//     };


// const [callback, setCallback] = useState({
//     name:values.name,
//     number: values.number,
//     query: values.query
// });
const onSubmit = (values, { setSubmitting }) =>{
    // console.log("Submit method ::" + values.familysetup);
    // console.log("Submit method ::" + values.bro)
   // event.preventDefault();

    Axios.post("http://localhost:5000/callback", { name: values.name, number: values.number,  query: values.query })
    .then(() =>{
        alert("Successful Insert")
    })
}
  
  const formik = useFormik({


    initialValues: {
      name: "",
      
      number: "",
      query:""
    },  validateOnBlur: true,

    onSubmit,
    validationSchema: Yup.object({
     
      name: Yup.string().required("Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
      
      number: Yup.string().matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,"Contact Number is invalid").max(10).required("Contact Number is required"),
      query: Yup.string().required("Query is required"),
    }),
   

  });
  

  return (
    <AppContainer>
    <BoxContainer>
    <FormContainer className="container form">
      <form className="" autoComplete="off" onSubmit={formik.handleSubmit}>
        <h2>REQUEST FOR CALLBACK</h2>
        <FieldContainer>
        
            
            <TextField
              type="text"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              pattern="^[A-Za-z -]+$"
              id="filled"
              color="primary"
              label="NAME"
              variant="filled"
              title="Please Enter Valid Name"
            /><FieldError>{" "}
            {formik.errors.name && formik.touched.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}{" "}</FieldError>
          </FieldContainer>
        <FieldContainer>
            
            <TextField
              type="text"
              name="number"
              onChange={formik.handleChange}
              value={formik.values.number}
              maxLength={10}
              id="filled"
              color="primary"
              label="NUMBER"
              variant="filled"
              title="Please Enter Valid Number"
            /><FieldError>{" "}
            {formik.errors.number && formik.touched.number ? (
              <div className="error">{formik.errors.number}</div>
            ) : null}{" "}</FieldError>
          </FieldContainer><FieldContainer>
            
            <TextField
              type="text"
              name="query"
              id="filled-textarea"
              color="primary"
              label="QUERY"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.query}
            /><FieldError>
            {formik.errors.query && formik.touched.query ? (
              <div className="error">{formik.errors.query}</div>
            ) : null}</FieldError>
          </FieldContainer>
          <SubmitButton><Stack direction="row" spacing="1">
            <Button variant="contained" type="submit" value="Submit"  color="secondary"
              padding="10%" onClick={formik.handleSubmit}>Submit</Button>
            <Button
              variant="contained"
              type="reset"
              value="Reset"
              color="secondary"
              padding="10%"
              onClick={formik.handleReset}
            >
              Reset
            </Button>
         </Stack></SubmitButton>
        
      </form>
    </FormContainer>
    </BoxContainer>
    </AppContainer>
  );
};

export default Demo;