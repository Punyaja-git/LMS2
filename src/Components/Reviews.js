import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Reviews() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 50
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const testimonials = [
    {
      imgSrc: 'https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      name: 'Jessica',
      review: '<div class="stars"><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)"></i><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)"><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)"><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)"><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)">'
    },
    {
      imgSrc: 'https://images.pexels.com/photos/638700/pexels-photo-638700.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      name: 'Pearl',
      review: '<div class="stars"><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)"></i><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)"><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)"><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)"><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)">'
    },
    {
      imgSrc: 'https://images.pexels.com/photos/531139/pexels-photo-531139.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      name: 'Kellie',
      review: '<div class="stars"><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)"></i><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)"><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)"><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)"><i class="fa fa-star" aria-hidden="true" style="color:rgb(254, 237, 1)">'
    }
  ];

  const options = {
    loop: true,
    margin: 20,
    nav: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 2
      }
    }
  };

  return (
    <div className="container">
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-md-12 items" data-aos="zoom-in">
          <OwlCarousel className="owl-theme" {...options}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial" key={index}>
                <div className="pic items" data-aos="flip-up">
                  <img src={testimonial.imgSrc} alt={testimonial.name} />
                </div>
                <p className="description">
                  {testimonial.description}
                </p>
                <h3 className="title">{testimonial.name}</h3>
                <small className="post" dangerouslySetInnerHTML={{ __html: testimonial.review }}></small>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
