import { DropdownMenu } from "./DropdownMenu.jsx"
import '../../styles/UserPanel.css'
import { updateStoredData, EducationConstructor } from "../../data.js";
import AddExperience from "../AddExperienceWork-Edu.jsx";
import { useState } from "react";


export default function Education() {
    const [educationExperiencesRendered, setEducationExperienceRendered] = useState(populateTopicFromData());
    function handleAddExperience() {
        //add new data
        const tempDataRoot= JSON.parse(localStorage.getItem('CVDataJson'));
        const addElementToEducationProperty= [...JSON.parse(localStorage.getItem('CVDataJson')).education, EducationConstructor()];
        tempDataRoot.education = addElementToEducationProperty;
        updateStoredData(tempDataRoot);

        //instantiate component
        setEducationExperienceRendered(populateTopicFromData());
    };
    function triggerRerenderOnRemoveButton() {//duplication in Education.jsx
        setEducationExperienceRendered(populateTopicFromData())
    }
    //render default data
    function populateTopicFromData(data=JSON.parse(localStorage.getItem('CVDataJson')).education) {
        const tempArray=[];
        for (let i = 0; i<data.length; i++) {
            tempArray.push(
                <DropdownMenu topic='Education'
                triggerRerenderOnRemoveButton={triggerRerenderOnRemoveButton}
                degreeInputDefaultValue={data[i].degree} 
                schoolInputDefaultValue={data[i].school} 
                cityInputDefaultValue={data[i].city}
                stardDateInputDefaultValue={data[i].startDate}
                endDateInputDefaultValue={data[i].endDate}
                titleInputDefaultValue={data[i].title}
                defaultStateHeader={data[i]}
                key={data[i].key}/>
            );
        }
        return tempArray
    };

    return (
        <div className="Education">
            <h2>Education</h2>
            {educationExperiencesRendered}
            <AddExperience handleAddExperience={handleAddExperience}>
            </AddExperience>
        </div>
    )
}

    