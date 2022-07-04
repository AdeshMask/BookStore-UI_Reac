import React, {useState, useEffect} from 'react'
import './RegisterForm.css'
import { Link, useParams,useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import User from '../Service/UserService'


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
        event.preventDefault();
        
        let object = {
            id: formValue.userid,
            fullName: formValue.fullName,
            userName: formValue.userName,
            password: formValue.password,
            mobileNumber: formValue.mobileNumber,
            emailId: formValue.emailId
        };

        if(formValue.fullName === "" && formValue.userName === "" && formValue.password === "" && formValue.emailId === ""){
            alert("Enter input all Fileds")
        }
        else{
            User.addUser(object).then((response) => {
                console.log(response);
                alert("Data Added!!",response)
              })  
        alert("Regisraion Success....")
        history.push("/login");
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
                        User Registration Form
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Name</label>
                        <input type="text" className="input" id="fullName" name="fullName" value={formValue.fullName}
                            placeholder="Your name.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Phone Number</label>
                        <input type="text" className="input" id="mobileNumber" name="mobileNumber" value={formValue.mobileNumber}
                            placeholder="mobile number...." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="number"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">UserName</label>
                        <input type="text" className="input" id="userName" name="userName" value={formValue.userName}
                            placeholder="userName.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Password</label>
                        <input type="password" className="input" id="password" name="password" value={formValue.password}
                            placeholder="password.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <div className="row-content">
                        <label htmlFor="name" className="label text">Email-Id</label>
                        <input type="email" className="input" id="emailId" name="emailId" value={formValue.emailId}
                            placeholder="Your email.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="name"></error-output>
                    </div>
                    <br></br>
                    <div className="submit-reset">
                    <div className="buttonParent">
                            <Button variant="contained" size="large" type="submit" className="button submitButton" id="submitButton" onClick={login} >Submit</Button>
                            <Link to="/login"> <Button variant="contained" size="large" type="reset" className="button resetButton" id="resetButton" onClick={onReset}>Login</Button></Link>
                            
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default RegistrationForm;