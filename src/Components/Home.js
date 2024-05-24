import React , { useEffect } from "react";
import {Link} from "react-router-dom";
import Partner from "./Partner";
import Reviews from "./Reviews";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Home() {
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
// Replace '1234567890' with the desired phone number
const phoneNumber = '9658512314';

// Optionally, include a message
const message = 'Hello Punyaja This is a test!';

// Construct the WhatsApp link
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const images = [
   
  
    {
        original: "uploads/event/pic1.jpg",
        thumbnail: "uploads/event/pic1.jpg",
    },
    {
        original: "uploads/event/pic2.jpg",
        thumbnail: "uploads/event/pic2.jpg",
    },
    {
        original: "uploads/event/pic3.jpg",
        thumbnail: "uploads/event/pic3.jpg",
    },
    {
        original: "uploads/event/pic4.jpg",
        thumbnail: "uploads/event/pic4.jpg",
    },
    {
        original: "uploads/event/pic5.jpg",
        thumbnail: "uploads/event/pic5.jpg",
    },
];
const eventDetailPageUrl = "/eventdetail";

  // Render item function to wrap each image in a link to event detail page
  const renderItem = (item) => (
    <Link to={eventDetailPageUrl}>
      <img src={item.original} alt={item.original} style={{ width: "70%" }}/>
    </Link>
  );
return (
        <>
            {/* Header Section */}
        
           
            {/* Video Header and Buttons Section */}
            <div className="row p-0 m-0">
                <div className="col-12 p-0 m-0">
                    <div id="demo" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2" className="active"></li>
                            <li data-target="#demo" data-slide-to="3"></li>
                            <li data-target="#demo" data-slide-to="4"></li>
                        </ul>
                        <div className="carousel-inner">
                            <div className="carousel-item" >
                                <img src={"uploads/sliders/slideimg2.jpg"} alt="Slider Image 1" />
                                <div className="carousel-caption text-left"></div>
                            </div>
                            <div className="carousel-item">
                                <img src={"uploads/sliders/slideragile1.png"} alt="Slider Image 2" />
                                <div className="carousel-caption text-left"></div>
                            </div>
                            <div className="carousel-item ">
                                <img src={"uploads/sliders/agile2.png"} alt="Slider Image 3" />
                                <div className="carousel-caption text-left"></div>
                            </div>
                            <div className="carousel-item active">
                                <img src={"uploads/sliders/img5.jpg"} alt="Slider Image 4" />
                                <div className="carousel-caption text-left"></div>
                            </div>
                            <div className="carousel-item">
                                <img src={"uploads/sliders/img6.jpg"} alt="Slider Image 5" />
                                <div className="carousel-caption text-left"></div>
                            </div>
                        </div>
                        {/* <Link className="carousel-control-prev" to="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </Link>
                        <Link className="carousel-control-next" to="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </Link> */}
                    </div>
                </div>
            </div>
            
            {/* Social Buttons Section */}
            <div className="sidebar">
                {/* Social buttons content */}
            </div>

            {/* About Section */}
            <section id="about" style={{ marginTop: "0px" }}>
                <div className="container-xlg p-0">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                            <h2 className="font-weight-bold text-left p-4 items" data-aos="zoom-out"style={{ color: "brown" }}>Why Choose US ?</h2>
                            <p className="text-align-justify p-4 s-5 items " data-aos="zoom-in" data-aos-once="true">
                                Thank you! I am very delighted to know about your interest in learning in our Organization .  Our school is known for its rigorous academic programs, exceptional faculty, and high standards of education. We are committed to providing students with the knowledge and skills they need to succeed in college and beyond.
                            </p>
                            <span className="p-5"> <Link to="/about"><button className="text-left float-left p-2 text-white bg-primary">About Us</button></Link></span>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 p-4 item" data-aos="flip-down">
                            <video id="kyc_player" style={{ background: "#FFFFFA", borderRadius: "20px", border: "2px solid brown", width: "100%" }} controls autoPlay>
                                <source src={"assets/frontend/default/img/aicopl1.mp4"} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="courses" id="courses">
            <section className="courses" id="courses">
    {/* <!-- courses code here start--> */}
    <section className="courses" id="courses" > 
    {/* <!-- courses code here start--> */}
    {/* <section className="courses" id="courses" style={{ backgroundImage: "url(assets/frontend/default/img/blue.png)", backgroundSize: "cover", backgroundPosition: "left" }}>
    <div className="container-xlg">
        <div className="d-flex justify-content-center p-3">
            <div className="card-group p-2">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12 anime-left">
                    <div className="card m-1" style={{ width: "280px", height: "250px", borderRadius: "20px" }}>
                        <div className="d-flex justify-content-center">
                            <div className="flip-card-front">
                                <div className="text-white text-center d-flex flex-column justify-content-center flip-card-f item" data-aos="flip-right" style={{ width: "280px", height: "250px", background: "#ddfdff", borderRadius: "20px" }}>
                                    <div>
                                        <img src={"assets/frontend/default/img/logo1.png"} alt="" height="100px" width="150px" />
                                        <h5 className="font-weight-bold" style={{ fontSize: "25px", color: "orange" }}><Link to="#">Join with Us</Link></h5>
                                        <h5 className="font-weight-bold blink" style={{ fontSize: "15px", color: "orange" }}><Link to="/login">Click here</Link></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> */}
<div className="container items" data-aos="zoom-out" style={{height:"500px"}}>
<center><h1>Our Events</h1></center>
<ImageGallery
    items={images}
    showThumbnails={false}
    showFullscreenButton={false}
    showPlayButton={false}
    showNav={false} // Hide navigation buttons
    autoPlay={true} // Enable auto-scrolling
    slideDuration={550} // Duration of slide transition
    slideInterval={4000} // Interval between slides
    renderItem={renderItem} //
    styles={{
        gallery: { width: '100%', height: 'auto' }, // Make the gallery full-width
        slide: { width: '100%', height: 'auto' }, // Make the slide full-width
        image: { width: '100%', height: 'auto' } // Make the image inside the slide full-width
    }}
/>
</div>
<section id="materials" style={{ marginTop: '0px' }}>
    <div className="container-xlg px-3">
        <div className="row">
            {/* BOOK MATERIALS LINKS */}
            <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 d-flex flex-column p-3 allnews" style={{ background: '#FFFFFA', border: '2px solid brown' }}>
                <div className="heading">
                    <h5 className="text-center items" data-aos="fade-up"><i className="fa fa-book"></i>&nbsp;Search for content</h5>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid grey', margin: '10px 0' }} />
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <ul style={{ listStyleType: 'none' }}>
                            <li><Link to="/schools">
                                <img src={"assets/frontend/default/img/audio-library.png"} style={{ width: '270px' }} /><span className="sp-sec items" data-aos="fade-up">About School</span></Link></li>
                            <li><Link to="/MeritList">
                                <img src={"assets/frontend/default/img/tribal.png"} style={{ width: '270px' }} /><span className="sp-sec items" data-aos="fade-up">Merit List of school</span></Link></li>
                            <li><Link to="/teachers_detail">
                                <img src={"assets/frontend/default/img/digital-library.png"} style={{ width: '270px' }} /><span className="sp-sec items" data-aos="fade-up">Teachers Detail</span></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <ul style={{ listStyleType: 'none' }}>
                            <li><Link to="/student_detail" target="_blank">
                                <img src={"assets/frontend/default/img/dictionary.png" }style={{ width: '270px' }} /><span className="sp-sec items"data-aos="fade-up">Student Detail</span></Link></li>
                            <li><Link to="/study_material" target="_blank">
                                <img src={"assets/frontend/default/img/barnabodha.png" }style={{ width: '270px' }} /><span className="sp-sec items"data-aos="fade-up">Study Material</span></Link></li>
                            <li><Link to="/quiz">
                                <img src={"assets/frontend/default/img/language-learning.png"} style={{ width: '270px' }} /><span className="sp-sec items"data-aos="fade-up">Quiz</span></Link></li>
                           
                        </ul>
                    </div>
                    {/* <div className="col-lg-4 col-md-4 col-sm-12 p-2">
                        <ul style={{ listStyleType: 'none' }}>
                            <li><Link to="https://ova.gov.in/en/WorkShops">
                                <img src={"assets/frontend/default/img/workshops.png"} style={{ width: '270px' }} /><span className="sp-sec">Workshop</span></Link></li>
                            <li><Link to="https://ova.gov.in/en/OdiaBlogs">
                                <img src={"assets/frontend/default/img/odia-blog.png"} style={{ width: '270px' }} /><span className="sp-sec">Odia blog</span></Link></li>
                           
                        </ul>
                    </div> */}
                </div>
            </div>
            {/* END OF BOOK MATERIALS LINKS */}
            {/* NEWS AND EVENTS */}
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 d-flex flex-column p-3 allnews bg-light" style={{ background: '#FFFFFA', border: '2px solid brown' }}>
                <div className="d-flex justify-content-between heading">
                    <h5 className="items" data-aos="fade-right"><i className="fas fa-newspaper-o"></i>&nbsp;News and events</h5>
                </div>
                <hr style={{ border: 'none', borderTop: '1px solid grey', margin: '10px 0' }} />
                <marquee height="180px" direction="up" scrollamount="1" truespeed="truespeed" scrolldelay="20" onMouseOver="this.stop();" onMouseOut="this.start();">
                    <div className="views-row views-row-3 views-row-odd views-row-last">
                        <div className="views-field views-field-title">
                            <span className="field-content"><Link to="whatsnew/Proceeding_287_sta.PDF" target="_blank">NOTIFICATION on Promotion Sr Teacher Educator</Link><img src={"https://My school.ova.gov.in/assets/frontend/default/img/a-new.gif"} alt="new" /></span>
                        </div>
                        <div className="views-field views-field-body">
                            <span className="field-content"><p></p></span>
                        </div>
                    </div>
                    <hr style={{ border: 'none', borderTop: '1px solid grey', margin: '10px 10px' }} />
                    <div className="views-row views-row-3 views-row-odd views-row-last">
                        <div className="views-field views-field-title">
                            <span className="field-content"><Link to="whatsnew/Proceeding_287_sta.PDF" target="_blank">NOTIFICATION on Retd of Dy Director OSEPA</Link></span>
                        </div>
                        <div className="views-field views-field-body">
                            <span className="field-content"><p></p></span>
                        </div>
                    </div>
                    <hr style={{ border: 'none', borderTop: '1px solid grey', margin: '10px 10px' }} />
                    <div className="views-row views-row-3 views-row-odd views-row-last">
                        <div className="views-field views-field-title">
                            <span className="field-content"><Link to="whatsnew/Proceeding_287_sta.PDF" target="_blank">Publication of Final Gradation List of Principals</Link></span>
                        </div>
                        <div className="views-field views-field-body">
                            <span className="field-content"><p></p></span>
                        </div>
                    </div>
                    <hr style={{ border: 'none', borderTop: '1px solid grey', margin: '10px 10px' }} />
                    <div className="views-row views-row-3 views-row-odd views-row-last">
                        <div className="views-field views-field-title">
                            <span className="field-content"><Link to="whatsnew/Proceeding_287_sta.PDF" target="_blank">Proceeding of Meeting held on(22.01.19)</Link></span>
                        </div>
                        <div className="views-field views-field-body">
                            <span className="field-content"><p></p></span>
                        </div>
                    </div>
                    <hr style={{ border: 'none', borderTop: '1px solid grey', margin: '10px 10px' }} />
                </marquee>
            </div>
            {/* NEWS AND EVENTS */}
        </div>
    </div>
</section>


    {/* <!-- courses code here end--> */}
</section>

    {/* <!-- courses code here end--> */}
</section>

            </section>

            {/* Materials Section */}
    <Reviews/>
<Partner/>

            {/* Recent News Section */}
            <section id="citizen_recent" style={{ marginTop: "0px" }}>
            <div className="sidebar">
    <Link to={whatsappLink} target="_blank" title="Whatsapp" className="icon facebook" >
        <p className="d-flex flex-row" >
            <i className="fa fa-facebook ml-1" style={{fontSize: "26px"}}></i>
            <span className="text-white font-weight-bold"  style={{marginLeft: "20px"}}>Whatsapp</span>
        </p>
    </Link>
    <Link to="" target="_blank" title="Twitter" className="icon twitter" style={{background: "black", height: "50px"}}>
        <p className="d-flex flex-row">
            <img src={"assets/frontend/default/img/twitter_new.png"}
             alt="" height="35" width="35" />
            {/* <i className="fa fa-twitter" style={{fontSize: "26px"}}></i> */}
            <span className="text-white font-weight-bold" style={{marginLeft: "17px"}}>Twiter</span>
        </p>
    </Link>
    <Link to="" target="_blank" title="Youtube" className="icon youtube">
        <p className="d-flex flex-row" >
            <i className="fa fa-youtube" style={{fontSize: "26px"}}></i>
            <span className="text-white font-weight-bold" style={{marginLeft: "17px"}}>Linkdin</span>
        </p>
    </Link>
</div>

            </section>

            {/* Footer Section */}
            
            
        </>
    );
}
