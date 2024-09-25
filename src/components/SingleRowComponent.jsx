import { SingleLinerComponentConstructor, updateStoredData } from "../data";
import FormInput from "./topicComponents/FormInput";
import AddSingleRowComponentButton from "./AddExperienceWork-Edu";
import { useState } from "react";
import ButtonRemoveSingleRow from "./ButtonRemoveSingleRow";
import "../styles/SingleRowComponent.css"




export function SingleRowComponent({topic, updatePreviewState}) {

    function getLatestDataRoot() {
        return JSON.parse(localStorage.getItem('CVDataJson'));
    };

    function relevantData() {
        const latestDataRoot = getLatestDataRoot();

        if (topic === 'Skills') {//repetition
            return latestDataRoot.skills
        }
        else if (topic === 'Languages') {//repetition
            return latestDataRoot.languages
        }
        else if (topic === 'Hobbies') {//repetition
            return latestDataRoot.hobbies
        }
    };

    function collectionOfSingleRower () {
        let result=[];
        for(let i=0; i<relevantData().length; i++) {
            result.push(
                <div className="singleRowComponent" key={crypto.randomUUID()}>
                        <FormInput
                        placeholder={'Write your '+ topic}
                        value={relevantData()[i].value}
                        key={relevantData()[i].key}
                        fieldID={relevantData()[i].key}
                        handleInputChanges={handleInputChanges}
                    />
                    <ButtonRemoveSingleRow keyId={relevantData()[i].key} handleRemoveSingleRow={handleRemoveSingleRow} />
                </div>

            )
        }
        return result
    };
    const [state, setState] = useState(collectionOfSingleRower());

    
    //update data
    function handleAddSingleRowComponent() {
        const latestDataRoot = getLatestDataRoot();
        if (topic === 'Skills') {//repetition
            latestDataRoot.skills= [...relevantData(), SingleLinerComponentConstructor(topic)]
        }
        else if (topic === 'Languages') {//repetition
            latestDataRoot.languages= [...relevantData(), SingleLinerComponentConstructor(topic)]
        }
        else if (topic === 'Hobbies') {//repetition
            latestDataRoot.hobbies= [...relevantData(), SingleLinerComponentConstructor(topic)]
        }
        updateStoredData(latestDataRoot)
        setState(collectionOfSingleRower())
        updatePreviewState();
    };
    function handleInputChanges(inputId, eventTargetValue) {
        const latestDataRoot = getLatestDataRoot();

        for(let i=0;i<relevantData().length;i++) {
            if (relevantData()[i].key === inputId) {
                if (topic === 'Skills') {//repetition
                    latestDataRoot.skills[i].value= eventTargetValue;
                }
                else if (topic === 'Languages') {//repetition
                    latestDataRoot.languages[i].value= eventTargetValue;
                }
                else if (topic === 'Hobbies') {//repetition
                    latestDataRoot.hobbies[i].value= eventTargetValue;
                }
            }
        }
        updateStoredData(latestDataRoot);
        updatePreviewState();
    };
    function handleRemoveSingleRow(keyId) {
        const latestDataRoot = getLatestDataRoot();

        for(let i=0;i<relevantData().length;i++) {
            if (relevantData()[i].key === keyId) {
                if (topic === 'Skills') {//repetition
                    latestDataRoot.skills.splice([i], 1);
                }
                else if (topic === 'Languages') {//repetition
                    latestDataRoot.languages.splice([i], 1);
                }
                else if (topic === 'Hobbies') {//repetition
                    latestDataRoot.hobbies.splice([i], 1);
                }
            }
        }
        updateStoredData(latestDataRoot);
        setState(collectionOfSingleRower());
        updatePreviewState();
    }
    
    return(
        <>
            {state}
            <AddSingleRowComponentButton handleAddExperience={()=>{handleAddSingleRowComponent()}} />
        </>
    )
};