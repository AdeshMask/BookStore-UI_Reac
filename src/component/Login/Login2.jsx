import React, {useState, useEffect} from 'react'
import './Login2.css'
import { Link, useParams,useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import User from '../Service/UserService'
import SnackMessages from './Message'
import {withRouter} from 'react-router';

const Login = (props) => {
    let history = useHistory();
    let startValue = {
        password: "",
        emailId: "",
        error : "",
    }

    const [formValue, setForm] = useState(startValue)

    const login = (event) => {
        event.preventDefault();
        let object = {
            password: formValue.password,
            emailId: formValue.emailId
        };
        console.log(object)

        if(formValue.userName === "" && formValue.password === "" && formValue.emailId === ""){
            alert("Enter input all Fileds")
        }
        else{
            User.userLogin(object).then((response) => {
                let severity=response.data.message==="LOGIN SUCCESSFUL" ? "success" : "error";
                console.log(severity);
                severity === "success"?localStorage.setItem('Authorization',response.data.data.id) : localStorage.setItem('Authorization',"null")
                severity === "success"?localStorage.setItem('Name',response.data.data.fullName) : localStorage.setItem('Name',"null")
                console.log(severity);
                console.log(response.data.data.id)
                console.log(response.data.data.fullName)
                console.log(response.headers)
                history.push("/home");
              })  
        }
    }
    const onNameChange = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value });
        console.log('value for', event.target.name, event.target.value);
    }

    return (
        <div>
            <div className="form-content">
                <form className="form" action="#" onSubmit={login}>
                    <div className="formhead">
                        User Login Form
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Email Id</label>
                        <input type="text" className="input" id="emailId" name="emailId" value={formValue.emailId}
                            placeholder="userName.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Password</label>
                        <input type="password" className="input" id="password" name="password" value={formValue.password}
                            placeholder="password.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="submit-reset">
                        <div className="buttonParent">
                            <Link to="/register"> <Button variant="contained" size="large" className="resetButton
                                button cancleButton">Sign Up</Button></Link>
                            <Button variant="contained" size="large" type="submit" className="button submitButton" id="submitButton" onClick={login} >Login</Button>
                        </div>
                    </div>
                   
                </form>
                
            </div>
            {formValue.snackFlag &&
                <SnackMessages message={this.state.snackMessage} severity={this.state.severity} />
                }
            
        </div>
    )
}

export default withRouter(Login);