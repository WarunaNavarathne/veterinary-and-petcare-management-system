import React, { Component } from 'react';
import SideNav from '../SIDENAV/sidenav';
import axios from 'axios';
import swal from "sweetalert2";
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import '../SIDENAV/sidenav.css';

const generatePDF = employees => {
    const doc = new jsPDF();
    const tableColumn = ["First name", "Last name", "Email", "Address", "Contact number"];
    const tableRows = [];
 
    employees.map(employees => {
      const employeedata = [
        employees.firstname,
        employees.lastname,
        employees.email,
        employees.address,
        employees.contactnumber,
   ];
      tableRows.push(employeedata);
    })
    doc.text("WOOF PET CARE", 70,8).setFontSize(13);
    doc.text("Employee Detail Report", 14, 16).setFontSize(13); 
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("Employee details.pdf");
 }

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees() {
        axios.get("/employee").then(res => {
            if (res.data.success) {
                this.setState({
                    employees: res.data.existingEmployees
                });

                console.log(this.state.employees)
            }
        });
    }

    onDelete = (id)=>{
        axios.delete(`/employee/delete/${id}`).then((res)=>{
            swal.fire("Deleted", "Employee Deleted Successfully!", "error");
            this.getEmployees();
        })
    }    

    filterData(employees,searchKey){
        const result = employees.filter((employee)=>
            employee.firstname.toLowerCase().includes(searchKey) ||
            employee.lastname.toLowerCase().includes(searchKey) || 
            employee.username.toLowerCase().includes(searchKey)  ||
            employee.email.toLowerCase().includes(searchKey) 
        )
        this.setState({employees:result})
    }

    handleSearchArea = (e) => {
       const searchKey = e.currentTarget.value;
       
       axios.get("/employee").then(res => {
        if (res.data.success) {
            this.filterData(res.data.existingEmployees,searchKey)
        }    
    });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-9 mt-2 mb-2"/>
                    <div className="col-lg-3 mt-2 mb-2">
                        <input className="form-control" type="search" placeholder="Search" name="searchEmployee" onChange={this.handleSearchArea}>                                
                        </input>
                    </div>

                    <div>
                        <button type ="button" style={{backgroundColor:"#2E4661", padding:"10px"}} class = "btn btn-secondary btn-sm" onClick={()=> generatePDF(this.state.employees)}>Generate Report of Employees</button>
                    </div>
                </div>  

                               
                <table className="table table-hover" style={{backgroundColor:"rgb(0,0,0,0.6)",borderRadius:"20px 20px 0px 0px", marginTop:"30px"}}>
                    <thead>
                        <tr>
                            <th scope="col" style={{color:"white", fontSize:"20px", paddingLeft:"30px"}}>#</th>
                            <th scope="col" style={{color:"white", fontSize:"20px"}}>First name</th>
                            <th scope="col" style={{color:"white", fontSize:"20px"}}>Last name</th>
                            <th scope="col" style={{color:"white", fontSize:"20px"}}>Username</th>
                            <th scope="col" style={{color:"white", fontSize:"20px", paddingLeft:"35px"}}>Email</th>
                            <th scope="col" style={{color:"white", fontSize:"20px", paddingLeft:"35px"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employees, index) => (
                            <tr key={index}>
                                <th scope="row"  style={{color:"white", paddingLeft:"50px"}}>{index + 1}</th>
                                <td>
                                    <a href={`/user/employee/${employees._id}`} style={{ textDecoration: 'none', fontSize:"20px" }}>
                                        {employees.firstname}
                                    </a>
                                </td>
                                <td style={{color:"white"}}>{employees.lastname}</td>
                                <td style={{color:"white"}}>{employees.username}</td>
                                <td style={{color:"white"}}>{employees.email}</td>
                                <td>
                                    <a className="btn btn-warning" style={{backgroundColor:"#224a78", borderColor:"white", borderStyle:"solid", color:"white"}} href={`/user/edit/${employees._id}`}>
                                        <i className="fas fa-edit" style={{color:"white"}}></i>&nbsp;Edit
                                    </a>
                                    &nbsp;
                                    <a className="btn btn-danger" style={{backgroundColor:"#6b6d71", borderColor:"white", borderStyle:"solid", color:"white"}} href="#" onClick={()=>this.onDelete(employees._id)}>
                                        <i className="far fa-trash-alt" style={{color:"white"}}></i>&nbsp;Delete
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
              
            </div>
        );
    }
}

export default Home;