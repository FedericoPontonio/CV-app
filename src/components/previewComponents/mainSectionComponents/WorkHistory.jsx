
export default function WorkHistory({state}) {
    function experiencesCollection() {
        let tempArray=[];
        for(let i = 0; i<state.workExperiences.length;i++) {
            tempArray.push(
                <div key={crypto.randomUUID()} className="singleExperienceDiv">
                    <div className="singleExperienceDateSection">
                        <div className="dateDiv">{state.workExperiences[i].startDate}</div> <div className="dateDiv">{state.workExperiences[i].endDate}</div>
                    </div>
                    <div className="descriptingFields">
                        <div className="role">
                            {state.workExperiences[i].role}
                        </div>
                        <div>
                            {state.workExperiences[i].company}, {state.workExperiences[i].city}
                        </div>
                        <div className="description">
                        {state.workExperiences[i].description}
                        </div>
                    </div>
                </div>
            )
        }
        return tempArray
    }
    return (
        <div className="WorkHistory">
            <h2 className="mainSectionPreviewHeader">Work Experience</h2>
            <div>
                {experiencesCollection()}
            </div>
        </div>
    )
}