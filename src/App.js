import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
// import './App.css';
import Header from "./Components/Header";
import Home from './Components/Home';
import About from './Components/About';
import Studentguide from "./Components/Studentguide";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Schools from "./Components/Schools";
import MeritList from "./Components/MeritList";
import SchoolDetail from "./Components/SchoolDetail";
import TeachersDetail from "./Components/TeachersDetail";
import StudentDetail from "./Components/StudentDetail";
import StudyMaterial from "./Components/StudyMaterial";
import Library from "./Components/Library";
import Quiz from "./Components/Quiz";
import EventDetail from "./Components/EventDetail";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsAndCondition from "./Components/TermsAndCondition";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <>
     <Router>
    <Routes>
    <Route
          path="/"
          element={
            <>
              <Header  img="logo.png"/>
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header  img="logo.png"/>
   <About/>
   </>
  }/>
         <Route
          path="/studentguide"
          element={
            <>
              <Header  img="logo.png"/>
   <Studentguide/>
   </>
  }/>
    <Route
          path="/contact"
          element={
            <>
              <Header  img="logo.png"/>
   <Contact/>
   </>
  }/>
   <Route
          path="/login"
          element={
            <>
              <Header  img="logo.png"/>
   <Login/>
   </>
  }/>
   <Route
          path="/signup"
          element={
            <>
              <Header  img="logo.png"/>
   <Signup/>
   </>
  }/>
   <Route
          path="/schools"
          element={
            <>
              <Header  img="logo.png"/>
   <Schools/>
   </>
  }/>
   <Route
          path="/schooldetail"
          element={
            <>
              <Header  img="logo.png"/>
   <SchoolDetail/>
   </>
  }/>
     <Route
          path="/meritlist"
          element={
            <>
              <Header  img="logo.png"/>
   <MeritList/>
   </>
  }/>
   <Route
          path="/teachers_detail"
          element={
            <>
              <Header  img="logo.png"/>
   <TeachersDetail/>
   </>
  }/>
  <Route
          path="/student_detail"
          element={
            <>
              <Header  img="logo.png"/>
   <StudentDetail/>
   </>
  }/>
  <Route
          path="/study_material"
          element={
            <>
              <Header  img="logo.png"/>
   <StudyMaterial/>
   </>
  }/>
  <Route
          path="/library"
          element={
            <>
              <Header  img="logo.png"/>
   <Library/>
   </>
  }/>
   <Route
          path="/quiz"
          element={
            <>
              <Header  img="logo.png"/>
   <Quiz/>
   </>
  }/>
  <Route
          path="/eventdetail"
          element={
            <>
              <Header  img="logo.png"/>
   <EventDetail/>
   </>
  }/>
   <Route
          path="/PrivacyPolicy"
          element={
            <>
              <Header  img="logo.png"/>
   <PrivacyPolicy/>
   </>
  }/>
   <Route
          path="/Terms & condition"
          element={
            <>
              <Header  img="logo.png"/>
   <TermsAndCondition/>
   </>
  }/>
  <Route
          path="/review"
          element={
            <>
              <Header  img="logo.png"/>
   <Reviews/>
   </>
  }/>
   {/* <Route
          path="*"
          element={ <Header title="404 Page not found " img="preview.gif" />
             }
        /> */}
      </Routes>
     <Footer/>
   </Router>
 
   </>
  );
}

export default App;
