// import AddSkill from '../AddExperienceWork-Edu.jsx';
import { SingleRowComponent } from '../SingleRowComponent.jsx';

export default function Languages({updatePreviewState}) {

    return(
        <div className='Languages'>
            <img src='/languages.jpg' alt='languages'></img>
            <SingleRowComponent  updatePreviewState={updatePreviewState} topic={'Languages'}/>
            {/* <AddSkill handleAddExperience={''}/> */}
        </div>
    )
};