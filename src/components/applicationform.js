import React, {useContext, useState} from "react";
import { useFormik, /*FormikProvider*/ } from 'formik';
import * as Yup from 'yup';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { BoxContainer, FormContainer, FieldError, FormError, FieldContainer, SubmitButton, AppContainer } from "./styles";

//radio button
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

//textfield
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import GlobalStyles from '@mui/material/GlobalStyles';

import Axios from 'axios';
import { toUnitless } from "@mui/material/styles/cssUtils";
import { InputLabel, MenuItem, Select } from "@mui/material";
// import { createContext } from "react";






export default function Applicationform() {



    // const onSubmit = (values, submittingObject) => {
    //     console.log(values);
    //     submittingObject.resetForm();
    //   };

    // const [familysetup]=useState('');
    // const [bro]=useState('');
    // const [sis]=useState('');
    // const [disability]=useState('');
    // const [txt1]=useState('');
    // const [implant]=useState('');
    // const [txt2]=useState('');


    // const [family, setFamily]= useState({
    //     familysetup : values.familysetup,
    //         bro: values.bro,
    //         sis: values.sis,
    //         disability: values.disability,
    //         implant: values.implant,
    //         txt1: values.txt1,
    //         txt2: values.txt2
    // });

    const onSubmit = (values, { setSubmitting }) =>{
    //     console.log("Submit method ::" + values.familysetup);
    //     console.log("Submit method ::" + values.bro)
    //    // event.preventDefault();

        Axios.post("http://localhost:5000/family", { name: values.name, email: values.email, number: values.number, state: values.state, city: values.city, course: values.course})
        .then(() =>{
            alert("Successful Insert")
        })

        // if(validationSchema()) {
        //     console.log(validationSchema())
        //     setApplicationForm({
        //         ...applicationForm,
        //         family: family
        //     })
            
        //      setSteps(steps+1);

        // setApplicationForm({
        //     ...applicationForm,
        //     family: family
        // })
        
           }   //  setSteps(steps+1);
    
    const  onSubmit1=(values, { setSubmitting }) => {
        alert("Form is validated!");
        console.log("Submit method ::" + values);
        console.log("Submit method ::" + values.familysetup);
        console.log("Submit method ::" + values.bro);
        setSubmitting(false);
      } 


    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
  


    
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            number: '',
            state: '',
            city: '',
            course: ''
        },
         validateOnBlur: true,

        onSubmit,
        
        validationSchema:Yup.object({
            name: Yup.string().required(),
            email: Yup.string().required().email(),
            number:  Yup.number().required(),
            state: Yup.string().required(),
            city: Yup.string().required(),
            course: Yup.string().required(),
        })
     


    });




    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#7289da',
                darker: '#053e85',
            },
            neutral: {
                main: '#d1a4e5',
                contrastText: '#fff',
            }
        },
    });






    return (

<AppContainer>
        <BoxContainer> <ThemeProvider theme={theme}>
           <form component="form" autoComplete="off" onSubmit={formik.handleSubmit} action="../../post" method="post" 
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate> 
        <h1> Application Form </h1>
            
               
           


                    <FieldContainer>
                    <TextField
                        required id="filled-required"
                        label="Name"

                        
                        variant="filled" color="primary" type="text" name="name" 
                        onChange={formik.handleChange}
                        value={formik.values.name} 
                        onBlur={formik.handleBlur}/>
                        <FieldError>
                    {formik.errors.name && formik.touched.name ?
                        <div>{formik.errors.name}</div>
                        : null}</FieldError>
</FieldContainer> 


<FieldContainer>
                    <TextField
                        required id="filled-required"
                        label="Email"

                        
                        variant="filled" color="primary" type="text" name="email" 
                        onChange={formik.handleChange}
                        value={formik.values.email} 
                        onBlur={formik.handleBlur}/>
                        <FieldError>
                    {formik.errors.email && formik.touched.email ?
                        <div>{formik.errors.email}</div>
                        : null}</FieldError>
</FieldContainer> 





<FieldContainer>
                    <TextField
                        required id="filled-required"
                        label="Number"
                        
                        variant="filled" type="text" name="number" color="primary"
                        onChange={formik.handleChange}
                        value={formik.values.number} 
                        onBlur={formik.handleBlur}/>
                        <FieldError>
                    {formik.errors.number && formik.touched.number ?
                        <div>{formik.errors.number}</div>
                        : null}</FieldError>
</FieldContainer>



                
                    <FieldContainer>
                    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={formik.handleChange}
          value={formik.values.state}
          label="state"
        >
          <MenuItem value={1}>Tamil Nadu</MenuItem>
          <MenuItem value={2}>Andhra pradhesh</MenuItem>
          <MenuItem value={3}>Kerala</MenuItem>
        </Select>
      </FormControl>
                            </FieldContainer>


                            <FieldContainer>
                    <TextField
                        required id="filled-required"
                        label="City"

                        
                        variant="filled" color="primary" type="text" name="city" 
                        onChange={formik.handleChange}
                        value={formik.values.city} 
                        onBlur={formik.handleBlur}/>
                        <FieldError>
                    {formik.errors.city && formik.touched.city ?
                        <div>{formik.errors.city}</div>
                        : null}</FieldError>
                </FieldContainer>

                            <FieldContainer>
                    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Course</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formik.values.course}
          label="course"
          onChange={formik.handleChange}
        >
          <MenuItem value={1}>IT</MenuItem>
          <MenuItem value={2}>CS</MenuItem>
          <MenuItem value={3}>ECE</MenuItem>
        </Select>
      </FormControl>
                            </FieldContainer>
                            <SubmitButton>
                    <Button padding="5%"  color="neutral" variant="contained" type="submit" value="Submit" onClick={formik.handleSubmit}>Submit</Button>
                    <Button padding="5%" color="neutral" variant="contained" type="reset" value="Reset" onClick={formik.handleReset}>Reset</Button></SubmitButton>
            </form>

                </ThemeProvider>
            
                </BoxContainer>
                </AppContainer>
    );
}