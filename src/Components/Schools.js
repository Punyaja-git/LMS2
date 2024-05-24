import React , {useEffect} from "react";
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Schools() {
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
    <div className="container-xlg mb-5 ml-1" id="courses" data-aos="fade-right" style={{ border: "0px solid grey", borderRadius: "5px" }}>
      <br />
      <div className="row">
        <div className="col items" data-aos="zoom-in" align="center" style={{ color: "#005aaa", textDecoration: "underline" }}>
          <h4 style={{marginTop:"20px"}}>Schools</h4>
        </div>
      </div>
      <br />
      <br />
      <div className="row" style={{ paddingTop: "10px!important" }}>
        <div className="col aicopl" align="center">
          <div className="card text-center" style={{ width: "17rem", backgroundColor: "#518874" }}>
            <div className="card-body items" data-aos="zoom-in">
              <img src="../../assets/frontend/default/img/school-icon.png" style={{ height: "40px", width: "50px" }} alt="school-icon" />
              <h5 className="card-title"><Link to="/schooldetail" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Sai international kendrapada</Link></h5>
            </div>
          </div>
        </div>
        <div className="col" align="center">
          <div className="card text-center" style={{ width: "17rem", backgroundColor: "#9e983f" }}>
            <div className="card-body items" data-aos="zoom-in">
              <img src="../../assets/frontend/default/img/school-icon.png" style={{ height: "40px", width: "50px" }} alt="school-icon" />
              <h5 className="card-title"><Link to="/schooldetail" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Sai international Cuttack</Link></h5>
            </div>
          </div>
        </div>
        <div className="col" align="center">
          <div className="card text-center" style={{ width: "17rem", backgroundColor: "#518874" }}>
            <div className="card-body items" data-aos="zoom-in">
              <img src="../../assets/frontend/default/img/school-icon.png" style={{ height: "40px", width: "50px" }} alt="school-icon" />
              <h5 className="card-title"><Link to="/schooldetail" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Sai international Bhubaneswar</Link></h5>
            </div>
          </div>
        </div>
        <div className="col" align="center">
          <div className="card text-center" style={{ width: "17rem", backgroundColor: "#9e983f" }}>
            <div className="card-body items" data-aos="zoom-in">
              <img src="../../assets/frontend/default/img/school-icon.png" style={{ height: "40px", width: "50px" }} alt="school-icon" />
              <h5 className="card-title"><Link to="/schooldetail" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Sai international Delhi</Link></h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ paddingTop: "10px!important" }}>
        <div className="col aicopl" align="center">
          <div className="card text-center" style={{ width: "17rem", backgroundColor: "#518874" }}>
            <div className="card-body items" data-aos="zoom-in">
              <img src="../../assets/frontend/default/img/school-icon.png" style={{ height: "40px", width: "50px" }} alt="school-icon" />
              <h5 className="card-title"><Link to="/schooldetail" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Sai international kendrapada</Link></h5>
            </div>
          </div>
        </div>
        <div className="col" align="center">
          <div className="card text-center" style={{ width: "17rem", backgroundColor: "#9e983f" }}>
            <div className="card-body items" data-aos="zoom-in">
              <img src="../../assets/frontend/default/img/school-icon.png" style={{ height: "40px", width: "50px" }} alt="school-icon" />
              <h5 className="card-title"><Link to="/schooldetail" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Sai international Cuttack</Link></h5>
            </div>
          </div>
        </div>
        <div className="col" align="center">
          <div className="card text-center" style={{ width: "17rem", backgroundColor: "#518874" }}>
            <div className="card-body items" data-aos="zoom-in">
              <img src="../../assets/frontend/default/img/school-icon.png" style={{ height: "40px", width: "50px" }} alt="school-icon" />
              <h5 className="card-title"><Link to="/schooldetail" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Sai international Bhubaneswar</Link></h5>
            </div>
          </div>
        </div>
        <div className="col" align="center">
          <div className="card text-center" style={{ width: "17rem", backgroundColor: "#9e983f" }}>
            <div className="card-body items" data-aos="zoom-in">
              <img src="../../assets/frontend/default/img/school-icon.png" style={{ height: "40px", width: "50px" }} alt="school-icon" />
              <h5 className="card-title"><Link to="/schooldetail" style={{ color: "white" }} target="_blank" rel="noopener noreferrer">Sai international Delhi</Link></h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
