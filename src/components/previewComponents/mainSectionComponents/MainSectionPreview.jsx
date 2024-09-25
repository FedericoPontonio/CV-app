import WorkHistory from "./WorkHistory";
import EducationHistory from "./EducationHistory";
import CvClause from "./CvClause";

export default function MainSectionPreview({state}) {
    return (
        <div className="MainSectionPreview">
            <EducationHistory state={state} />
            <WorkHistory state={state}/>
            <CvClause state={state} />
        </div>
    )
}