import NavBar from "./components/NavBar";
import Highlights from "./components/Highlights";
import Hero from "./components/Hero";
import Model from "./components/Model";
const App = () => {

  return (
    <main className="bg-black">
      <NavBar/>
      <Hero/>
      <Highlights/>
      <Model/>
    </main>
  )
}

export default App;
