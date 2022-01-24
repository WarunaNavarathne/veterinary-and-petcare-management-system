import React, { Component } from 'react';
import axios from 'axios'
import swal from "sweetalert2"


class EditEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName:"",
            lastName:"",
            post:"",
            username:"",
            password:"",
            contactNumber:"",
            email:"",
            address:""
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault();

        const userid = this.props.match.params.id;
        const {firstName,lastName,post,username,password,contactNumber,email,address} = this.state;
        const data = {
            firstname:firstName,    
            lastname:lastName,
            post:post,
            username:username,
            password:password,
            contactnumber:contactNumber,
            email:email,
            address:address
        }
        console.log(data)

        axios.put(`/employee/update/${userid}`,data).then((res)=>{
            if(res.data.success){
               swal.fire("Updated", "Employee Updated Successfully!", "success");
                this.setState(
                    {
                        firstName:"",
                        lastName:"",
                        post:"",
                        username:"",
                        password:"",
                        contactNumber:"",
                        email:"",
                        address:""
                    }
                )
            }
        }).catch((err)=>{
            alert(err)
        })
    }


    componentDidMount(){
        const userid = this.props.match.params.id;

        axios.get(`/employee/${userid}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    firstName:res.data.employee.firstname,
                    lastName:res.data.employee.lastname,
                    post:res.data.employee.post,
                    username:res.data.employee.username,
                    password:res.data.employee.password,
                    contactNumber:res.data.employee.contactnumber,
                    email:res.data.employee.email,
                    address:res.data.employee.address
                });

                console.log(this.state.employee);
            }
        });
    }

    render() {
        return (
            <div style={{backgroundColor:"rgb(0,0,0,0.5)", padding:"20px 50px 20px 50px", marginTop:"50px",marginBottom:"50px", borderRadius:"30px"}}> 
            <form className="needs-validation" noValidate>
            <h2 style={{marginTop:'20px', marginLeft:'400px', color:'white'}}>Edit Employee</h2>

                <div className="mb-3" style={{marginBottom:'15px', marginTop:'20px'}}>
                    <label className="form-label" style={{ marginBottom: '5px', marginTop:'20px',  color:'white' }}>First Name</label>
                    <input type="text" className="form-control" name="firstName" placeholder="Enter Employee's First Name" value={this.state.firstName} onChange={this.handleInputChange} required/>
                </div>

                <div className="mb-3" style={{marginBottom:'15px'}}>
                    <label className="form-label"  style={{ marginBottom: '5px', marginTop:'20px',  color:'white' }}>Last Name</label>
                    <input type="text" className="form-control" name="lastName" placeholder="Enter Employee's Last Name" value={this.state.lastName} onChange={this.handleInputChange} required/>
                </div>

                <div className="mb-3" style={{marginBottom:'15px'}}>
                    <label className="form-label"  style={{ marginBottom: '5px', marginTop:'20px',  color:'white' }}>Post</label>
                    <input type="text" className="form-control" name="post" placeholder="Enter Employee's Post" value={this.state.post} onChange={this.handleInputChange} required/>
                </div>

                <div className="mb-3" style={{marginBottom:'15px'}}>
                    <label className="form-label"  style={{ marginBottom: '5px', marginTop:'20px',  color:'white' }}>Username</label>
                    <input type="text" className="form-control" name="username" placeholder="Enter Employee's First Name" value={this.state.username} onChange={this.handleInputChange} required/>
                </div>

                <div className="mb-3" style={{marginBottom:'15px'}}>
                    <label className="form-label"  style={{ marginBottom: '5px', marginTop:'20px',  color:'white' }}>Password(at least 4 characters long)</label>
                    <input type="password" className="form-control" name="password" minLength="4" placeholder="Enter a Password" value={this.state.password} onChange={this.handleInputChange} required/>
                </div>

                <div className="mb-3" style={{marginBottom:'15px'}}>
                    <label className="form-label"  style={{ marginBottom: '5px', marginTop:'20px',  color:'white' }}>Contact Number</label>
                    <input type="text" className="form-control" name="contactNumber" maxLength="10" placeholder="Enter Employee's Contact Number" value={this.state.contactNumber} onChange={this.handleInputChange} required/>
                </div>

                <div className="mb-3" style={{marginBottom:'15px'}}>
                    <label className="form-label" style={{ marginBottom: '5px', marginTop:'20px',  color:'white' }}>Email</label>
                    <input type="text" className="form-control" name="email" placeholder="Enter Employee's Email" value={this.state.email} onChange={this.handleInputChange} required/>
                </div>

                <div className="mb-3" style={{marginBottom:'15px'}}>
                    <label className="form-label"  style={{ marginBottom: '5px', marginTop:'20px',  color:'white' }}>Address</label>
                    <input type="text" className="form-control" name="address" placeholder="Enter Employee's Address" value={this.state.address} onChange={this.handleInputChange} required/>
                </div>

                <button type="submit" className="btn btn-primary" style={{marginTop:'15px',marginBottom:'15px',marginLeft:'100px', width:'400px', borderRadius:"10px", padding:"10px 0px 10px 0px",backgroundColor:"#2E4661"}} onClick={this.onSubmit}>&nbsp;Update</button>
                <a className="btn btn-primary" href={`/user`} style={{marginLeft:'30px', width:"400px", borderRadius:"10px", padding:"11px 0px 11px 0px",backgroundColor:"#2E4661"}}>
                    <i className="back"></i>&nbsp;Back
                </a>
            </form>
            </div>
        );
    }
}

export default EditEmployee;