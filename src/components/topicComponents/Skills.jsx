import { SingleRowComponent } from '../SingleRowComponent.jsx';

export default function Skills({updatePreviewState}) {

    return(
        <div className='Skills'>
            <h2>Skills</h2>
            <SingleRowComponent updatePreviewState={updatePreviewState}  topic={'Skills'}/>
        </div>
    )
};