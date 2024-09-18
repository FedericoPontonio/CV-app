// import AddSkill from '../AddExperienceWork-Edu.jsx';
import { SingleRowComponent } from '../SingleRowComponent.jsx';

export default function Hobbies({updatePreviewState}) {

    return(
        <div className='Hobbies'>
            <img src='../../../images/hobbies.jpg' alt='hobbies'></img>
            <SingleRowComponent updatePreviewState={updatePreviewState} topic={'Hobbies'}/>
            {/* <AddSkill handleAddExperience={''}/> */}
        </div>
    )
};