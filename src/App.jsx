
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Resume from "./components/Resume";
import SelectedProjects from "./components/SelectedProjects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Resume />
        <SelectedProjects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
