import React , {useEffect} from "react";
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas);


export default function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: false,
            offset: 50
        });
    // Listen to scroll event and trigger AOS refresh
    window.addEventListener('scroll', handleScroll);
        
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

const handleScroll = () => {
    // Check the scroll position
    const scrollPosition = window.scrollY;

    // Get the element to animate
    const element = document.querySelector('[data-aos="zoom-in"]');

    // Check if the element is in the viewport
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + scrollPosition;

        // Check if the element is within the viewport
        if (elementPosition < window.innerHeight + scrollPosition && elementPosition >= scrollPosition) {
            // Trigger AOS animation
            AOS.refresh();
        }
    }
};
    return (
        <div id="contact_us">
            <div className="container-xlg pl-3 pr-3 pt-lg-0 pt-md-0 pt-sm-3 mb-5" style={{ marginBottom: "10px" }}>
                <div className="bg-image mb-2 mt-lg-0 mt-md-0 mt-sm-2 mt-0">
                    <div className="image-wrapper">
                    <img src={"../../uploads/sliders/school-banner.png"} alt="" width="100%" height="260px"
    paddig-top="25%"></img>    
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center heading">
                    <span className="line_start d-flex flex-column justify-content-end"><p className="s_first_start mt-2 mb-1" style={{ marginLeft: "20px" }}></p><p className="s_second_start"></p></span>
                    <h6 className="ml-1 mr-1 main-heading items" data-aos="slide-up" style={{ color: "#BC435B" }}>Contact Us</h6>
                    <span className="line_end d-flex flex-column justify-content-end"><p className="s_first_end mt-2 mb-1" style={{ marginRight: "20px" }}></p><p className="s_second_end"></p></span>
                </div>
                <div className="row d-flex flex-row justify-content-between p-1 contact_div" style={{ borderRadius: "10px" }}>
                    <div className="osou_contact col-lg-6 col-md-6 col-12">
                        <div className="col-12 items" data-aos="fade-right">
                        <iframe style={{width:"100%",
    height: "225px"}}
    src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31116.96080143429!2d77.57771524617789!3d12.86779622282848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b2f9ed9a44d%3A0x85dbbee1c0d4bfee!2sAGILE%20ICO%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1686401731791!5m2!1sen!2sin"}
    allowFullScreen
    title="Google Maps"
></iframe>
                        </div>
                    </div>
                    <div className="osdma_contact col-lg-6 col-md-6 col-12 pt-3 anime-bottom">
                        <div className="widget-box">
                            <section id="text-2 text-dark" className="widget widget_text">
                                <div className="textwidget items" data-aos="zoom-in">
                                    <p style={{ lineHeight: "30px" }}><span><i class="fa fa-building" aria-hidden="true"></i>&nbsp;
Agile Ico Private Limited</span><br />
                                        <i className="fas fa-map-marker mr-1"></i>Address&zwnj;:
                                        488, 3rd Floor, Bomikhal Laxmisagar, <br />
                                        Bhubaneswar-751010,<br />
                                        Odisha, India<br />
                                    </p>
                                    <i className="fas fa-envelope mr-1" aria-hidden="true"></i>Email: <Link to="mailto:support@aicopl.com">support@aicopl.com</Link><br />
                                    <p style={{ textTransform: "capitalize", lineHeight: "30px" }}><i className="fas fa-phone mr-1" aria-hidden="true"></i>Phone: +91 7019626663</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
