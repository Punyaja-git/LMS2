import React , {useEffect} from "react";
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Footer() {
 
  return (
    <section id="footer" className="bg-light text-white">
      <Link href="http://it.odisha.gov.in/"></Link>
      <div className="container-xlg pl-4 pr-4 pt-4 pb-3" style={{ background: "#005aaa", marginBottom: "-30px" }}>
        <div className="row m-0 p-0">
          <div className="col-lg-4 col-md-4 col-12 align-items-center text-lg-left text-md-left text-center">
            <div className="d-flex flex-column text-left justify-content-center heading">
              <h5 className="font-weight-bold ml-0 mr-1 main-heading items" data-aos="flip-left" style={{ color: "#feed01" }}>Contact Us</h5>
            </div>
            <div style={{ minHeight: "230px" }}>
              <h5 className="text-white">Agile Ico PVT.LTD</h5>
              <p className="text-white">
                <i className="fa fa-map-marker mr-1 text-warning "></i>&nbsp;488,3rd Floor,Bomikhal Laxmisagar,<br />
                <span className="ml-3 text-white"> Bhubaneswar-751010,</span><br />
                <span className="ml-3 text-white">Odisha,India</span>
              </p>
              <p style={{ lineHeight: "30px", marginTop: "-6px", color: "white" }}>
                <Link href="javasceipt:void(0);" style={{ color: "#fff" }}> support@aicopl.com</Link>
              </p>
              <p style={{ textTransform: "capitalize" }}>
                <i className="fa fa-fax mr-1 text-warning " aria-hidden="true"></i>&nbsp;Contact NO:<span style={{ color: "#fff" }}> +91 7019626663</span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 text-lg-left text-md-left text-center">
            <div className="d-flex flex-column text-left justify-content-center heading">
              <h5 className="font-weight-bold ml-5 pl-5 main-heading items" data-aos="flip-left" style={{ color: "#feed01" }}>Significant Connection</h5>
            </div>
            <div className="d-flex flex-column align-items-right ml-5 pl-5">
              <div className="list-group" id="list-tab" role="tablist">
                <Link target="_blank" to="/about" className="text-white">
                  <p className="card-title mt-1">About US</p>
                </Link>
                <Link target="_blank" to="/studentguide" className="text-white">
                  <p className="card-title mt-1">Student Guide</p>
                </Link>
                <Link target="_blank" to="/library" className="text-white">
                  <p className="card-title mt-1">Library</p>
                </Link>
                <Link target="_blank" to="/contact" className="text-white">
                  <p className="card-title mt-1">Contact Us</p>
                </Link>
                <Link target="_blank" to="/schools" className="text-white">
                  <p className="card-title mt-1">About School</p>
                </Link>
                <Link target="_blank" to="/teachers_detail" className="text-white">
                  <p className="card-title mt-1">About Teacher's</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12 text-lg-left text-md-left text-center">
            <div className="d-flex flex-column text-left justify-content-center heading">
              <h5 className="font-weight-bold ml-1 mr-1 main-heading items" data-aos="flip-left" style={{ color: "#feed01" }}>Social Media</h5>
            </div>
            <div className="footer-about brd-rd5 blue-bg" style={{ minHeight: "230px" }}>
              <ul className="nav nav-tabs">
                <li className="nav-item"><Link className="nav-link active text-black" data-toggle="tab" href="#facebook-tab">Facebook</Link></li>
                <li className="nav-item"><Link className="nav-link text-black" data-toggle="tab" href="#twitter-tab">Twitter</Link></li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane fade show active"  id="facebook-tab">
                  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F2077947572484759&amp;tabs=timeline&amp;width=400&amp;height=140&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId" width="100%" height="200" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" title="footer"></iframe>          </div>
                <div className="tab-pane fade bg-light" id="twitter-tab">
                  <Link className="twitter-timeline" data-width="400" data-height="200" href="https://twitter.com/OdiaVAcademy?ref_src=twsrc%5Etfw">Tweets by OdiaVAcademy</Link>
                  <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-div mt-4" style={{ background: "#36454F" }}>
      <div className="row m-0 p-0">
      <div className="col-lg-4 col-md-4 col-12  text-center">
        <div className="p-2" style={{ fontSize: "10px" }}>
          Copyright © 2023 <strong><Link target="_blank" href="#" className="read-more" style={{ color: "orange" }}>AICOPL</Link></strong> All Rights Reserved
        </div>
        </div>
      <div className="col-lg-4 col-md-4 col-12  text-center">
        
        <div className="p-2" style={{ fontSize: "12px" }}>
        <Link target="_blank" to="/PrivacyPolicy" className="read-more" style={{ color: "orange" }}>  Privacy Policy</Link>
        </div>
        </div>
        <div className="col-lg-4 col-md-4 col-12  text-center">
        
        <div className="p-2" style={{ fontSize: "12px" }}>
        <Link target="_blank" to="/Terms & Condition" className="read-more" style={{ color: "orange" }}>  Terms & Condition</Link>
        </div>
        </div>
        </div>
      </div>
      
      
    </section>
  );
}
