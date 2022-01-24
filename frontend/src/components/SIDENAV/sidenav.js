import React, { Component } from 'react';
import "./sidenav.css"
import logo from "./logo.png"

class SIDENAV extends Component {
    render() {
        return (
           <div>
                 <nav
                     id="sidebarMenu"
                     class="collapse d-lg-block sidebar collapse bg-white"
                >
            <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4">
        <a
           href="#"
           class="list-group-item list-group-item-action py-2 ripple"
           aria-current="true"
           >
          <i class="fas fa-tachometer-alt fa-fw me-3"></i
            ><span>User Management</span>
        </a>
        <a
           href="#"
           class="list-group-item list-group-item-action py-2 ripple "
           >
          <i class="fas fa-chart-area fa-fw me-3"></i
            ><span>Inventory</span>
        </a>
        <a
           href="#"
           class="list-group-item list-group-item-action py-2 ripple"
           ><i class="fas fa-lock fa-fw me-3"></i><span>Appointment</span></a
          >
        <a
           href="#"
           class="list-group-item list-group-item-action py-2 ripple"
           ><i class="fas fa-chart-line fa-fw me-3"></i
          ><span>Pet Treatment</span></a
          >
        <a
           href="#"
           class="list-group-item list-group-item-action py-2 ripple"
           >
          <i class="fas fa-chart-pie fa-fw me-3"></i><span>Pet Boarding</span>
        </a>
        <a
           href="#"
           class="list-group-item list-group-item-action py-2 ripple"
           ><i class="fas fa-chart-bar fa-fw me-3"></i><span>Point Of Sales</span></a
          >
        <a
           href="#"
           class="list-group-item list-group-item-action py-2 ripple"
           ><i class="fas fa-globe fa-fw me-3"></i
          ><span>Pet Training  Classes</span></a
          >
        <a
           href="#"
           class="list-group-item list-group-item-action py-2 ripple"
           ><i class="fas fa-building fa-fw me-3"></i
          ><span>Labarotory</span></a
          >
        
      </div>
    </div>
  </nav>    
         <div style={{backgroundColor:"white"}}>
            <img src={logo} style={{marginLeft:"680px",marginTop:"16px",marginBottom:"20px", width:"400px", height:"auto"}}></img>
            {/* <button className="button2 button:hover" onClick={logoutHandler}>Logout</button>   */}
           </div>
           
           </div>
        );
    }
}

export default SIDENAV