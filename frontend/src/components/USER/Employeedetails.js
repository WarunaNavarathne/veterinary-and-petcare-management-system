import React, { Component } from 'react';
import axios from 'axios';
import user from "./user.png"

class Employeedetails extends Component {
    constructor(props){
        super(props);

        this.state={
            employee:{}    
        };
    }

    componentDidMount(){
        const userid = this.props.match.params.id;

        axios.get(`/employee/${userid}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    employee:res.data.employee
                });

                console.log(this.state.employee);
            }
        });
    }

    render() {

        const {firstname,lastname,post,username,password,contactnumber,email,address} = this.state.employee;
        
        return (
            <div style={{marginTop:'30px', backgroundColor:"rgb(0,0,0,0.6)", borderRadius:"20px"}}>
            <center>    
            <img src={user} style={{borderRadius:"50%", maxWidth:"20%", height:"20%", marginBottom:"20px", marginTop:"20px"}}></img>              
            <h2 style={{color:"white"}}>{firstname} {lastname}</h2>
            </center>
            <hr style={{borderStyle:"solid",borderColor:"white",borderWidth:"3px"}}></hr>
            <div style={{paddingLeft:"400px"}}>
            <dl className="row">
                <dt className="col-sm-3" style={{marginBottom:'20px', marginTop:'20px', color:"white", fontSize:"20px"}}>First Name</dt>
                <dd className="col-sm-9" style={{marginTop:'20px', color:"white", fontSize:"20px" }}>{firstname}</dd>
                
                <dt className="col-sm-3"  style={{marginBottom:'20px', color:"white", fontSize:"20px"}}>Last Name</dt>
                <dd className="col-sm-9" style={{color:"white", fontSize:"20px"}}>{lastname}</dd>

                <dt className="col-sm-3"  style={{marginBottom:'20px', color:"white", fontSize:"20px"}}>Post</dt>
                <dd className="col-sm-9" style={{color:"white", fontSize:"20px"}}>{post}</dd>

                <dt className="col-sm-3"  style={{marginBottom:'20px', color:"white", fontSize:"20px"}}>Username</dt>
                <dd className="col-sm-9" style={{color:"white", fontSize:"20px"}}>{username}</dd>

                <dt className="col-sm-3"  style={{marginBottom:'20px', color:"white", fontSize:"20px"}}>Contact Number</dt>
                <dd className="col-sm-9" style={{color:"white", fontSize:"20px"}}>{contactnumber}</dd>

                <dt className="col-sm-3" style={{marginBottom:'20px', color:"white", fontSize:"20px"}}>Email</dt>
                <dd className="col-sm-9" style={{color:"white", fontSize:"20px"}}>{email}</dd>

                <dt className="col-sm-3"  style={{marginBottom:'20px', color:"white", fontSize:"20px"}}>Address</dt>
                <dd className="col-sm-9" style={{color:"white", fontSize:"20px"}}>{address}</dd>
            </dl>
            </div>
            </div>
        )
    }
}

export default Employeedetails;