import React, { useState, useEffect } from 'react'
import './CustomerDetails.css'
import { Link, useParams, useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import Header from '../Header/Header'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import TextField from '@mui/material/TextField';


const RegistrationForm = (props) => {
    let history = useHistory();
    let startValue = {
        fullName: "",
        password: "",
        emailId: "",
        mobileNumber: "",
        userName: "",
    }

    const [formValue, setForm] = useState(startValue)
    const onReset = () => {
        setForm({
            ...startValue, id: formValue.id, isUpdate: formValue.isUpdate
        });
    };

    const login = async (event) => {
        //     event.preventDefault();

        //     let object = {
        //         id: formValue.userid,
        //         fullName: formValue.fullName,
        //         userName: formValue.userName,
        //         password: formValue.password,
        //         mobileNumber: formValue.mobileNumber,
        //         emailId: formValue.emailId
        //     };

        //     if(formValue.fullName === "" && formValue.userName === "" && formValue.password === "" && formValue.emailId === ""){
        //         alert("Enter input all Fileds")
        //     }
        //     else{
        //         User.addUser(object).then((response) => {
        //             console.log(response);
        //             alert("Data Added!!",response)
        //           })
        //     localStorage.clear();  
        //     alert("Regisraion Success....")
            history.push("/cart");
        //     }
    }
    const onNameChange = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value });
        console.log('value for', event.target.name, event.target.value);
    }

    return (
        <div>
            <Header />
            <div className="form-content">
                <form className="form" action="#" onSubmit={login}>
                    <div className="form-head">
                        Customer Details
                    </div> <br/>
                    <div>
                        <TextField
                            id="demo-helper-text-misaligned"
                            label="Name"
                            marginRight="10px"

                        />	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField 
                            id="demo-helper-text-misaligned"
                            label="Contact" />
                    </div> <br/>
                    <div>
                        <TextField 
                            id="demo-helper-text-misaligned"
                            label="Pincode" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField 
                            id="demo-helper-text-misaligned"
                            label="Locality" />
                    </div> <br/>
                    <div >
                        <TextareaAutosize
                            aria-label="minimum height"
                            placeholder="Address..."
                            style={{ width: 485, height: 100 }}
                            padding-bottom="10"

                        />
                    </div> <br/>    
                    <div>
                        <TextField 
                            
                            id="demo-helper-text-misaligned"
                            label="City" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <TextField
                            id="demo-helper-text-misaligned"
                            label="Landmark" />
                    </div>
                    <br/>
                   
                    <div>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Type</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="home" control={<Radio />} label="Home" />
                                <FormControlLabel value="work" control={<Radio />} label="Work" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className="submit-reset">
                        <div className="buttonParent">
                            <Button variant="contained" size="large" type="submit" className="button submitButton" id="submitButton" onClick={login} >Back</Button>
                            <Link to="/order"> <Button variant="contained" size="large" type="reset" className="button resetButton" id="resetButton" onClick={onReset}>Continue</Button></Link>

                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default RegistrationForm;