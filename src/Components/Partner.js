import React from 'react';
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

    
// Define your component
class Partner extends React.Component {
    
    // Define prevSlide function
    prevSlide = () => {
        // Your logic for previous slide
    }

    // Define nextSlide function
    nextSlide = () => {
        // Your logic for next slide
    }

    // Render method
    render() {
        return (
            <section id="materials" style={{marginTop: "0px"}}>
                <section id="citizen_recent" style={{marginTop: "0px"}}>
                    <div className="container-xlg p-0">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 d-flex flex-column p-3 allnews font-weight-bold" style={{background: "#FFFFF7"}}>
                                <div className="heading">
                                    <h5 className="text-center font-weight-bold items" data-aos="fade-left">Important connection</h5>
                                </div>
                                <hr style={{border: "none", borderTop: "1px solid grey", margin: "10px 0"}} />
                                <div className="carousel-container">
                                    <div className="carousel-arrow prev" onClick={this.prevSlide}>
                                        <i className="fas fa-chevron-left"></i>
                                    </div>
                                    <div className="carousel card-group news d-flex">
                                        <div className="card images col-lg-4 m-1 p-1">
                                            <div className="text-center items" data-aos="zoom-in">
                                                <Link to="http://ova.gov.in/">
                                                    <img src={"assets/frontend/default/img/ova-logo.png" }height="130px" width="130px" alt="Image 1" style={{borderRadius: "50%"}} />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="card images col-lg-4 m-1 p-1">
                                            <div className="text-center items" data-aos="zoom-in">
                                                <Link to="https://culture.odisha.gov.in/">
                                                    <img src={"assets/frontend/default/img/culture_odisha_dept.png"} height="120px" width="120px" alt="Image 1" style={{borderRadius: "50%"}} />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="card images col-lg-4 m-1 p-1" style={{background: "#FFFFF7"}}>
                                            <div className="text-center items" data-aos="zoom-in">
                                                <Link to="http://it.odisha.gov.in/">
                                                    <img src={"assets/frontend/default/img/EandIT.png"} height="130px" width="130px" alt="Image 1" style={{borderRadius: "50%"}} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-arrow next" onClick={this.nextSlide}>
                                        <i className="fas fa-chevron-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="scroll-to-top" id="scroll-to-top">
                    <i className="fas fa-arrow-up"></i>
                </div>
            </section>
        );
    }
}

export default Partner;
