import { DropdownMenu } from "./DropdownMenu.jsx"
import { updateStoredData, WorkExperienceConstructor } from "../../data.js";
import AddExperience from "../AddExperienceWork-Edu.jsx";
import { useState } from "react";




export default function WorkExperience({updatePreviewState}) {
    const [workExperiencesRendered, setWorkExperiencesRendered] = useState(populateTopicFromData());
    function handleAddExperience() {
        //add new data
        const tempDataRoot= JSON.parse(localStorage.getItem('CVDataJson'));
        const addElementToWorkExperienceProperty= [...JSON.parse(localStorage.getItem('CVDataJson')).workExperiences, WorkExperienceConstructor()];
        tempDataRoot.workExperiences = addElementToWorkExperienceProperty
        updateStoredData(tempDataRoot);

        //instantiate component
        setWorkExperiencesRendered(populateTopicFromData());
        updatePreviewState();
    };
    function triggerRerenderOnRemoveButton() {//duplication in Education.jsx
        setWorkExperiencesRendered(populateTopicFromData())
    }
    //render default data
    function populateTopicFromData(data=JSON.parse(localStorage.getItem('CVDataJson')).workExperiences) {
        const tempArray=[];
        for (let i = 0; i<data.length; i++) {
            tempArray.push(
                <DropdownMenu topic='Work experience' 
                triggerRerenderOnRemoveButton={triggerRerenderOnRemoveButton}
                roleInputDefaultValue={data[i].role} 
                companyInputDefaultValue={data[i].company} 
                cityInputDefaultValue={data[i].city}
                stardDateInputDefaultValue={data[i].startDate}
                endDateInputDefaultValue={data[i].endDate}
                descriptionInputDefaultValue={data[i].description}
                defaultStateHeader={data[i]}
                key={data[i].key}
                updatePreviewState={updatePreviewState}/>
            );
        }
        return tempArray
    };

    return (
        <div className="WorkExperience">
            <h2>Work Experience</h2>
            {workExperiencesRendered }
            <AddExperience 
                handleAddExperience={handleAddExperience}
            >
            </AddExperience>
        </div>
    )
}

//!!!creare un oggetto che tenga in memoria i nuovi elementi!!!
//quando chiamo il constructor, pushare nuovo elemento da qualche parte. loggare i dati per controllare che funzioni