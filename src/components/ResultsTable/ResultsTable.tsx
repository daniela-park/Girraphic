import "./ResultsTable.css"
import Data from "../../MarathonResults.json";
import { useState } from "react";
import Running from "/running.gif";
import ArrowUp from "/ArrowUp.png";
import ArrowDown from "/ArrowDown.png";

function ResultsTable() {
  const [sortedData, setSortedData] = useState(Data.results.athletes.map(d => d.rank))
  const [order, setOrder] = useState("asc")
  const [arrow, setArrow] = useState(ArrowDown)
  const [arrowAlt, setArrowAlt] = useState("Arrow down icon")

  const handleOnSorting = () => {
    if (order === "asc" && sortedData) {
      const sortedData = [...Data.results.athletes.map(d => d.rank)]
      .sort((a: any, b: any) => a > b ? 1 : -1);
      setSortedData(sortedData);
      setOrder("desc");
      setArrow(ArrowUp);
      setArrowAlt("Arrow up icon")
    }
    if (order === "desc") {
      const sortedData = [...Data.results.athletes.map(d => d.rank)]
      .sort((a: any, b: any) => a < b ? 1 : -1);
      setSortedData(sortedData);
      setOrder("asc");
      setArrow(ArrowDown);
      setArrowAlt("Arrow down icon")
    }
  }

  // const rankData = data.results.athletes.map(d => d.rank)
  // const handleOnRankSorting = (rankData: any) => {
  //   if (order === "asc") {
  //     const sorted = rankData.sort((a: any, b: any) => a[rankData] > b[rankData] ? 1 : -1)
  //     setData(sorted);
  //     setOrder("desc");
  //     setArrow(ArrowDown);
  //     setArrowAlt("Arrow down icon");
  //   }
  //   if (order === "desc") {
  //     const sorted = rankData.sort((a: any, b: any) => a[rankData] < b[rankData] ? 1 : -1)
  //     setData(sorted);
  //     setOrder("asc");
  //     setArrow(ArrowUp);
  //     setArrowAlt("Arrow up icon");
  //   }
  // }

  // const bibData = data.results.athletes.map(d => d.bibnumber)
  // const handleOnBibSorting = (bibData: any) => {
  //   if (order === "asc") {
  //     const sorted = bibData.sort((a: any, b: any) => a[bibData] > b[bibData] ? 1 : -1)
  //     setData(sorted);
  //     setOrder("desc");
  //     setArrow(ArrowDown);
  //     setArrowAlt("Arrow down icon");
  //   }
  //   if (order === "desc") {
  //     const sorted = bibData.sort((a: any, b: any) => a[bibData] < b[bibData] ? 1 : -1)
  //     setData(sorted);
  //     setOrder("asc");
  //     setArrow(ArrowUp);
  //     setArrowAlt("Arrow up icon");
  //   }
  // }
  

  return (
    <div className="table-container">
      <header>
        <h1>
          <img src={Running} height="50px" alt="Animated gif of a person running" />
          { } {Data.results.racename}
          {" | "} {Data.results.gender.toLowerCase() === "male" ? "Men" : "Woman"}
          {" - "} {new Date(`${Data.results.tod}`).toLocaleString("lookup")}
        </h1>
      </header>
      <table>
        <thead>
          {/* <th className="sortable-th" onClick={handleOnRankSorting}>Rank */}
          <th className="sortable-th" onClick={() => handleOnSorting()}>Rank
            <img src={arrow} alt={arrowAlt}/>
          </th>
          {/* <th className="sortable-th" onClick={handleOnBibSorting}>Bib Number */}
          <th className="sortable-th" onClick={() => handleOnSorting()}>Bib Number
            <img src={arrow} alt={arrowAlt}/>
          </th>
          <th>Finish Time</th>
          <th>Name</th>
          <th>Country</th>
        </thead>
        <tbody>
          {Data && Data.results.athletes.map((d) => (
            <tr key={d.athleteid}>
              <td className="numbers">{d.rank}</td>
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
          ))}
        </tbody>
      </table>
    </div>

  )
}

export default ResultsTable
