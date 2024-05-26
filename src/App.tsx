import './App.css'
import Data from "../src/MarathonResults.json";
import Running from "/running.gif"
import Table from './components/Table';
import NavBarTop from './components/NavBarTop';

// https://girraphic.com/about/

function App() {

  return (
    <main>

      {/* <NavBarTop></NavBarTop> */}

      <header>
      <h1>
        <img src={Running} height="50px" alt="Animated gif of a person running" />
        {} {Data.results.racename}
        </h1>
      </header>
      <hr />

      <Table />

      <hr />
      <footer>
        <p>
          Designed by <a href="https://daniela-park.github.io/portfolio/">Daniela Park</a>
        </p>
      </footer>
    </main>

  )
}

export default App
