

export default function Header({state}) {
    return (
        <h1 className="Header">
            <div>{state.contacts.fName} {state.contacts.lName}</div>
            <div>{state.contacts.professionalRole}</div>
            </h1>
    )
};