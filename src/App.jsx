import { useEffect } from "react";

import { Routes,Route } from "react-router-dom";



import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Layout from "./Layout/Layout";
import Project from "./components/ProjectSection/Project";


export default function App() {
 

  return (
    <>
      <Routes>

        <Route element ={<Layout/>}>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/contact" element={<Contact/>} ></Route>
          <Route path="/projects" element={<Project/>} ></Route>
        </Route>

      </Routes>
  
    </>
  );
}








// export default function App() {
 

//   return (
//     <>
     
//       <Navbar/>
//         <Hero />
//         <About />
//         <Services />
//         <WhyUs />
//         <Process />
//         <Project/>
//         <FAQ />
//         <Contact />
//       <Footer />


//       <BackToTop />
//     </>
//   );