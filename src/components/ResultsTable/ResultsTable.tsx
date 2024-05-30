import "./ResultsTable.css"
import Data from "../../MarathonResults.json";
import { useState } from "react";
import Running from "/running.gif";
import ArrowUp from "/ArrowSortUp.svg";
import ArrowDown from "/ArrowSortDown.svg";
import ArrowUpDown from "/ArrowSort.svg";

function ResultsTable() {
  const [athletes, setAthletes] = useState(Data.results.athletes);
  const [sortColumn, setSortColumn] = useState<"rank" | "bibnumber">();
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">();
  
  const handleOnRankSorting = () => {
    if (sortColumn === "rank" && sortOrder === "asc") {
      setSortColumn("rank");
      setSortOrder("desc");
      const sortedAthletes = [...athletes].sort((a, b) => a.rank - b.rank);
      setAthletes(sortedAthletes);
    }
    else {
      setSortColumn("rank");
      setSortOrder("asc");
      const sortedAthletes = [...athletes].sort((a, b) => b.rank - a.rank);
      setAthletes(sortedAthletes);
    }
  }

  const handleOnBibSorting = () => {
    if (sortColumn === "bibnumber" && sortOrder === "asc") {
      setSortColumn("bibnumber");
      setSortOrder("desc");
      const sortedAthletes = [...athletes].sort((a, b) => parseInt(a.bibnumber) - parseInt(b.bibnumber));
      setAthletes(sortedAthletes);
    }
    else {
      setSortColumn("bibnumber");
      setSortOrder("asc");
      const sortedAthletes = [...athletes].sort((a, b) => parseInt(b.bibnumber) - parseInt(a.bibnumber));
      setAthletes(sortedAthletes);
    }
  }

  return (
    <div className="table-container">
      <header>
        <h1>
          <img src={Running} height="50px" alt="Animated gif of a person running" />
          { } {Data.results.racename}
          {" | "} {Data.results.gender.toLowerCase() === "male" ? "Men" : "Woman"}
          {" - "} {new Date(`${Data.results.tod}`).toLocaleString("lookup").slice(0,10)}
        </h1>
      </header>
      <table>
        <thead>
          <th className="sortable-th" onClick={() => handleOnRankSorting()}>Rank
            <img src={sortColumn === "rank"
              ? sortOrder === "desc"
                ? ArrowUp
                : ArrowDown
              : ArrowUpDown
            } alt="Sorted arrow icon"/>
          </th>
          <th className="sortable-th" onClick={() => handleOnBibSorting()}>Bib Number
            <img src={sortColumn === "bibnumber"
              ? sortOrder === "desc"
                ? ArrowUp
                : ArrowDown
              : ArrowUpDown
            } alt="Sorted arrow icon"/>
          </th>
          <th>Finish Time</th>
          <th>Name</th>
          <th>Country</th>
        </thead>
        <tbody>
          {athletes && athletes.map((a) => (
            <tr key={a.athleteid}>
              <td className="numbers">{a.rank}</td>
              <td className="numbers">{a.bibnumber}</td>
              <td className="numbers">{a.finishtime}</td>
              <td className="string">{`${a.surname.toUpperCase()}, ${a.firstname}`}</td>
              <td className="string">{a.flag} { }
                <img
                  src={`https://assets.thebasetrip.com/api/v2/countries/flags/${a.countryname.toLowerCase().replace(' ', '-')}.png`}
                  height="15px"
                  alt={`${a.countryname}'s flag`} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ResultsTable
function moment(marathonDate: number) {
  throw new Error("Function not implemented.");
}

