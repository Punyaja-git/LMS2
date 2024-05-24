import React , {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SchoolDetail() {
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
        <br />
        <div className="row">
          <div className="col items"data-aos="zoom-in" align="center" style={{ color: "#005aaa", textDecoration: "underline" }}>
            <h4>School Detail</h4>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <div>
            <p className="items" data-aos="flip-right">Know about SAI International School, Bhubaneswar: Board & Curriculum, Admission Procedure, Fees & Fee Structure, Contact Details, Facilities and Ranking, Rating and Reviews.</p>
            <p className="items" data-aos="flip-left">SAI International School Bhubaneswar, is a Senior Secondary School (XI-XII), affiliated to Central Board of Secondary Education (CBSE). The School is a Coed Day Cum Boarding School, with classes from Playgroup to XII. It is an English Medium school. The school is located in Patia area of Bhubaneswar, Odisha. SAI International School was established in 2008. It is a Private School and is managed by St. Shirdi Sai Education Society.</p>
            <div className="mb-4 items" data-aos="flip-up">
              <div className="mb-3">Basic facts about <span>SAI International School</span>:</div>
              <div className="school-stats row">
                <div className="mb-3 col-sm-6 col-md-4">
                  <div className="text-muted">Year Established</div>
                  <div className="h5">2008</div>
                </div>
                <div className="mb-3 col-sm-6 col-md-4">
                  <div className="text-muted">School Type</div>
                  <div className="h5"><strong>Private School</strong></div>
                </div>
                <div className="mb-3 col-sm-6 col-md-4">
                  <div className="text-muted">Management</div>
                  <div className="h5">St. Shirdi Sai Education Society</div>
                </div>
                <div className="mb-3 col-sm-6 col-md-4">
                  <div className="text-muted">Gender</div>
                  <div className="h5">Coed</div>
                </div>
                <div className="mb-3 col-sm-6 col-md-4">
                  <div className="text-muted">Boarding</div>
                  <div className="h5"><strong>Day Cum Boarding School</strong></div>
                </div>
                <div className="mb-3 col-sm-6 col-md-4">
                  <div className="text-muted">Grades</div>
                  <div className="h5">Class Playgroup - Class XII</div>
                </div>
                <div className="mb-3 col-sm-6 col-md-4">
                  <div className="text-muted">Admission Period</div>
                  <div className="h5"></div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="mt-4 col-md-6">
                  <p className="h6">Curriculum</p>
                  <ul className="styled">
                    <li>Central Board of Secondary Education (CBSE)</li>
                  </ul>
                </div>
                <div className="mt-4 col-md-6">
                  <p className="h6">School Level</p>
                  <div>Playgroup - Senior Secondary School (XI-XII)</div>
                </div>
              </div>
            </div>
            <p className="items" data-aos="zoom-out">SAI International School Patia is a Coed Day Cum Boarding School, which serves the educational needs of hundreds of students from Playgroup through XII. The classes in SAI International School for every academic year begins in April and ends in March.</p>
            <div className="details">
              <div className="htmlContent"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
