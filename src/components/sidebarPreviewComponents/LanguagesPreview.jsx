export default function LanguagesPreview({state}) {
    function listOfLanguages() {
        let tempArray=[];
        for (let i=0;i<state.languages.length;i++) {
            tempArray.push(
                <p key={crypto.randomUUID()}>{state.languages[i].value}</p>
            )
        }
        return tempArray
    };
    return (
        <div className="Languages">
            <h2 className="sidebarHeader">Languages</h2>
            {listOfLanguages()}
        </div>
    )
};