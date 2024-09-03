import { DropdownMenu } from "./DropdownMenu.jsx"
import '../../styles/UserPanel.css'
import { education } from "../../data.js";



export default function Education() {

        //render default data
    function populateTopicFromData() {
        const tempArray=[];
        for (let i = 0; i<education.length; i++) {
            tempArray.push(
                <DropdownMenu topic='Education' 
                degreeInputDefaultValue={education[i].degree} 
                schoolInputDefaultValue={education[i].school} 
                cityInputDefaultValue={education[i].city}
                stardDateInputDefaultValue={education[i].startDate}
                endDateInputDefaultValue={education[i].endDate}
                titleInputDefaultValue={education[i].title}
                defaultStateHeader={education[i]}
                key={crypto.randomUUID()}/>//serve?
            );
        }
        return tempArray
    };
    return (
        <div className="Education">
            <h2>Education</h2>
            {populateTopicFromData()}
        </div>
    )
}

    