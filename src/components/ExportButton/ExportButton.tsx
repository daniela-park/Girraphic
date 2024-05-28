import exportFromJSON from "export-from-json";
import Data from "../../MarathonResults.json";
import "./ExportButton.css";

function ExportButton() {

    const handleOnExport = () => {
        const data = Data.results.athletes.map((item) => {
            const { rank, firstname, surname, finishtime, flag } = item;
            return { Rank: rank, "Full Name": `${firstname} ${surname}`, "Finish Time": finishtime, "Country Code": flag }
        })

        const fileName = "race_results"
        const exportType = exportFromJSON.types.csv
        exportFromJSON({
            data,
            fileName,
            exportType,
        })
    }

    return (
        <button onClick={handleOnExport}>
            Export the results
        </button>
    )
}

export default ExportButton