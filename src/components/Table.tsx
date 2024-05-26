import { useState } from "react";
import Data from "../MarathonResults.json";

function Table() {
    const [data, setData] = useState(Data);
    const [order, setOrder] = useState("asc");

    const sorting = (col: string) => {
        if (order === "asc") {
            const sorted = [...data.results.athletes.map(d => d.surname)].sort((a,b) => a[col] > b[col] ? 1 : -1);
            setData(sorted);
            setOrder("desc");
        }
    }

    return (
        <>  
        <table>
          <thead>
              <th scope="col" onClick={() => sorting("rank")}>Rank</th>
              <th scope="col" onClick={() => sorting("bibnumber")}>Bib</th>
              <th scope="col" onClick={() => sorting("finishtime")}>Time</th>
              <th scope="col" onClick={() => sorting("surname")}>Name</th>
              <th scope="col" onClick={() => sorting("flag")}>Country</th>
          </thead>
  
          {Data && Data.results.athletes.map((d) => (
            <tbody>
              <tr key={d.athleteid}>
                <td className="numbers" scope="row">{d.rank}</td>
                <td className="numbers">{d.bibnumber}</td>
                <td className="numbers">{d.finishtime}</td>
                <td className="string">{`${d.surname.toUpperCase()}, ${d.firstname}`}</td>
                <td className="string">{d.flag} {}
                <img 
                  src={`https://assets.thebasetrip.com/api/v2/countries/flags/${d.countryname.toLowerCase().replace(' ', '-')}.png`}
                  height="15px"
                  alt={`${d.countryname}'s flag`}/>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </>
  
    )
  }
  
  export default Table
  