import { SingleRowComponent } from '../SingleRowComponent.jsx';

export default function Skills({updatePreviewState}) {

    return(
        <div className='Skills'>
            <img src='/images/skills.jpg' alt='skills'></img>
            <SingleRowComponent updatePreviewState={updatePreviewState}  topic={'Skills'}/>
        </div>
    )
};