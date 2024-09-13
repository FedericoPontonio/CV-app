// import AddSkill from '../AddExperienceWork-Edu.jsx';
import { SingleRowComponent } from '../SingleRowComponent.jsx';

export default function Hobbies({updatePreviewState}) {

    return(
        <div className='Hobbies'>
            <h2>Hobbies</h2>
            <SingleRowComponent updatePreviewState={updatePreviewState} topic={'Hobbies'}/>
            {/* <AddSkill handleAddExperience={''}/> */}
        </div>
    )
};