import './App.css'
import MarathonResults from "../src/MarathonResults.json";
import RunningShoes from "../public/running.png"

// https://girraphic.com/about/

function App() {

  return (
    <>
      <header>
        <h1>
          {MarathonResults.results.racename}
        </h1>
        <img src={RunningShoes} height="25px"></img>
      </header>
      <div>
        <table>
          <thead>
            <th>Rank</th>
            <th>Name</th>
            <th>Bib number</th>
            <th>Country</th>
          </thead>
          {MarathonResults && MarathonResults.results.athletes.map(result => {
            return (
              <div key={result.athleteid}>
                <tr>
                  <td>{result.rank}</td>
                  <td>{result.firstname} { } {result.surname}</td>
                  <td>{result.bibnumber}</td>
                  <td>{result.countryname}</td>
                </tr>                  

              </div>
            )
          })}
        </table>
      </div>
    </>
  )
}

export default App
