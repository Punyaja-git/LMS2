import React ,{useEffect}from 'react'
import {Link} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TermsAndCondition() {
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
            <h2 className='items'data-aos="zoom-in" style={{marginTop:"49px"}}>Terms and Condition</h2>

<h4 className='items'data-aos="zoom-in" >Introduction</h4>
<p className='items'data-aos="zoom-out">Welcome to <strong>[Your LMS Name]</strong>.</p>
<p className='items'data-aos="zoom-out">These Terms and Conditions (“<strong>Terms</strong>”, “<strong>Terms and Conditions</strong>”) govern your relationship with <strong>[Your LMS URL]</strong> website and [Your LMS mobile application] (the “<strong>Service</strong>”) operated by <strong>[Your Organization Name]</strong> (“<strong>us</strong>”, “<strong>we</strong>”, or “<strong>our</strong>”).</p>
<p className='items'data-aos="zoom-out">Please read these Terms and Conditions carefully before using our Service.</p>
<p className='items'data-aos="zoom-out">Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
<p className='items'data-aos="zoom-out">By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

<h4 className='items'data-aos="zoom-in" >Accounts</h4>
<p className='items'data-aos="zoom-out">When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
<p className='items'data-aos="zoom-out">You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.</p>
<p className='items'data-aos="zoom-out">You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</p>

<h4 className='items'data-aos="zoom-in" >Intellectual Property</h4>
<p className='items'data-aos="zoom-out">The Service and its original content, features and functionality are and will remain the exclusive property of <strong>[Your Organization Name]</strong> and its licensors.</p>
<p className='items'data-aos="zoom-out">The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of <strong>[Your Organization Name]</strong>.</p>

<h4 className='items'data-aos="zoom-in">Links to Other Web Sites</h4>
<p className='items'data-aos="zoom-out">Our Service may contain links to third-party web sites or services that are not owned or controlled by <strong>[Your Organization Name]</strong>.</p>
<p className='items'data-aos="zoom-out"><strong>[Your Organization Name]</strong> has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that <strong>[Your Organization Name]</strong> shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
<p className='items'data-aos="zoom-out">We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>

<h4 className='items'data-aos="zoom-in">Termination</h4>
<p className='items'data-aos="zoom-out">We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
<p className='items'data-aos="zoom-out">Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.</p>

<h4 className='items'data-aos="zoom-in">Limitation of Liability</h4>
<p className='items'data-aos="zoom-out">In no event shall <strong>[Your Organization Name]</strong>, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>

<h4 className='items'data-aos="zoom-in">Disclaimer</h4>
<p className='items'data-aos="zoom-out">Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
<p className='items'data-aos="zoom-out"><strong>[Your Organization Name]</strong> its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.</p>

<h4 className='items'data-aos="zoom-in">Governing Law</h4>
<p className='items'data-aos="zoom-out">These Terms shall be governed and construed in accordance with the laws of <strong>[Your State/Country]</strong>, without regard to its conflict of law provisions.</p>
<p className='items'data-aos="zoom-out">Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have had between us regarding the Service.</p>

<h4 className='items'data-aos="zoom-in">Changes</h4>
<p className='items'data-aos="zoom-out">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
<p className='items'data-aos="zoom-out">By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>

<h4 className='items'data-aos="zoom-in">Contact Us</h4>
<p className='items'data-aos="zoom-out">If you have any questions about these Terms, please contact us:</p>
<ul>
  <li>By email: [Your Email Address]</li>
  <li>By visiting this page on our website: [Your Contact Page URL]</li>
  <li>By phone number: [Your Phone Number]</li>
  <li>By mail: [Your Physical Address]</li>
</ul>

             
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</>
)
}

