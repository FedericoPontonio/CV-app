import {updateStoredData} from '../data.js'

export default function RemoveExperience({dataKey, topic, triggerRerenderOnRemoveButton}) {
    function handleRemoveExperience() {
        const tempDataRoot = JSON.parse(localStorage.getItem('CVDataJson'));
        let tempData;let updatedTopicData;
        if (topic === 'Work experience') {
            tempData = tempDataRoot.workExperiences;
        }
        else if (topic === 'Education') {
            tempData = tempDataRoot.education;
        }        

        for (let i = 0; i < tempData.length; i++) {
            if (tempData[i].key === dataKey) {
                updatedTopicData= tempData.splice([i], 1);
                break;
            }
        }
        tempDataRoot.topic= updatedTopicData;
        updateStoredData(tempDataRoot);
        triggerRerenderOnRemoveButton();
    }
    return (
        <button className="RemoveExperience" onClick={()=>{handleRemoveExperience()}}  >
            Remove Experience
        </button>
    )
}