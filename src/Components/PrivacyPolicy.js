import React,{useEffect}from 'react'
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PrivacyPolicy() {
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
                <ul className='items'data-aos="flip-up">
                  <h2 className="mb-sm items"data-aos="zoom-in" style={{ textAlign: "center",marginTop:"49px"}}>PrivacyPolicy</h2><br />
                
                  <p className='items'data-aos="zoom-out"><strong>Effective Date:</strong> [Insert Date]</p>

    <h5 className='items'data-aos="zoom-in">1. Introduction</h5>
    <p className='items'data-aos="zoom-out">[Company Name] ("we", "our", "us") is committed to protecting the privacy of users ("you", "your") of our Learning Management System ("LMS"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our LMS.</p>

    <h5 className='items'data-aos="zoom-in">2. Information We Collect</h5>
    <h5 className='items'data-aos="zoom-in">2.1 Personal Information</h5>
    <p className='items'data-aos="zoom-out">We may collect personal information that you provide directly to us, including but not limited to:</p>
    <ul className='items'data-aos="flip-up">
        <li>Name</li>
        <li>Email address</li>
        <li>Username and password</li>
        <li>Contact information</li>
        <li>Payment information (if applicable)</li>
    </ul>

    <h5 className='items'data-aos="zoom-in">2.2 Usage Data</h5>
    <p className='items'data-aos="zoom-out">We may collect information automatically when you use the LMS, such as:</p>
    <ul className='items'data-aos="flip-up">
        <li>IP address</li>
        <li>Browser type</li>
        <li>Operating system</li>
        <li>Access times and dates</li>
        <li>Pages viewed</li>
        <li>Clickstream data</li>
    </ul>

    <h5 className='items'data-aos="zoom-in">2.3 Cookies and Similar Technologies</h5>
    <p className='items'data-aos="zoom-out">We use cookies and similar tracking technologies to track activity on our LMS and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our LMS.</p>

    <h5 className='items'data-aos="zoom-in">3. How We Use Your Information</h5>
    <p className='items'data-aos="zoom-out">We use the information we collect for various purposes, including to:</p>
    <ul className='items'data-aos="flip-up">
        <li>Provide, operate, and maintain our LMS</li>
        <li>Improve, personalize, and expand our LMS</li>
        <li>Understand and analyze how you use our LMS</li>
        <li>Develop new products, services, features, and functionality</li>
        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the LMS, and for marketing and promotional purposes</li>
        <li>Process your transactions and manage your orders</li>
        <li>Send you text messages and push notifications</li>
        <li>Find and prevent fraud</li>
        <li>For compliance with legal obligations</li>
    </ul>

    <h5 className='items'data-aos="zoom-in">4. Sharing Your Information</h5>
    <p className='items'data-aos="zoom-out">We may share your information in the following situations:</p>
    <ul className='items'data-aos="flip-up">
        <li><strong>With service providers:</strong> We may share your information with third-party service providers to perform services on our behalf.</li>
        <li><strong>For business transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
        <li><strong>With affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
        <li><strong>With other users:</strong> When you share personal information or otherwise interact with public areas of the LMS, such information may be viewed by all users and may be publicly distributed outside.</li>
        <li><strong>For legal purposes:</strong> We may disclose your information if we are required to do so by law or if you violate our Terms of Service.</li>
    </ul>

    <h5 className='items'data-aos="zoom-in">5. Data Security</h5>
    <p className='items'data-aos="zoom-out">We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>

    <h5 className='items'data-aos="zoom-in">6. Your Data Protection Rights</h5>
    <p className='items'data-aos="zoom-out">Depending on your location, you may have the following rights regarding your personal information:</p>
    <ul className='items'data-aos="flip-up">
        <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
        <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
        <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
        <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
        <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
        <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
    </ul>
    <p className='items'data-aos="zoom-out">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us at [contact information].</p>

    <h5 className='items'data-aos="zoom-in">7. Changes to This Privacy Policy</h5>
    <p className='items'data-aos="zoom-out">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date at the top. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

    <h5 className='items'data-aos="zoom-in">8. Contact Us</h5>
    <p className='items'data-aos="zoom-out">If you have any questions about this Privacy Policy, please contact us at:</p>
    <p className='items'data-aos="zoom-out">
        <strong>Email:</strong> [email address]<br/>
        <strong>Address:</strong> [physical address]
    </p>


                 

                 
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
