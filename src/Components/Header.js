import React from "react";
import {Link} from "react-router-dom";
export default function Header(props) {
  
    return (
        <>

            <section id="second-header" className="menu-area" style={{ position: "sticky", top: "0px", width: "100%", padding: "0px", zIndex: "1000", background: "#005aaa" }}>
                <div className="container-xlg mobileFixedNav pt-lg-0 pt-md-0 pt-sm-4" style={{ width: "100%", padding: "5px", zIndex: "1000", background: "#005aaa" }}>
                    <div className="row">
                        <div className="col">
                            <nav className="navbar navbar-expand-lg  d-flex justify-content-between p-2 window_view" style={{ background: "#005aaa", height: "53px" }}>
                                <ul className="mobile-header-buttons">
                                    <li><Link className="mobile-nav-trigger" href="#mobile-primary-nav">Menu<span ></span></Link></li>
                                    <div className="nav-sign-btn" style={{ display: "none", marginTop: "-10px" }}></div>
                                </ul>
                                <div className="main-nav-wrap" style={{ background: "rgb(255 255 255 / 0%);" }}>
                                    <div className="mobile-overlay"></div>
                                    <ul className="mobile-main-nav" style={{ background: "rgb(255 255 255 / 0%);" }}>
                                        <div className="mobile-menu-helper-top"></div>
                                        <div className="img-logo text-center">
                                            <Link to="/">
                                            <img src={"assets/frontend/default/img/" + props.img} alt="" height="50px" width="150px" />

                                            </Link>
                                        </div>
                                        <div className="mobile-menu-helper-bottom"></div>
                                    </ul>
                                </div>
                                <div className="container-lg d-flex flex-row justify-content-between" >
                                    <div className="menu d-flex flex-row no-mobile justify-content-between col-12 text-center">
                                        <div className="nav_items m-3">
                                            <Link to="/" className="d-flex flex-row text-center" style={{ fontSize: "18px !important" }}>
                                                <i className="fas fa-home text-white mr-2 activemain"></i>
                                                <span className="activemain"  style={{ color: "#fff", marginTop: "-2px" }}>Home</span>
                                            </Link>
                                        </div>
                                        <div className="nav_items m-3">
                                            <Link to="/about" className="d-flex flex-row text-center" style={{ fontSize: "18px !important" }}>
                                                <i className="fas fa-info-circle text-white mr-2"></i>
                                                <span className="" style={{ color: "#fff", marginTop: "-3px" }}>About US</span>
                                            </Link>
                                        </div>
                                        <div className="nav_items m-3">
                                            <Link to="/studentguide" className="d-flex flex-row text-center" style={{ fontSize: "18px !important" }}>
                                                <i className="fas fa-book text-white mr-2"></i>
                                                <span className="" style={{ color: "#fff", marginTop: "-3px" }}>Student Guide</span>
                                            </Link>
                                        </div>
                                        <div className="nav_items m-3">
                                            <Link to="/library" className="d-flex flex-row text-center" style={{ fontSize: "18px !important" }}>
                                                <i className="fas fa-book text-white mr-2"></i>
                                                <span className="" style={{ color: "#fff", marginTop: "-3px" }}>Library</span>
                                            </Link>
                                        </div>
                                        <div className="nav_items m-3">
                                            <Link to="/contact" className="d-flex flex-row text-center" style={{ fontSize: "18px !important" }}>
                                                <i className="fas fa-envelope text-white mr-2"></i>
                                                <span className="" style={{ color: "#fff", marginTop: "-3px" }}>Contact</span>
                                            </Link>
                                        </div>
                                        <div className="nav_items m-3">
                                            <Link to="https://myw.aicopl.net/login" target="_blank" className="d-flex flex-row text-center" style={{ fontSize: "18px !important" }}>
                                                <i className="fa fa-arrow-circle-right text-white mr-2" aria-hidden="true"></i>
                                                <span className="" style={{ color: "#fff", marginTop: "-3px" }}>Login</span>
                                            </Link>
                                        </div>
                                        {/* <div className="nav_items m-3">
                                            <Link to="/signup" className="d-flex flex-row text-center" style={{ fontSize: "18px !important" }}>
                                                <i className="fas fa-user-plus text-white mr-2"></i>
                                                <span className="" style={{ color: "#fff", marginTop: "-3px" }}>Sign Up</span>
                                            </Link>
                                        </div> */}
                                    </div>
                                    <div className="user-box menu-icon-box" style={{ background: "#005aaa" }}>
                                        <div className="dropdown user-dropdown corner-triangle top-right">
                                            <ul className="user-dropdown-menu">
                                                <li className="user-dropdown-menu-item">
                                                    <Link to="/" className="d-flex flex-row text-center">
                                                        <span className="fas fa-home text-dark mr-2" style={{ marginTop: "4px" }}></span>
                                                        <span className="active" style={{ fontWeight: "bold", color: "black" }}>Home</span>
                                                    </Link>
                                                </li>
                                                <li className="user-dropdown-menu-item">
                                                    <Link to="/about" className="d-flex flex-row text-center">
                                                        <span className="fas fa-info-circle text-dark mr-2" style={{ marginTop: "4px" }}></span>
                                                        <span className="" style={{ fontWeight: "bold", color: "black" }}>About Us</span>
                                                    </Link>
                                                </li>
                                                <li className="user-dropdown-menu-item">
                                                    <Link to="/studentguide" className="d-flex flex-row text-center">
                                                        <span className="fas fa-download text-dark mr-2" style={{ marginTop: "4px" }}></span>
                                                        <span className="" style={{ fontWeight: "bold", color: "black" }}>Student Guide</span>
                                                    </Link>
                                                </li>
                                                <li className="user-dropdown-menu-item">
                                                    <Link to="/library" className="d-flex flex-row text-center">
                                                        <span className="fas fa-download text-dark mr-2" style={{ marginTop: "4px" }}></span>
                                                        <span className="" style={{ fontWeight: "bold", color: "black" }}>Library</span>
                                                    </Link>
                                                </li>
                                                <li className="user-dropdown-menu-item">
                                                    <Link to="https://myw.aicopl.net/login" target="_blank" className="d-flex flex-row text-center">
                                                    <span className="fas fa-user-plus text-dark mr-2" style={{ marginTop: "4px" }}></span>
                                                        <span className="" style={{ fontWeight: "bold", color: "black" }}>Login</span>
                                                    </Link>
                                                </li>
                                                {/* <li className="user-dropdown-menu-item">
                                                    <Link to="/signup"  className="d-flex flex-row text-center">
                                                        <span className="fas fa-user-plus text-dark mr-2" style={{ marginTop: "4px" }}></span>
                                                        <span className="" style={{ fontWeight: "bold", color: "black" }}>Sign Up</span>
                                                    </Link>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
