import React, { Component } from 'react';
import axios from 'axios'
import { AddValidation, setErrors } from "../USER/USERVALIDATION/AddValidation"
import swal from "sweetalert2"

class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            post: "",
            username: "",
            password: "",
            contactNumber: "",
            email: "",
            address: "",
            errors: {}
        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    //Form Validation part
    validate = (
        firstName,
        lastName,
        post,
        username,
        password,
        contactNumber,
        email,
        address
    ) => {
        const errors = setErrors(
            firstName,
            lastName,
            post,
            username,
            password,
            contactNumber,
            email,
            address
        );

        this.setState({ errors: errors });

        return Object.values(errors).every((err) => err === "");
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, post, username, password, contactNumber, email, address } = this.state;

        if (this.validate(firstName, lastName, post, username, password, contactNumber, email, address)) {

            const data = {
                firstname: firstName,
                lastname: lastName,
                post: post,
                username: username,
                password: password,
                contactnumber: contactNumber,
                email: email,
                address: address
            }
            console.log(data)

            axios.post("/employee/save", data).then((res) => {
                if (res.data.success) {
                    
                    swal.fire("Added", "Employee Added Successfully!", "success");
                    
                    this.setState(
                        {
                            firstName: "",
                            lastName: "",
                            post: "",
                            username: "",
                            password: "",
                            contactNumber: "",
                            email: "",
                            address: ""
                        }
                    )
                }
            }).catch((err) => {
                alert(err)
            })
        }
    }

    btnDemo = (e) => {
        e.preventDefault();

        const {  firstName, lastName, post, username, password, contactNumber, email, address} = this.state;

        const data = {
                firstname: firstName,
                lastname: lastName,
                post: post,
                username: username,
                password: password,
                contactnumber: contactNumber,
                email: email,
                address: address,
        }

        console.log(data)

        this.setState(
            {
                firstName: "Aida",
                lastName: "Bugg",
                post: "Trainig class manager",
                username: "aida123",
                password: "aida123",
                contactNumber: "0814532671",
                email: "aida@gmail.com",
                address: "1/53,Malabe,Colombo",
            }
        )
    }

    render() {
        return (
            <div style={{backgroundColor:"rgb(0,0,0,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}> 
            <form className="needs-validation" noValidate>
                <h2 style={{marginTop:'20px', marginLeft:'400px', color:'white'}}>Add Employee</h2>    
                <div className="mb-3" style={{ marginBottom: '15px' }}>
                    <label className="form-label"  style={{ marginBottom: '5px', marginTop:'20px',  color:'white' }}>First Name</label>
                    <input type="text" className="form-control" name="firstName" placeholder="Enter Employee's First Name" value={this.state.firstName} onChange={this.handleInputChange} />

                    {this.state.errors.firstName && (
                        <div classNane="text-danger" style={{ color: "red" }}>
                            {this.state.errors.firstName}
                        </div>
                    )}

                </div>

                <div className="mb-3" style={{ marginBottom: '15px' }}>
                    <label className="form-label" style={{ marginBottom: '5px', color:'white' }}>Last Name</label>
                    <input type="text" className="form-control" name="lastName" placeholder="Enter Employee's Last Name" value={this.state.lastName} onChange={this.handleInputChange} />

                    {this.state.errors.lastName && (
                        <div classNane="text-danger" style={{ color: "red" }}>
                            {this.state.errors.lastName}
                        </div>
                    )}
                </div>

                <div className="mb-3" style={{ marginBottom: '15px' }}>
                    <label className="form-label" style={{ marginBottom: '5px', color:'white' }}>Post</label>
                    <input type="text" className="form-control" name="post" placeholder="Enter Employee's Post" value={this.state.post} onChange={this.handleInputChange} />

                    {this.state.errors.post && (
                        <div classNane="text-danger" style={{ color: "red" }}>
                            {this.state.errors.post}
                        </div>
                    )}
                </div>

                <div className="mb-3" style={{ marginBottom: '15px' }}>
                    <label className="form-label" style={{ marginBottom: '5px', color:'white' }}>Username</label>
                    <input type="text" className="form-control" name="username" placeholder="Enter Employee's First Name" value={this.state.username} onChange={this.handleInputChange} />

                    {this.state.errors.username && (
                        <div classNane="text-danger" style={{ color: "red" }}>
                            {this.state.errors.username}
                        </div>
                    )}
                </div>

                <div className="mb-3" style={{ marginBottom: '15px' }}>
                    <label className="form-label"style={{ marginBottom: '5px', color:'white' }}>Password(at least 4 characters long)</label>
                    <input type="password" className="form-control" name="password" minLength="4" placeholder="Enter a Password" value={this.state.password} onChange={this.handleInputChange} />

                    {this.state.errors.password && (
                        <div classNane="text-danger" style={{ color: "red" }}>
                            {this.state.errors.password}
                        </div>
                    )}
                </div>

                <div className="mb-3" style={{ marginBottom: '15px' }}>
                    <label className="form-label" style={{ marginBottom: '5px', color:'white' }}>Contact Number</label>
                    <input type="text" className="form-control" name="contactNumber" maxLength="10" placeholder="Enter Employee's Contact Number" value={this.state.contactNumber} onChange={this.handleInputChange} />

                    {this.state.errors.contactNumber && (
                        <div classNane="text-danger" style={{ color: "red" }}>
                            {this.state.errors.contactNumber}
                        </div>
                    )}

                </div>

                <div className="mb-3" style={{ marginBottom: '15px' }}>
                    <label className="form-label" style={{ marginBottom: '5px', color:'white' }}>Email</label>
                    <input type="email" className="form-control" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" placeholder="Enter Employee's Email" value={this.state.email} onChange={this.handleInputChange} />

                    {this.state.errors.email && (
                        <div classNane="text-danger" style={{ color: "red" }}>
                            {this.state.errors.email}
                        </div>
                    )}
                </div>

                <div className="mb-3" style={{ marginBottom: '15px' }}>
                    <label className="form-label" style={{ marginBottom: '5px', color:'white' }}>Address</label>
                    <input type="text" className="form-control" name="address" placeholder="Enter Employee's Address" value={this.state.address} onChange={this.handleInputChange} />

                    {this.state.errors.address && (
                        <div classNane="text-danger" style={{ color: "red" }}>
                            {this.state.errors.address}
                        </div>
                    )}
                </div>

                <button type="submit" className="btn btn-dark" style={{ marginTop: '15px', marginBottom:'20px', marginLeft:"120px", width:"750px", backgroundColor:"#2E4661", borderRadius:"10px", padding:"10px 0px 10px 0px"}} onClick={this.onSubmit}>Submit</button>
                      
                      </form>
                      <button type="submit" className="btn btn-dark" style={{ marginTop: '15px', marginBottom:'20px', marginLeft:"900px", width:"140px", backgroundColor:"#2E4661", borderRadius:"10px", padding:"10px 0px 10px 0px"}} onClick={this.btnDemo}>Demo</button>
            </div>
        );
    }
}

export default AddEmployee;