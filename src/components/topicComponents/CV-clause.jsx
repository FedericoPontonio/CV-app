import "../../styles/CvClause.css";
import { updateStoredData } from "../../data";

export default function CvClause() {
    const dataRoot = JSON.parse(localStorage.getItem('CVDataJson'));
    function handleChanges(value) {
        dataRoot.cvClause = value;
        updateStoredData(dataRoot);
    }
    return (
    <div className="CvClause">
        <label htmlFor='cvClause'>CV Clause:</label>
        <textarea id="cvClause"
        name="cvClause"
        rows={10}
        cols={40}
        defaultValue={dataRoot.cvClause}
        onChange={(e)=>{handleChanges(e.target.value)}}>
        </textarea>
    </div>
    )
}