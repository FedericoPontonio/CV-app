export default function ContactInformationsPreview({state}) {
    return (
        <div className="ContactInformationsPreview">
            <h2 className="sidebarHeader">Contact Informations</h2>
            <div>
                <h3 className="subHeaderPreview">Email</h3>
                <p>{state.contacts.email}</p>
            </div>
            <div>
                <h3 className="subHeaderPreview">Phone</h3>
                <p>{state.contacts.phoneNumber}</p>
            </div>
            <div>
                <h3 className="subHeaderPreview">Address</h3>
                <p>{state.contacts.address}</p>
            </div>
            <div>
                <h3 className="subHeaderPreview">Linkedin</h3>
                <p>{state.contacts.linkedin}</p>
            </div>
            
        </div>
    )
};