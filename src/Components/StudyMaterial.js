
import React , {useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from "react-router-dom";
export default function StudyMaterial() {
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
            <div className="row align-items-center items" data-aos="zoom-out" >
              <div className="col-12 col-lg-10 offset-lg-1 col-md-10 offset-md-1">
                <ul>
                  <h2 className="mb-sm" style={{ textAlign: "center",marginTop:"45px"}}>Student Study material</h2><br />

                  <p>Textbooks and Reference Books: These provide foundational knowledge on various subjects and are often structured in a way that follows a curriculum or syllabus.</p>

                  <p>Lecture Notes: Notes taken during classes or lectures can be valuable study material, as they often capture key points and explanations provided by the instructor.</p>

                  <p>Practice Problems and Exercises: These help reinforce understanding and develop problem-solving skills, especially in subjects like mathematics, physics, and programming.</p>

                  <p>Online Courses and Tutorials: Websites like Khan Academy, Coursera, and Udemy offer courses covering a wide range of topics, with video lectures, quizzes, and assignments.</p>

                  <p>Flashcards and Mnemonics: Useful for memorizing vocabulary, formulas, historical dates, and other key information.</p>

                  <center>
                    <Link to="/login"><button className="text-left float-left p-2 text-white bg-primary" fdprocessedid="236p1o">Login to get your Study Material</button></Link>
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
