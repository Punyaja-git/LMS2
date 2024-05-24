import React from "react";

export default function Login() {
    const toggleForm = (type) => {
        // Your toggleForm function logic here
    };

    return (
        <>
            <section className="main_login" style={{ marginTop: "-20px" }}>
                <div className="container-xlg overlay">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 m-1">
                            <div className="login mt-3">
                                <div className="login_div text-center p-4">
                                    <div className="content-title-box mb-3" style={{ borderBottom: "2px solid #fff" }}>
                                        <div className="title" style={{ fontSize: "30px", color: "white", fontWeight: "bold" }}>Login</div>
                                    </div>
                                    <div id="login_form" className="d-flex flex-column justify-content-center mt-5">
                                        <div className="content-box">
                                            <div className="row">
                                                <div className="col-md-2"></div>
                                                <div className="col-md-8" style={{}}>
                                                    <div className="basic-group">
                                                        <div className="form-group">
                                                            <button onClick={() => toggleForm('user')} data-toggle="modal" data-target="#userModal" className="btn w-100" id="user_button" style={{ border: "2px solid #659EC7", borderRadius: "10px", background: "#659EC7", color: "black" }}>
                                                                <div className="d-flex justify-content-start font-weight-bold"><i className="fas fa-lock mr-2"></i>User (Learner) login</div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="modal form_type mt-lg-5 fade" id="userModal" >
                <div className="modal-dialog">
                    <div className="modal-content" style={{ background: "rgba(255, 255, 255, 1)", borderRadius: "10px" }}>
                        <div className="modal-header" style={{display: "unset;"}}>
                            <h4 className="modal-title text-black font-weight-bold">Learner Login</h4>
                            <button type="button" className="close text-black font-weight-bold" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <form id="user-form" action="" method="post" className="">
                                <div className="form-group d-flex flex-column justify-content-start">
                                    <input style={{ fontSize: "14px" }} type="email" className="form-control" name="email" id="user-login-email" placeholder="Login with email" value="" required autoComplete="on" />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="user-login-password" name="password" placeholder="Password" value="" required />
                                    <input type="hidden" id="hashed-password" name="hashed_password" /> {/* Hidden field to store hashed password */}
                                    <input type="hidden" className="login_lat" value="Not Allowed" name="lat" />
                                    <input type="hidden" className="login_long" value="Not Allowed" name="long" />
                                    <span id="password-error" className="text-danger"></span>
                                </div>
                              
                                <div className="content-update-box text-center">
                                    <button type="submit" id="user_login_btn" className="btn" style={{ fontWeight: "bold", border: "2px solid #8a4b00", borderRadius: "10px", background: "#8a4b00", color: "#fff" }}>Login</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal" style={{ background: "orange", border: "2px solid orange", borderRadius: "10px" }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
