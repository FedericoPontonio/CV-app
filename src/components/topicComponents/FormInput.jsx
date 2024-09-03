import '../../styles/FormInput.css'

export default function FormInput({fieldID, fieldCaption, type, placeholder, handleInputChanges, value, key}) {
        
    return (
        <div className='FormInput'>
            <label htmlFor= {fieldID}>{fieldCaption}</label>
            <input type={type} id={fieldID} key={key} name={fieldID} placeholder={placeholder} onChange={(e) => handleInputChanges(fieldID, e.target.value)} defaultValue={value}></input>
        </div>
    )
}