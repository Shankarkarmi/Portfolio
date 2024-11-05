import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// https://bg.ibelick.com/

const App = () => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection-text:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-5">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;







export const HERO_CONTENT = `Front-end developer with proven experience in building responsive, accessible, and high-performance websites. Skilled in HTML, CSS, JavaScript, and modern frameworks like React, with a commitment to creating user-centered applications. Possess foundational knowledge in artificial intelligence and machine learning, as demonstrated by developing facial recognition systems using Python and OpenCV. Known for strong problem-solving skills, adaptability, and the ability to work effectively in team settings. Eager to bring technical expertise and collaborative spirit to innovative projects.`;

export const ABOUT_TEXT = `I am a motivated developer with a solid background in front-end development and a keen interest in artificial intelligence and machine learning. My journey in web development started with a fascination for creating engaging user experiences using HTML, CSS, JavaScript, and frameworks like React. Recently, I expanded my technical skills during an AI internship, where I developed a facial recognition system using Python and OpenCV. Currently, I am learning the MERN stack by working on projects that enhance my full-stack development capabilities. I am dedicated to continuous learning and thrive in collaborative environments that encourage innovation and personal growth.`;
