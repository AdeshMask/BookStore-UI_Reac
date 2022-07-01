import React, {useState, useEffect} from 'react'
import './AddHome.css'
import { Link, useParams } from 'react-router-dom';
import BookServices from '../../component/Service/BookService'


const EmployeeForm = (props) => {

    let startValue = {
        bookName: "",
        profilePic: "",
        price: "",
        authorName:"",
        token:"",
        bookQuantity: "",
        isUpdate: false,
    }

    const [formValue, setForm] = useState(startValue)

    const onReset = () => {
        setForm({
            ...startValue, id: formValue.id, isUpdate: formValue.isUpdate 
        });
    };

    const save = async (event) => {
        event.preventDefault();
        
        let object = {
            id: formValue.employeeId,
            bookName: formValue.bookName,
            authorName: formValue.authorName,
            price: formValue.price,
            token: formValue.token,
            bookQuantity: formValue.bookQuantity,
            profilePic: formValue.profilePic,
        };
          BookServices
              .addBook(object).then((response) => {
                console.log(response);
                alert("Data Added!!",response)
              })          
    
    }
    const onNameChange = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value });
        console.log('value for', event.target.name, event.target.value);
    }   

    return (
        <div>
            <div className="form-content">
                <form className="form" action="#" onSubmit={save} enctype="multipart/form-data">
                    <div className="form-head">
                        Employee Payroll form
                    </div>
                    <div className="row-content">
                        <label htmlFor="bookName" className="label text">Book Name</label>
                        <input type="text" className="input" id="bookName" name="bookName" value={formValue.bookName}
                            placeholder="Your name.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="bookName"></error-output>
                    </div>
                    
                    <div className="row-content">
                        <label className="label text" htmlFor="profilePic">Profile image</label>
                        <input type="file" id="profilePic" name="profilePic" value={formValue.profilePic} onChange={formValue.profilePic} accept="image/png, image/jpeg"/>
                        
                    </div>
                    <div className="row-content">
                        <label htmlFor="authorName" className="label text">Author Name</label>
                        <input type="text" className="input" id="authorName" name="authorName" value={formValue.authorName}
                            placeholder="Author Name.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="authorName"></error-output>
                    </div>
                    <br></br>
                    <div className="row-content">
                        <label htmlFor="price" className="label text">Price
                        </label>
                        <input type="text" className="input" id="price" name="price" value={formValue.price}
                            placeholder="Price.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="price"></error-output>
                    </div>
                    
                    <div className="row-content">
                        <label htmlFor="bookQuantity" className="label text">Book Quantity</label>
                        <input type="text" className="input" id="bookQuantity" name="bookQuantity" value={formValue.bookQuantity}
                            placeholder="Price.." required onChange={onNameChange} />
                        <error-output className="text-error" htmlFor="bookQuantity"></error-output>
                    </div>
                    <div className="buttonParent">
                        <Link to="/home" className="resetButton
                        button cancelButton">Cancel</Link>
                        <div className="submit-reset">
                            <button type="submit" className="button submitButton" id="submitButton">{formValue.isUpdate ? 'Update' : 'Submit'}</button>
                            <button type="reset" className="button resetButton" id="resetButton" onClick={onReset}>Reset</button>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default EmployeeForm;