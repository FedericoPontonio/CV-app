
export default function EducationHistory({state}) {
    function experiencesCollection() {
        let tempArray=[];
        for(let i = 0; i<state.education.length;i++) {
            tempArray.push(
                <div key={crypto.randomUUID()} className="singleExperienceDiv">
                    <div className="singleExperienceDateSection">
                        <div className="dateDiv">{state.education[i].startDate}</div> <div className="dateDiv">{state.education[i].endDate}</div>
                    </div>
                    <div className="descriptingFields">
                        <div className="role">
                            {state.education[i].degree}, {state.education[i].title}
                        </div>
                        <div>
                            {state.education[i].school}, {state.education[i].city}
                        </div>
                    </div>
                </div>
            )
        }
        return tempArray
    }
    return (
        <div className="EducationHistory">
            <h2 className="mainSectionPreviewHeader">Education</h2>
            <div>
                {experiencesCollection()}
            </div>
        </div>
    )
}