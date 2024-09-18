import { DropdownMenu } from "./DropdownMenu.jsx"
import { updateStoredData, EducationConstructor } from "../../data.js";
import AddExperience from "../AddExperienceWork-Edu.jsx";
import { useState } from "react";


export default function Education({updatePreviewState}) {
    const [educationExperiencesRendered, setEducationExperienceRendered] = useState(populateTopicFromData());
    function handleAddExperience() {
        //add new data
        const tempDataRoot= JSON.parse(localStorage.getItem('CVDataJson'));
        const addElementToEducationProperty= [...JSON.parse(localStorage.getItem('CVDataJson')).education, EducationConstructor()];
        tempDataRoot.education = addElementToEducationProperty;
        updateStoredData(tempDataRoot);

        //instantiate component
        setEducationExperienceRendered(populateTopicFromData());
        updatePreviewState();
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
                key={data[i].key}
                updatePreviewState={updatePreviewState}/>
            );
        }
        return tempArray
    };

    return (
        <div className="Education">
            <img src="../../../images/education.jpg" alt="education"></img>
            {educationExperiencesRendered}
            <AddExperience 
                handleAddExperience={handleAddExperience}
            >
            </AddExperience>
        </div>
    )
}

    