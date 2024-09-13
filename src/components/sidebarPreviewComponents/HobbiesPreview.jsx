export default function HobbiesPreview({state}) {
    function listOfHobbies() {
        let tempArray=[];
        for (let i=0;i<state.hobbies.length;i++) {
            tempArray.push(
                <p key={crypto.randomUUID()}>{state.hobbies[i].value}</p>
            )
        }
        return tempArray
    };
    return (
        <div className="Hobbies">
            <h2 className="sidebarHeader">Hobbies</h2>
            {listOfHobbies()}
        </div>
    )
};