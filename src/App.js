import "./App.css"
import { NavBar } from "./Components/NavBar/Navbar.tsx"
import { LeftBar } from "./Components/LeftBar/LeftBar.tsx"
import { Content } from "./Components/Content/Content.tsx"
import { About } from "./Components/SecondLevelComponents/About/About.tsx"
import { Skills } from "./Components/Skills/Skills.tsx"
import { ME } from "./Components/ME/ME.tsx"

function App() {
  return (
    <div className="App">
      <NavBar />
      <LeftBar />
      <ME />
      <Skills />
      <Content />
      <About />
    </div>
  );
}

export default App;
