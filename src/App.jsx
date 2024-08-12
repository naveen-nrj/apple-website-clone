import NavBar from "./components/NavBar";
import Highlights from "./components/Highlights";
import Hero from "./components/Hero";

const App = () => {

  return (
    <main className="bg-black">
      <NavBar/>
      <Hero/>
      <Highlights/>
    </main>
  )
}

export default App;
