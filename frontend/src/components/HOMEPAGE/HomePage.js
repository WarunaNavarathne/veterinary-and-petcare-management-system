import React, { Component } from 'react';
import image1 from "./Dog-Obedience-Training.jpg"
import image2 from "./inventory2.jpeg"
import image3 from "./boarding3.jpg"
import image4 from "./point.jpg"
import image5 from "./user.jpg"
import image6 from "./appointment.jpg"
import image7 from "./treat.jpg"
import image8 from "./lab.jpg"



class HomePage extends Component {
    render() {
        return (
            <div>
                <br/>
                <center><h2>WOOF VERTINARY AND PET CARE CENTER</h2></center>
                <br/>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={image5} class="card-img-top" alt="..."/>
                            <div class ="card-body" style={{backgroundColor:"greenyellow"}}>
                             <center>
                                 <a className="btn btn-warning" href={`/user/`}>
                                        User Management
                                    </a></center>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                        <img src={image6} class="card-img-top" alt="..."/>
                            <div class ="card-body" style={{backgroundColor:"greenyellow"}}>
                             <center>
                                 <a className="btn btn-warning" href={`/`}>
                                        Appointment Management
                                    </a></center>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <img src={image2} class="card-img-top" alt="..."/>
                            <div class ="card-body" style={{backgroundColor:"greenyellow"}}>
                             <center>
                                 <a className="btn btn-warning" href={`/`}>
                                        Inventory Management
                                    </a></center>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                        <img src={image7} class="card-img-top" alt="..."/>
                            <div class ="card-body" style={{backgroundColor:"greenyellow"}}>
                             <center>
                                 <a className="btn btn-warning" href={`/`}>
                                        Pet Treatment Record Management
                                    </a></center>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                        <img src={image3} class="card-img-top" alt="..."/>
                            <div class ="card-body" style={{backgroundColor:"greenyellow"}}>
                             <center>
                                 <a className="btn btn-warning" href={`/`}>
                                        Pet Boarding Management
                                    </a></center>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                        <img src={image4} class="card-img-top" alt="..."/>
                            <div class ="card-body" style={{backgroundColor:"greenyellow"}}>
                             <center>
                                 <a className="btn btn-warning" href={`/`}>
                                        Point of Sales Management
                                    </a></center>
                            </div>
                        </div>
                    </div>

                    <div class="col" style={{marginBottom:'30px'}}>
                        <div class="card">
                        <img src={image1} class="card-img-top" alt="..."/>
                            <div class ="card-body" style={{backgroundColor:"greenyellow"}}>
                             <center>
                                 <a className="btn btn-warning" href={`/`}>
                                        Pet Training Classes Management
                                    </a></center>
                            </div>
                        </div>
                    </div>

                    <div class="col" style={{marginBottom:'30px'}}>
                        <div class="card">
                        <img src={image8} class="card-img-top" alt="..."/>
                            <div class ="card-body" style={{backgroundColor:"greenyellow"}}>
                             <center>
                                 <a className="btn btn-warning" href={`/`}>
                                        Laboratory Management
                                    </a></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;