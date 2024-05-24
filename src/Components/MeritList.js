import React , {useEffect , useState} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

function StudentTable({ students }) {
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
    <table className="table items"data-aos="zoom-in">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Roll</th>
          <th>School</th>
          <th>Session</th>
          <th>Class</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Parent</th>
          <th>Merit List</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td data-label="S.No">{index + 1}</td>
            <td data-label="Roll NO">{student.roll}</td>
            <td data-label="School">{student.school}</td>
            <td data-label="Session">{student.session}</td>
            <td data-label="Class Name">{student.class}</td>
            <td data-label="Name">{student.name}</td>
            <td data-label="Contact No">{student.contact}</td>
            <td data-label="Parent Name">{student.parent}</td>
            <td data-label="Merit List">{student.merit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function MeritList() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const tech1 = [
    { roll:"7",school:"Sai international cuttack",session:"2023/2024",class:"1",name: "Dinesh", contact: 965765456, parent: "Abhilipsa Dash", merit: "1st class" },
    { roll:"20",school:"Sai international cuttack",session:"2023/2024",class:"1",name: "rupa", contact: 965765476, parent: "Apurba Dash", merit: "2nd class" },
    { roll:"55",school:"Sai international cuttack",session:"2023/2024",class:"1",name: "Deelip", contact: 965765456, parent: "Dipti Dash", merit: "3rd class" },
  ];

  const tech2 = [
    { roll:"8",school:"Sai international cuttack",session:"2023/2024",class:"2",name: "Jon", contact: 965765456, parent: "Abhilipsa Dash", merit: "1st class" },
    { roll:"40",school:"Sai international cuttack",session:"2023/2024",class:"2",name: "Archi", contact: 965765476, parent: "Apurba Dash", merit: "2nd class" },
    { roll:"5",school:"Sai international cuttack",session:"2023/2024",class:"2",name: "Mikel", contact: 965765456, parent: "Dipti Dash", merit: "3rd class" },
  ];
  const tech3 = [
    { roll:"8",school:"Sai international cuttack",session:"2023/2024",class:"3",name: "Hritik", contact: 965765456, parent: "Abhilipsa Dash", merit: "1st class" },
    { roll:"40",school:"Sai international cuttack",session:"2023/2024",class:"3",name: "Deepti", contact: 965765476, parent: "Apurba Dash", merit: "2nd class" },
    { roll:"5",school:"Sai international cuttack",session:"2023/2024",class:"3",name: "Mousumi", contact: 965765456, parent: "Dipti Dash", merit: "3rd class" },
  ];

  const animalStudents1 = [
    { roll:"7",school:"Sai international Kendrapada",session:"2023/2024",class:"1",name: "Adishree", contact: 965765456, parent: "Abhilipsa Dash", merit: "1st class" },
    { roll:"9",school:"Sai international Kendrapada",session:"2023/2024",class:"1",name: "Rupesh", contact: 965765476, parent: "Apurba Dash", merit: "2nd class" },
    { roll:"5",school:"Sai international Kendrapada",session:"2023/2024",class:"1",name: "Jatin", contact: 965765456, parent: "Dipti Dash", merit: "3rd class" },
  ];

  const animalStudents2 = [
    { roll:"7",school:"Sai international Kendrapada",session:"2023/2024",class:"2",name: "Abhinash", contact: 965765456, parent: "Abhilipsa Dash", merit: "1st class" },
    { roll:"9",school:"Sai international Kendrapada",session:"2023/2024",class:"2",name: "Kalpana", contact: 965765476, parent: "Apurba Dash", merit: "2nd class" },
    { roll:"5",school:"Sai international Kendrapada",session:"2023/2024",class:"2",name: "Kumkum", contact: 965765456, parent: "Dipti Dash", merit: "3rd class" },
  ];
  const neture1 = [
    { roll:"7",school:"Sai international Bhubaneswar",session:"2023/2024",class:"1",name: "Bibek", contact: 965765456, parent: "Abhilipsa Dash", merit: "1st class" },
    { roll:"20",school:"Sai international Bhubaneswar",session:"2023/2024",class:"1",name: "Ratikant", contact: 965765476, parent: "Apurba Dash", merit: "2nd class" },
    { roll:"55",school:"Sai international Bhubaneswar",session:"2023/2024",class:"1",name: "Nirlipta", contact: 965765456, parent: "Dipti Dash", merit: "3rd class" },
  ];
  const neture2 = [
    { roll:"7",school:"Sai international Bhubaneswar",session:"2023/2024",class:"2",name: "Anuska", contact: 965765456, parent: "Abhilipsa Dash", merit: "1st class" },
    { roll:"60",school:"Sai international Bhubaneswar",session:"2023/2024",class:"2",name: "Abhisekh", contact: 965765476, parent: "Apurba Dash", merit: "2nd class" },
    { roll:"75",school:"Sai international Bhubaneswar",session:"2023/2024",class:"2",name: "Rukmini", contact: 965765456, parent: "Dipti Dash", merit: "3rd class" },
  ];
  const people1 = [
    { roll:"7",school:"Sai international Delhi",session:"2023/2024",class:"1",name: "Himesh", contact: 965765456, parent: "Abhilipsa Dash", merit: "1st class" },
    { roll:"20",school:"Sai international Delhi",session:"2023/2024",class:"1",name: "Rudra", contact: 965765476, parent: "Apurba Dash", merit: "2nd class" },
    { roll:"55",school:"Sai international Delhi",session:"2023/2024",class:"1",name: "Remi", contact: 965765456, parent: "Dipti Dash", merit: "3rd class" },
  ];
  const people2 = [
    { roll:"7",school:"Sai international Delhi",session:"2023/2024",class:"2",name: "Abhinash", contact: 965765456, parent: "Abhilipsa Dash", merit: "1st class" },
    { roll:"9",school:"Sai international Delhi",session:"2023/2024",class:"2",name: "Kalpana", contact: 965765476, parent: "Apurba Dash", merit: "2nd class" },
    { roll:"5",school:"Sai international Delhi",session:"2023/2024",class:"2",name: "Kumkum", contact: 965765456, parent: "Dipti Dash", merit: "3rd class" },
  ];
  const people3 = [
    { roll:"7",school:"Sai international Delhi",session:"2023/2024",class:"3",name: "Rupesh", contact: 965765456, parent: "Abhilipsa Dash", merit: "1st class" },
    { roll:"20",school:"Sai international Delhi",session:"2023/2024",class:"3",name: "Dugu", contact: 965765476, parent: "Apurba Dash", merit: "2nd class" },
    { roll:"55",school:"Sai international Delhi",session:"2023/2024",class:"3",name: "Komal", contact: 965765456, parent: "Dipti Dash", merit: "3rd class" },
  ];
  const studentsByFilter = {
    all: [animalStudents1, animalStudents2,neture1,neture2,people1,people2,people3,tech1,tech2,tech3],
    animals: [animalStudents1, animalStudents2],
    nature: [neture1,neture2],
    people: [people1,people2,people3],
    tech: [tech1,tech2,tech3]
  };

  const handleChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  return (
    <div className="container-xlg mb-5 ml-1" id="courses" data-aos="fade-right" style={{ border: '0px solid grey', borderRadius: '5px' }}>
      <br />
      <div className="row">
        <div className="col" align="center" style={{ color: '#005aaa', textDecoration: 'underline' }}>
          <h4>School Merit list</h4>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <meta name="viewport items"data-aos="zoom-in" content="width=device-width" />
        <input type="radio" name="filter" id="all" value="all" checked={selectedFilter === "all"} onChange={handleChange} /><label htmlFor="all">All</label>
        <input type="radio" name="filter" id="animals" value="animals" checked={selectedFilter === "animals"} onChange={handleChange} /><label htmlFor="animals">Sai international Kendrapada</label>
        <input type="radio" name="filter" id="nature" value="nature" checked={selectedFilter === "nature"} onChange={handleChange} /><label htmlFor="nature">Sai international Bhubaneswar</label>
        <input type="radio" name="filter" id="people" value="people" checked={selectedFilter === "people"} onChange={handleChange} /><label htmlFor="people">Sai international Delhi</label>
        <input type="radio" name="filter" id="tech" value="tech" checked={selectedFilter === "tech"} onChange={handleChange} /><label htmlFor="tech">Sai international cuttack</label>
        
        {selectedFilter === "all" && studentsByFilter[selectedFilter].map((students, index) => (
          <StudentTable key={index} students={students} />
        ))}
        {selectedFilter !== "all" && studentsByFilter[selectedFilter].map((students, index) => (
          <StudentTable key={index} students={students} />
        ))}
      </div>
    </div>
  );
}
