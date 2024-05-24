import React , {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Studentguide() {
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
                <div className="col items" data-aos="fade-right" align="center" style={{ color: "#005aaa", textDecoration: "underline" }}>
                    <h4 style={{marginTop: "20px"}}>Learner Guide</h4>
                </div>
            </div>
            <br />
            <br />
            <div className="row items" data-aos="zoom-in">
                <div className="col" align="center">
                    <div className="card text-center" style={{ width: "17rem", backgroundColor: "#00a0e4" }}>
                        <div className="card-body">
                            <h5 className="card-title"><a href="../../assets/frontend/default/user_guide/aicoplguidedemo.pdf" style={{ color: "white" }} target="_blank">Guide for Study </a></h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                    </div>
                </div>
                <div className="col" align="center">
                    <div className="card text-center" style={{ width: "17rem", backgroundColor: "#00a0e4" }}>
                        <div className="card-body">
                            <h5 className="card-title"><a href="../../assets/frontend/default/user_guide/aicoplguidedemo.pdf" style={{ color: "white" }} target="_blank">Guide for Library </a></h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                    </div>
                </div>
                {/* <div className="vl" style={{ borderLeft: "1px solid #005aaa!important" }}></div> */}
           
            </div>
            <div className="row items" data-aos="zoom-in">
                <div className="col" align="center">
                    <div className="card text-center" style={{ width: "17rem", backgroundColor: "#00a0e4" }}>
                        <div className="card-body">
                            <h5 className="card-title"><a href="../../assets/frontend/default/user_guide/aicoplguidedemo.pdf" style={{ color: "white" }} target="_blank">Guide for Quiz</a></h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                    </div>
                </div>
                <div className="col" align="center">
                    <div className="card text-center" style={{ width: "17rem", backgroundColor: "#00a0e4" }}>
                        <div className="card-body">
                            <h5 className="card-title"><a href="../../assets/frontend/default/user_guide/aicoplguidedemo.pdf" style={{ color: "white" }} target="_blank">Guide for Study Material </a></h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                    </div>
                </div>
                {/* <div className="vl" style={{ borderLeft: "1px solid #005aaa!important" }}></div> */}
           
            </div>

          
        
        </div>
    );
}
