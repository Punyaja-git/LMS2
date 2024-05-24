import React , { useEffect } from "react";
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About(){
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
    return(
    
       <section className="about_us" id="about_us">
    <div className="main-content d-flex flex-column p-0">
        <div className="row content m-0">
           
            <div className="col-12 anime-left" data-aos="fade-right" data-aos-delay="100" style={{
    paddingTop: "15px"}}> 
                <div id="myCarousel" className="carousel slide" data-ride="carousel">              
                    <ul className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                        <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
                    </ul>                                        
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src="../../uploads/sliders/about1.jpg" alt="" width="100%" height="450" />
                        </div>
                        <div className="carousel-item active">
                            <img src="../../uploads/sliders/about2.jpg" alt="" width="100%" height="450" />
                        </div>
                    </div>                          
                    {/* <Link className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </Link>
                    <Link className="carousel-control-next" href="#myCarousel" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </Link> */}
                </div>
            </div>
         
            <div className="d-flex flex-lg-row flex-md-row flex-sm-column flex-column p-3">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12 pr-3 order-lg-1 order-md-1 order-sm-2 order-2 anime-left items" data-aos="fade-up">
                    <h3 style={{ textAlign: "justify", textDecoration: "underline" }}><strong>About US</strong></h3><br />
                    <p>
                    Located in the heart of [Location], [School Name] has been a cornerstone of education since its establishment in [Year]. With a rich history spanning over [Number of Years] years, we are proud to provide an exceptional learning environment for our students.
                    </p>
                    <p>
                      From OVA's side, an effort for your Odia education through Odia .
                    </p>
                    <p>
                    Our campus boasts state-of-the-art facilities designed to enhance the learning experience. From modern science labs to a well-stocked library and expansive sports facilities, we offer everything our students need to thrive academically and personally.
                    </p>
                    <p>
                    At [School Name], we offer a diverse range of programs and courses to cater to the unique interests and talents of our students. Whether you're passionate about STEM subjects, arts, humanities, or sports, you'll find a program that's right for you.
                    </p>
                    <p>
                    Beyond the classroom, our school community is vibrant and welcoming. We offer a variety of extracurricular activities, including clubs, sports teams, and community service opportunities, to help our students develop leadership skills, build friendships, and make a positive impact on the world around them.
                    </p>
                    <p>
                    Our dedicated faculty and staff are committed to helping every student reach their full potential. With small class sizes and personalized attention, we ensure that each student receives the support they need to succeed.
                    </p>
                    <p>
                    At [School Name], our mission is to inspire and empower our students to become lifelong learners, critical thinkers, and responsible citizens. Our core values of [Value 1], [Value 2], and [Value 3] guide everything we do, from our rigorous academic programs to our commitment to fostering a diverse and inclusive community.
                    </p>
                   
                    <br />
                </div>
            </div>
            
        </div><br />
    </div>
</section>

    
    );
}