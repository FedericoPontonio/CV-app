import { DropdownMenu } from "./DropdownMenu.jsx"
import '../../styles/UserPanel.css'
import { updateStoredData, WorkExperienceConstructor } from "../../data.js";
import AddExperience from "../AddExperienceWork-Edu.jsx";
import { useState } from "react";

    //render default data
    function populateTopicFromData(data=JSON.parse(localStorage.getItem('CVDataJson'))) {
        const tempArray=[];
        for (let i = 0; i<data.length; i++) {
            tempArray.push(
                <DropdownMenu topic='Work experience' 
                roleInputDefaultValue={data[i].role} 
                companyInputDefaultValue={data[i].company} 
                cityInputDefaultValue={data[i].city}
                stardDateInputDefaultValue={data[i].startDate}
                endDateInputDefaultValue={data[i].endDate}
                descriptionInputDefaultValue={data[i].description}
                defaultStateHeader={data[i]}
                key={data[i].key}/>
            );
        }
        return tempArray
    };


export default function WorkExperience() {
    const [workExperiencesRendered, setWorkExperiencesRendered] = useState(populateTopicFromData());
    function handleAddExperience() {
        //add new data
        updateStoredData([...JSON.parse(localStorage.getItem('CVDataJson')), WorkExperienceConstructor()]);
        //instantiate component
        setWorkExperiencesRendered(populateTopicFromData());
    };

    return (
        <div className="WorkExperience">
            <h2>Work Experience</h2>
            {workExperiencesRendered }
            <AddExperience handleAddExperience={handleAddExperience}>
            </AddExperience>
        </div>
    )
}

//!!!creare un oggetto che tenga in memoria i nuovi elementi!!!
//quando chiamo il constructor, pushare nuovo elemento da qualche parte. loggare i dati per controllare che funzioni