import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

function App() {
  const skills = ["HTML","CSS","JavaScript","Python","SQL"];

  return (
    <div className="container">
      <Header
        name="Soham Patel"
        themeColor="blue"
      />
      <About />
      <Skills skillList={skills} />
      <Footer
        email="soham@example.com"
      />
    </div>
  );
}
export default App;