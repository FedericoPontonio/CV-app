import { SingleLinerComponentConstructor, updateStoredData } from "../data";
import FormInput from "./topicComponents/FormInput";
import AddSingleRowComponentButton from "./AddExperienceWork-Edu";
import { useState } from "react";
import ButtonRemoveSingleRow from "./ButtonRemoveSingleRow";
import "../styles/SingleRowComponent.css"

const dataRoot = JSON.parse(localStorage.getItem('CVDataJson'));//function maybe better


export function SingleRowComponent({topic, updatePreviewState}) {
    
    function relevantData() {
        if (topic === 'Skills') {//repetition
            return dataRoot.skills
        }
        else if (topic === 'Languages') {//repetition
            return dataRoot.languages
        }
        else if (topic === 'Hobbies') {//repetition
            return dataRoot.hobbies
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
        if (topic === 'Skills') {//repetition
            dataRoot.skills= [...relevantData(), SingleLinerComponentConstructor(topic)]
        }
        else if (topic === 'Languages') {//repetition
            dataRoot.languages= [...relevantData(), SingleLinerComponentConstructor(topic)]
        }
        else if (topic === 'Hobbies') {//repetition
            dataRoot.hobbies= [...relevantData(), SingleLinerComponentConstructor(topic)]
        }
        updateStoredData(dataRoot)
        setState(collectionOfSingleRower())
        updatePreviewState();
    };
    function handleInputChanges(inputId, eventTargetValue) {
        for(let i=0;i<relevantData().length;i++) {
            if (relevantData()[i].key === inputId) {
                if (topic === 'Skills') {//repetition
                    dataRoot.skills[i].value= eventTargetValue;
                }
                else if (topic === 'Languages') {//repetition
                    dataRoot.languages[i].value= eventTargetValue;
                }
                else if (topic === 'Hobbies') {//repetition
                    dataRoot.hobbies[i].value= eventTargetValue;
                }
            }
        }
        updateStoredData(dataRoot);
        updatePreviewState();
    };
    function handleRemoveSingleRow(keyId) {
        for(let i=0;i<relevantData().length;i++) {
            if (relevantData()[i].key === keyId) {
                if (topic === 'Skills') {//repetition
                    dataRoot.skills.splice([i], 1);
                }
                else if (topic === 'Languages') {//repetition
                    dataRoot.languages.splice([i], 1);
                }
                else if (topic === 'Hobbies') {//repetition
                    dataRoot.hobbies.splice([i], 1);
                }
            }
        }
        updateStoredData(dataRoot);
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