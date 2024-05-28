import './App.css'
import ResultsTable from './components/ResultsTable/ResultsTable';
import ExportButton from "./components/ExportButton/ExportButton";
// import NavBarTop from './components/NavBarTop';

// https://girraphic.com/about/

function App() {

  return (
    <main>

      {/* <NavBarTop></NavBarTop> */}

      <ResultsTable />

      <hr />

      <ExportButton />

      <footer>
        <p>
          Designed by <a href="https://daniela-park.github.io/portfolio/">Daniela Park</a>
        </p>
      </footer>
    </main>

  )
}

export default App
