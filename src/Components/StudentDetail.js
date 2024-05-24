
import React , {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

export default function StudentDetail() {
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
      <div className="row">
        <div className="col" align="center" style={{ color: "#005aaa", textDecoration: "underline" }}>
          <h4 style={{marginTop:"45px"}}>Student Detail</h4>
        </div>
      </div>
      <br />
      <br />
      <div className="container items"  data-aos="zoom-in">
      <div className="row">
        <div className="table-wrapper" style={{ overflow: "auto" }}>
          <table className="fl-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>School</th>
                <th>Class</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Punyaja</td>
                <td>Sai international Bhubaneswar</td>
                <td>2</td>
                <td>Female</td>
                <td>02/02/1995</td>
                <td>rathapunyajaa@gmail.com</td>
                <td>9658512314</td>
                <td>Bhubaneswar Nakhara</td>
                <td>General</td>
                <td><Link to="/login" className="btn btn-primary">Login</Link></td>
              </tr>
              <tr>
                <td>Punyaja</td>
                <td>Sai international Bhubaneswar</td>
                <td>2</td>
                <td>Female</td>
                <td>02/02/1995</td>
                <td>rathapunyajaa@gmail.com</td>
                <td>9658512314</td>
                <td>Bhubaneswar Nakhara</td>
                <td>General</td>
                <td><Link to="/login" className="btn btn-primary">Login</Link></td>
              </tr>
              <tr>
                <td>Punyaja</td>
                <td>Sai international Bhubaneswar</td>
                <td>2</td>
                <td>Female</td>
                <td>02/02/1995</td>
                <td>rathapunyajaa@gmail.com</td>
                <td>9658512314</td>
                <td>Bhubaneswar Nakhara</td>
                <td>General</td>
                <td><Link to="/login" className="btn btn-primary">Login</Link></td>
              </tr>
              <tr>
                <td>Punyaja</td>
                <td>Sai international Bhubaneswar</td>
                <td>2</td>
                <td>Female</td>
                <td>02/02/1995</td>
                <td>rathapunyajaa@gmail.com</td>
                <td>9658512314</td>
                <td>Bhubaneswar Nakhara</td>
                <td>General</td>
                <td><Link to="/login" className="btn btn-primary">Login</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
}
