import './App.css'
import MarathonResults from "../src/MarathonResults.json";
import Running from "../public/running.gif"

// https://girraphic.com/about/

function App() {

  return (
    <main>

      <header>
        <img src={Running} height="50px" alt="Animated gif of a person running" />
        <h1>
          {MarathonResults.results.racename}
        </h1>
      </header>
      <hr />

      <table>
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Bib</th>
            <th scope="col">Time</th>
            <th scope="col">Name</th>
            <th scope="col">Country</th>
          </tr>
        </thead>

        {MarathonResults && MarathonResults.results.athletes.map((result) => (
          <tbody>
            <tr key={result.athleteid}>
              <th className="numbers" scope="row">{result.rank}</th>
              <td className="numbers">{result.bibnumber}</td>
              <td className="numbers">{result.finishtime}</td>
              <td className="string">{result.firstname} { } {result.surname.toUpperCase()}</td>
              <td className="string">{result.flag} {}
              <img 
                src={`https://assets.thebasetrip.com/api/v2/countries/flags/${result.countryname.toLowerCase().replace(' ', '-')}.png`}
                height="15px"
                alt={result.countryname}/>
              </td>
            </tr>
          </tbody>
        ))}
      </table>

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
