
import React , {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
export default function TeachersDetail() {
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
      <div className="col" align="center" style={{ color: "#005aaa", textDecoration: "underline" }}>
        <h4 style={{marginTop:"20px"}}>Teacher's Detail</h4>
      </div>
    </div>
    <br />
    <br />
    
    <div className="grid">
      <div className="name items" data-aos="zoom-in">
        <img src="https://tse1.mm.bing.net/th?id=OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa&pid=Api&P=0&h=180" alt="Teacher 1" />
        <h4 >Punyaja Rath</h4>
        <p >English Teacher</p>
      </div>
      <div className="name items"data-aos="zoom-out">
        <img src="https://tse1.mm.bing.net/th?id=OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa&pid=Api&P=0&h=180" alt="Teacher 2" />
        <h4 >Punyaja Rath</h4>
        <p >English Teacher</p>
      </div>
      <div className="name items"data-aos="zoom-in">
        <img src="https://tse1.mm.bing.net/th?id=OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa&pid=Api&P=0&h=180" alt="Teacher 3" />
        <h4 >Punyaja Rath</h4>
        <p >English Teacher</p>
      </div>
      <div className="name items"data-aos="zoom-out">
        <img src="https://tse1.mm.bing.net/th?id=OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa&pid=Api&P=0&h=180" alt="Teacher 4" />
        <h4 >Punyaja Rath</h4>
        <p >English Teacher</p>
      </div>
      <div className="name items"data-aos="zoom-in">
        <img src="https://tse1.mm.bing.net/th?id=OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa&pid=Api&P=0&h=180" alt="Teacher 5" />
        <h4 >Punyaja Rath</h4>
        <p >English Teacher</p>
      </div>
      <div className="name items"data-aos="zoom-out">
        <img src="https://tse1.mm.bing.net/th?id=OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa&pid=Api&P=0&h=180" alt="Teacher 6" />
        <h4 >Punyaja Rath</h4>
        <p >English Teacher</p>
      </div>
      <div className="name items"data-aos="zoom-in">
        <img src="https://tse1.mm.bing.net/th?id=OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa&pid=Api&P=0&h=180" alt="Teacher 7" />
        <h4 >Punyaja Rath</h4>
        <p >English Teacher</p>
      </div>
      <div className="name items" data-aos="zoom-out">
        <img src="https://tse1.mm.bing.net/th?id=OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa&pid=Api&P=0&h=180" alt="Teacher 8" />
        <h4 >Punyaja Rath</h4>
        <p >English Teacher</p>
      </div>
      <div className="name items" data-aos="zoom-in">
        <img src="https://tse1.mm.bing.net/th?id=OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa&pid=Api&P=0&h=180" alt="Teacher 9" />
        <h4 >Punyaja Rath</h4>
        <p >English Teacher</p>
      </div>
      <div className="name items" data-aos="zoom-out">
        <img src="https://tse1.mm.bing.net/th?id=OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa&pid=Api&P=0&h=180" alt="Teacher 10" />
        <h4 >Punyaja Rath</h4>
        <p >English Teacher</p>
      </div>
      <div className="name items" data-aos="zoom-in">
        <img src="https://tse1.mm.bing.net/th?id=OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa&pid=Api&P=0&h=180" alt="Teacher 11" />
        <h4 >Punyaja Rath</h4>
        <p >English Teacher</p>
      </div>
      <div className="name items" data-aos="zoom-out">
        <img src="https://tse1.mm.bing.net/th?id=OIP.U76Tao4ynRFL6Nb-3WCaWQHaHa&pid=Api&P=0&h=180" alt="Teacher 12" />
        <h4 >Punyaja Rath</h4>
        <p >English Teacher</p>
      </div>
      
    </div>
    </div>
    
  );
}
