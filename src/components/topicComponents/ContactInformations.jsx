import FormInput from "./FormInput"

export default function ContactInformations() {
    return (
    <div className="ContactInformations">
            <FormInput fieldID='fName' fieldCaption='First Name' type='text' placeholder='poro' />
            <FormInput fieldID='lname' fieldCaption='Last Name' type='text' placeholder='Bignardi' />
            <FormInput fieldID='professionalRole' fieldCaption='Professional Role' type='text' placeholder='Web Developer' />
            <FormInput fieldID='address' fieldCaption='Address' type='text' placeholder='132, My Street, Kingston, New York 12401.' />
            <FormInput fieldID='email' fieldCaption='E-mail' type='email' placeholder='exemple@gmail.com' />
            <FormInput fieldID='linkedin' fieldCaption='Linkedin' type='text' placeholder='https://www.linkedin.com' />
            <FormInput fieldID='phoneNumber' fieldCaption='Phone Number' type='tel' placeholder='334 533 1133' />
    </div>
    )
};

//all validation to implement