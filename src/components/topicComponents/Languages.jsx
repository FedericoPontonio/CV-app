// import AddSkill from '../AddExperienceWork-Edu.jsx';
import { SingleRowComponent } from '../SingleRowComponent.jsx';

export default function Languages({updatePreviewState}) {

    return(
        <div className='Languages'>
            <h2>Languages</h2>
            <SingleRowComponent  updatePreviewState={updatePreviewState} topic={'Languages'}/>
            {/* <AddSkill handleAddExperience={''}/> */}
        </div>
    )
};