export default function SkillsPreview({state}) {
    function listOfSkills() {
        let tempArray=[];
        for (let i=0;i<state.skills.length;i++) {
            tempArray.push(
                <p key={crypto.randomUUID()}>{state.skills[i].value}</p>
            )
        }
        return tempArray
    };
    return (
        <div className="Skills">
            <h2 className="sidebarHeader">Skills</h2>
            {listOfSkills()}
        </div>
    )
};