import React , {useEffect} from "react";
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Library() {
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
    <>
      <div className="container-xlg mb-5 ml-1" id="courses" data-aos="fade-right" style={{ border: "0px solid grey", borderRadius: "5px" }}>
        <section className="section section-default mt-none mb-none section-padding-0-100 clearfix">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-12 col-lg-10 offset-lg-1 col-md-10 offset-md-1 items" data-aos="zoom-in">
                <ul>
                  <h2 className="mb-sm" style={{ textAlign: "center",marginTop:"45px"}}>Library</h2><br />

                  <p> multi-purpose library designed for student content is a fantastic resource that can cater to various needs and learning styles. Such a library aims to provide diverse resources and services to support students' academic, personal, and professional growth. </p>

                  <p>Here's how a multi-purpose library for student content can benefit your school community and the types of resources it might offer: </p>



                 

                  <center>
                    <Link to="/login"><button className="text-left float-left p-2 text-white bg-primary" fdprocessedid="236p1o">Login to get your library</button></Link>
                  </center>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
