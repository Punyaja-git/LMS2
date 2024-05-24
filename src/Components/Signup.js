import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    return(
        <>
        <section className="main_login" style={{marginTop:"-20px"}}>
        <div className="container p-4">
        <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="user-dashboard-box mt-3">
                  <div className="user-dashboard-content w-100 login-form hidden">
                        <div className="content-title-box">
                              <div className="title">Login</div>
                              <div className="subtitle">Provide your valid login credentials.</div>
                        </div>
                        <form action="" method="post">
                            <div className="content-box">
                                <div className="basic-group">
                                    <div className="form-group">
                                      <label for="login-email"><span className="input-field-icon"><i className="fas fa-envelope"></i></span> Email:</label>
                                      <input type="email" className="form-control" name="email" id="login-email" placeholder="Email" required=""/>
                                    </div>
                                    <div className="form-group">
                                      <label for="login-password"><span className="input-field-icon"><i className="fas fa-lock"></i></span> Password:</label>
                                      <input type="password" className="form-control" name="password" placeholder="Password" required=""/>              </div>
                                </div>
                            </div>
                          <div className="content-update-box">
                              <button type="submit" className="btn">Login</button>
                          </div>
                          <div className="forgot-pass text-center">
                              <span>or</span>
                              <Link to="javascript::" onclick="toggoleForm('forgot_password')">Forgot password</Link>
                          </div>
                          <div className="account-have text-center">
                              Do not have an account? <Link to="javascript::" onclick="toggoleForm('registration')">Sign up</Link>
                          </div>
                      </form>
                  </div>

                   <div className="user-dashboard-content w-100 register-form">
					  <form action="" method="post" id="register_form" enctype="multipart/form-data">
					  <div className="register-section">
							  <div className="content-title-box" style={{backgroundColor:"#00a0e4",color:"white"}}>              <div className="title text-white font-weight-bold">Registration form</div>
								  <div className="subtitle text-white font-weight-bold">Sign up and start learning</div>
							  </div>
                            <div className="content-box">
                                <div className="basic-group p-4">
                                    <div className="row">
                                    	<div className="col col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="first_name"><span className="input-field-icon"><i className="fas fa-user"></i></span> First name:</label><code>*</code>
                                                <input type="text" className="form-control" name="first_name" id="first_name" placeholder="First name" value="" required=""/></div>
                                    	</div>
                                    	<div className="col col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="last_name"><span className="input-field-icon"><i className="fas fa-user"></i></span> Last name:</label><code>*</code>
                                                <input type="text" className="form-control" name="last_name" id="last_name" placeholder="Last name" value="" required=""/>                                      </div>
                                    	</div>
                                    </div>
                                   
                                   
                                    <div className="row">
                                        <div className="col col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="registration-email"><span className="input-field-icon"><i className="fas fa-envelope"></i></span> Email:</label><code>*</code>
                                                <input type="email" className="form-control registration_email" name="email" id="registration-email" placeholder="Email" value="" required=""/></div>
                                        </div>
                                        <div className="col col-md-6 col-12">
                                            <div className="form-group">
                                                <label for="registration-password"><span className="input-field-icon"><i className="fas fa-lock"> </i></span> Password:</label><code>*</code>
                                                <input type="password" className="form-control registration_password" min="8" name="password" id="registration-password" placeholder="Password" value="" required=""/>                                           <input type="hidden" id="hashed-password" name="hashed_password"/>                                    <span id="password-error" className="text-danger"></span>
                                            </div>
                                    	</div>
                                    </div>
                                </div>
                            </div>
							<div className="content-update-box">
                                <button style={{backgroundColor: "rgb(0, 90, 170)!important", cursor:"pointer"}} type="button" className="btn" id="signup">Sign up</button>
                            </div>
                            <div className="content-update-box" style={{display:"none"}}>
                                <button type="submit" className="btn">Submit</button>
                            </div>
                            <div className="account-have text-center" >
                              Already have an account? <Link to="/login" onclick="toggoleForm('login')">Login</Link>
                            </div>
						</div>
						

							<div className="otp-form hidden">
								<div className="content-title-box">
								  <div className="title">Verify</div>
								  <div className="subtitle">Enter otp here.</div>
								</div>

								  <div className="content-box">
										<div className="row">
											<div className="col-md-3"></div>
											<div className="col-md-6">
												<div className="basic-group p-5">
													<div className="form-group">
													  <label for="login-email"><span className="input-field-icon"><i className="fas fa-envelope"></i></span> Otp:</label>
													  <input type="text" className="form-control" name="otp" id="otp" placeholder="Enter otp" value="" required=""/>		</div>

												</div>
											</div>
											<div className="col-md-3"></div>
										</div>
								  </div>
                                    <input type="hidden" name="register_type" value="4"/>
								  <div className="content-update-box">
									  <button type="button" className="btn" id="otp_verify">Verify &amp; submit</button>
									  
								  </div>
							</div>

                       </form>
                    </div>
                  <div className="user-dashboard-content w-100 forgot-password-form hidden">
                      <div className="content-title-box">
                          <div className="title">Forgot password</div>
                          <div className="subtitle">Provide your email address to get password.</div>
                      </div>
                      <form action="" method="post">
                          <div className="content-box">
                              <div className="basic-group">
                                  <div className="form-group">
                                      <label for="forgot-email"><span className="input-field-icon"><i className="fas fa-envelope"></i></span> Email:</label><code>*</code>
                                      <input type="email" className="form-control" name="email" id="forgot-email" placeholder="Email" value="" required=""/>                              <small className="form-text text-muted">Provide your email address to get password.</small>
                                  </div>
                              </div>
                          </div>
						  <input type="hidden" name="register_type" value="4"/>
                          <div className="content-update-box">
                              <button type="submit" className="btn">Reset password</button>
                          </div>
                          <div className="forgot-pass text-center">
                              Want to go back? <Link to="javascript::" onclick="toggoleForm('login')">Login</Link>
                          </div>
                      </form>
                  </div>
              </div>
            </div>
        </div>
    </div>
</section>
</>
    );
    
}