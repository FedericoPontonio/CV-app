import { useState } from "react"
import FormInput from "./FormInput"

const collapseIcon = <svg width="30px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier" ></g><g id="SVGRepo_iconCarrier"><line x1="14" y1="10" x2="21" y2="3"></line><polyline points="20 10 14 10 14 4"></polyline><line x1="3" y1="21" x2="10" y2="14"></line><polyline points="4 14 10 14 10 20"></polyline></g></svg>
const expandIcon =   <svg width="30px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M14 10L21 3M21 3H16.5M21 3V7.5M10 14L3 21M3 21H7.5M3 21L3 16.5" stroke="#000000" ></path> </g></svg>


export function DropdownMenu({topic, dataKey, schoolInputDefaultValue, titleInputDefaultValue, degreeInputDefaultValue, roleInputDefaultValue, companyInputDefaultValue, cityInputDefaultValue, stardDateInputDefaultValue, endDateInputDefaultValue, descriptionInputDefaultValue, defaultStateHeader}) {
    const [activeIcon, setActiveIcon] =useState(expandIcon);
    const [isFormExpanded, setIsFormExpanded] = useState(false);
    const [workplace, setHeaderText] = useState(defaultStateHeader.company);
    const [role, setRoleText] = useState(defaultStateHeader.role);
    const [startDate, setStartDateText] = useState(defaultStateHeader.startDate);
    const [endDate, setEndDateText] = useState(defaultStateHeader.endDate);

    //maybe I can figure out how to not repeate state. the problem are "defaultStateHeader.company" and "defaultStateHeader.role";
    const [school, setSchool] = useState(defaultStateHeader.school);
    const [degree, setDegree] = useState(defaultStateHeader.degree);


    function expandCollapseForm() {
        if(activeIcon === expandIcon) {
            setActiveIcon(collapseIcon)
        }
        else {
            setActiveIcon(expandIcon)
        }
        setIsFormExpanded(!isFormExpanded)
    };

    function handleInputChanges(fieldID, value
    ) {
        //header changes
        switch (fieldID) {
            case 'company':
                setHeaderText(value);
                break;
            case 'role':
                setRoleText(value);
                break;
            case 'startDate':
                setStartDateText(value);
                break;
            case 'endDate':
                setEndDateText(value);
                break;
            case 'school':
                    setSchool(value);
                    break;
            case 'degree':
                    setDegree(value);
                    break;
            default:
                break;
        }
        //update data
        let updatedData = JSON.parse(localStorage.getItem('CVDataJson'));
        for (let i = 0; i < updatedData.length; i++) {
            if (updatedData[i].key === defaultStateHeader.key) { // Assuming each item has a unique 'key'
                updatedData[i][fieldID] = value;  // Update the specific field
                break;  // Stop the loop once the correct item is updated
            }
        }
         // Update localStorage with the new data
        localStorage.setItem('CVDataJson', JSON.stringify(updatedData));
    };


    if(topic === 'Work experience') {
        
        return (
            <div className="DropdownMenu">
                <div className="dropdownHeader" onClick={expandCollapseForm}>
                    <h3>{workplace}</h3>
                    {activeIcon}
                    <p>{role}{', '} {startDate} {'/'} {endDate}</p>
                </div>
                {isFormExpanded && 
                <div className="dropdownTabs" key={dataKey} >
                    <FormInput fieldID='role' fieldCaption='Role' type='text' placeholder={'Role'} handleInputChanges={handleInputChanges} value={roleInputDefaultValue} />
                    <FormInput fieldID='company' fieldCaption='Company' type='text' placeholder='Company/Employer' handleInputChanges={handleInputChanges} value={companyInputDefaultValue} />
                    <FormInput fieldID='city' fieldCaption='City' type='text' placeholder='Location' handleInputChanges={handleInputChanges} value={cityInputDefaultValue} />
                    <FormInput fieldID='startDate' fieldCaption='Start Date' type='text' placeholder='Start Date' handleInputChanges={handleInputChanges} value={stardDateInputDefaultValue} />
                    <FormInput fieldID='endDate' fieldCaption='End Date' type='text' placeholder='End Date' handleInputChanges={handleInputChanges} value={endDateInputDefaultValue} />
                    <FormInput fieldID='description' fieldCaption='Description' type='text' handleInputChanges={handleInputChanges} placeholder="A brief description of your responsability" value={descriptionInputDefaultValue} />
                </div>}
                
            </div>
        )
    }
    else if (topic === 'Education') {
        return (
            <div className="DropdownMenu" >
            <div className="dropdownHeader" onClick={expandCollapseForm}>
                <h3>{school}</h3>
                {activeIcon}
                <p>{degree}{', '} {startDate} {'/'} {endDate}</p>
            </div>
            {isFormExpanded && 
            <div className="dropdownTabs">
                <FormInput fieldID='degree' handleInputChanges={handleInputChanges} fieldCaption='Degree' type='text' placeholder="Master's Degree" value={degreeInputDefaultValue} />
                <FormInput fieldID='title' fieldCaption='Title' type='text' placeholder='Software Engineering' value={titleInputDefaultValue} />
                <FormInput fieldID='school' handleInputChanges={handleInputChanges} fieldCaption='School' type='text' placeholder='Stanford' value={schoolInputDefaultValue} />
                <FormInput fieldID='city' fieldCaption='City' type='text' placeholder='San Francisco' value={schoolInputDefaultValue} />
                <FormInput fieldID='startDate' handleInputChanges={handleInputChanges} fieldCaption='Start Date' type='text' placeholder='2024-02' value={stardDateInputDefaultValue} />
                <FormInput fieldID='endDate' handleInputChanges={handleInputChanges} fieldCaption='End Date' type='text' placeholder='Present' value={endDateInputDefaultValue} />
            </div>}
        </div>
        )
    }

}
