import React, { useState } from "react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const EventDetail = () => {
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
    const element = document.querySelector('[data-aos="slide-left"]');

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
  // Sample image data
  const images = [
    {
      original: "uploads/event/pic1.jpg",
      thumbnail: "uploads/event/pic1.jpg",
      title: "Event 1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      original: "uploads/event/pic2.jpg",
      thumbnail: "uploads/event/pic2.jpg",
      title: "Event 2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        original: "uploads/event/pic3.jpg",
        thumbnail: "uploads/event/pic3.jpg",
        title: "Event 3",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        original: "uploads/event/pic4.jpg",
        thumbnail: "uploads/event/pic4.jpg",
        title: "Event 4",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        original: "uploads/event/pic5.jpg",
        thumbnail: "uploads/event/pic5.jpg",
        title: "Event 5",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    // Add more image data as needed
  ];

  // State to track whether to display full description or truncated description for each item
  const [showFullDescription, setShowFullDescription] = useState(images.map(() => false));

  // Toggle function to switch between full and truncated description
  const toggleDescription = (index) => {
    const newShowFullDescription = [...showFullDescription];
    newShowFullDescription[index] = !newShowFullDescription[index];
    setShowFullDescription(newShowFullDescription);
  };

  // Construct event detail page URL
  const eventDetailPageUrl = "/eventdetail";

  // Render item function to conditionally render different layouts for even and odd indices
  const renderItem = (item, index) => {
    if (index % 2 === 0) {
      // Even index: Render image on left, text on right
      return (
        <div className="row">
          <div className="col-md-6 items" data-aos="slide-left">
            <img src={item.original} alt={item.title} style={{ width: "100%" }} />
          </div>
          <div className="col-md-6 items" data-aos="slide-right">
            <h2>{item.title}</h2>
            <p>{showFullDescription[index] ? item.description : `${item.description.slice(0, 420)}...`}</p>
            <button onClick={() => toggleDescription(index)}>
              {showFullDescription[index] ? "Show Less" : "Read More"}
            </button>
          
          </div>
        </div>
      );
    } else {
      // Odd index: Render text on left, image on right
      return (
        <div className="row">
          <div className="col-md-6 items" data-aos="slide-right">
            <h2>{item.title}</h2>
            <p>{showFullDescription[index] ? item.description : `${item.description.slice(0, 420)}...`}</p>
            <button onClick={() => toggleDescription(index)}>
              {showFullDescription[index] ? "Show Less" : "Read More"}
            </button>
           
          </div>
          <div className="col-md-6 items" data-aos="slide-left">
            <img src={item.original} alt={item.title} style={{ width: "100%" }} />
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <center><h1>Our Events</h1></center>
      {images.map((item, index) => (
        <div key={index} className="container">
          {renderItem(item, index)}
          <hr /> {/* Add a horizontal line between items */}
        </div>
      ))}
    </div>
  );
};

export default EventDetail;
