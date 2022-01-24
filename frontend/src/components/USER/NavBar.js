import React, { Component } from 'react';
import './NavBar.css'

class NavBar extends Component {
    render() {
        return (
           
          <div style={{marginLeft:"490px", marginTop:"25px"}}>  
            <ul class="menu-bar">
               <li>
                  <a href="/user" style={{textDecoration:"none", color:"white"}}> Employee Profiles</a>
               </li>
               <li>
                    <a href="/user/add" style={{textDecoration:"none", color:"white"}}>Add Employee</a>
               </li>
             </ul>
          </div> 
        );
    }
}

export default NavBar;