import { useState, useEffect } from "react";
import axios from "axios";
import './privateScreen.css'
import logo from "./logo.png"


const PrivateScreen = ({ history }) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() =>{
        if(!localStorage.getItem("authToken")){
            history.push("/login")
        }

        const fetchPrivateData = async () => {
            const config = {
                headers: {
                    "content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            }

            try {
                const {data} = await axios.get("/api/private", config)
                setPrivateData(data.data);
            } catch (error) {
                localStorage.removeItem("authToken");
                setError("You are not authorized please login")
            }
        }
        fetchPrivateData();
    }, [history])

    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        history.push("/login");
    }

    
    return(
        error ? <span className="error-message">{error}</span> : <>
        <div>
            <nav
               id="sidebarMenu"
               class="collapse d-lg-block sidebar collapse bg-white"
            >
            <div class="position-sticky">
            <div class="list-group list-group-flush mx-3 mt-4">
        <a
           href={'/user/'}
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

         <div style={{backgroundColor:"white",marginLeft:"100px", width:"3000px"}}>
            <img src={logo} style={{marginLeft:"400px",marginTop:"16px",marginBottom:"20px", width:"400px", height:"auto"}}></img>
            
         </div>
         <button style={{backgroundColor:"#2E4661",marginTop:"20px", marginLeft:"1100px", padding:"10px 20px 10px 20px", color:"white"}} onClick={logoutHandler}>logout</button>
         </div>
      </>
    )
}

export default PrivateScreen;