import { useState } from "react";
import Running from "/running.gif";
import Data from "../../MarathonResults.json";
import "./ResultsTable.css"
import SortingArrow from "../SortingArrow";


function ResultsTable() {
  const [sort, setSort] = useState({keyToSort: Data.results.athletes.map(d => d.rank), direction: "asc"})
  const [count, setCount] = useState(0)

  const handleClickTest = () => {
    setCount(count + 1)
  }

  const handleClickRankSorting = () => {
    setSort({
      keyToSort: Data.results.athletes.map(d => d.rank),
      direction: Data.results.athletes.map(d => d.rank) === sort.keyToSort ? sort.direction === "asc" ? "desc" : "asc" : "desc"
    })
  }

  return (
    <>
      <header>
        <h1>
          <img src={Running} height="50px" alt="Animated gif of a person running" />
          { } {Data.results.racename}
        </h1>
      </header>
      <hr />
      <table>
        <thead>
          <th scope="col" onClick={handleClickRankSorting}>Rank
            <span><SortingArrow direction={sort.keyToSort === Data.results.athletes.map(d => d.rank) ? sort.direction : "asc"} /></span>
          </th>
          <th scope="col" onClick={handleClickTest}>Bib</th>
          <th scope="col">Finish Time</th>
          <th scope="col">Name</th>
          <th scope="col">Country</th>
        </thead>

        {Data && Data.results.athletes.map((d) => (
          <tbody>
            <tr key={d.athleteid}>
              <td className="numbers" scope="row">{d.rank}</td>
              <td className="numbers">{d.bibnumber}</td>
              <td className="numbers">{d.finishtime}</td>
              <td className="string">{`${d.surname.toUpperCase()}, ${d.firstname}`}</td>
              <td className="string">{d.flag} { }
                <img
                  src={`https://assets.thebasetrip.com/api/v2/countries/flags/${d.countryname.toLowerCase().replace(' ', '-')}.png`}
                  height="15px"
                  alt={`${d.countryname}'s flag`} />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <p>{count}</p>
    </>

  )
}

export default ResultsTable
