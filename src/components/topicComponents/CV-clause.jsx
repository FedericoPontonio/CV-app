import "../../styles/CvClause.css";
import { updateStoredData } from "../../data";

export default function CvClause({updatePreviewState}) {

    function getLatestDataRoot() {
        return JSON.parse(localStorage.getItem('CVDataJson'));
    };

    
    function handleChanges(value) {
        const dataRoot = getLatestDataRoot();
        dataRoot.cvClause = value;
        updateStoredData(dataRoot);
        updatePreviewState();
    }
    return (
    <div className="CvClause">
        <label htmlFor='cvClause'>CV Clause:</label>
        <img src='/cvClause.jpg' alt='cv Clause'></img>
        <textarea id="cvClause"
        name="cvClause"
        rows={10}
        cols={40}
        defaultValue={getLatestDataRoot().cvClause}
        onChange={(e)=>{handleChanges(e.target.value)}}>
        </textarea>
    </div>
    )
}