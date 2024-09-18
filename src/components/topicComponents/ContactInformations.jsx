import FormInput from "./FormInput";
import {updateStoredData} from "../../data.js"
import "../../styles/ContactInformation.css"

export default function ContactInformations({updatePreviewState}) {
    const dataRoot= JSON.parse(localStorage.getItem('CVDataJson'));
    const contactData= dataRoot.contacts;
    function handleInputChanges(fieldID, value) {
        dataRoot.contacts[fieldID] = value;
        updateStoredData(dataRoot)
        updatePreviewState()
    }
    return (
        <div className="contactInfoParent" style={{display:'flex', flexDirection:'column', alignItems:'center',}}>
            <img id="imgContactInformation" src="../../../images/personalInfo.jpg" alt="personal information"></img>
            <div className="ContactInformations">
            <FormInput fieldID='address' fieldCaption='Address' type='text' value={contactData.address} handleInputChanges={handleInputChanges} />
            <FormInput fieldID='fName' fieldCaption='First Name' type='text' value={contactData.fName} handleInputChanges={handleInputChanges} />
            <FormInput fieldID='lName' fieldCaption='Last Name' type='text' value={contactData.lName} handleInputChanges={handleInputChanges} />
            <FormInput fieldID='email' fieldCaption='E-mail' type='email' value={contactData.email} handleInputChanges={handleInputChanges} />
            <FormInput fieldID='phoneNumber' fieldCaption='Phone Number' type='tel' value={contactData.phoneNumber} handleInputChanges={handleInputChanges} />
            <FormInput fieldID='professionalRole' fieldCaption='Professional Role' type='text' value={contactData.professionalRole} handleInputChanges={handleInputChanges} />
            <FormInput fieldID='linkedin' fieldCaption='Linkedin' type='text' value={contactData.linkedin} handleInputChanges={handleInputChanges} />
    </div>
        </div>
    
    )
};

//all validation to implement