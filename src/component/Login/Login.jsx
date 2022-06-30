import React, {useState, useEffect} from 'react'
import './Login.css'
import { Link, useParams,useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import User from '../Service/UserService'


const Login = (props) => {
    let history = useHistory();
    let startValue = {
        password: "",
        emailId: "",
    }

    const [formValue, setForm] = useState(startValue)
    const onReset = () => {
        setForm({
            ...startValue, id: formValue.id, isUpdate: formValue.isUpdate 
        });
    };

    const login = async (event) => {
        event.preventDefault();
        
        let object = {
            password: formValue.password,
            emailId: formValue.emailId
        };

        if(formValue.userName === "" && formValue.password === "" && formValue.emailId === ""){
            alert("Enter input all Fileds")
        }
        else{
            User.userLogin(object).then((response) => {
                alert("Login Successful!!",response)
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
                    <div className="form-head">
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
                            <Button variant="contained" size="large" type="reset" className="button resetButton" id="resetButton" onClick={onReset}>Reset</Button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Login;