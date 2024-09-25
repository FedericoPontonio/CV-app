import '../styles/UserPanel.css'
import '../styles/dropdownMenus.css';
import TopicSidebar from './topicsSidebar/TopicSidebar.jsx'
import ContactInformations from "./topicComponents/ContactInformations"
import CvClause from "./topicComponents/CV-clause.jsx"
import WorkExperience from './topicComponents/WorkExperience.jsx'
import Education from './topicComponents/Education.jsx'
import Skills from './topicComponents/Skills.jsx'
import  { useState } from 'react';
import Languages from './topicComponents/Languages.jsx'
import Hobbies from './topicComponents/Hobbies.jsx'
import DownloadCv from './topicComponents/DownloadCv.jsx'



export default function UserPanel({updatePreviewState}) {
    const [activeTopic, setActiveTopic] = useState('Contacts');
    function addStyleToActiveLi(topic) {
        if (topic === activeTopic) {
            return {
                paddingLeft: '10px',
                listStyleType: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
                borderLeft: 'solid black 2px',
                backgroundColor: 'rgb(115, 115, 145, 0.2)',
                marginLeft: '30px',

            }
        }
        else {
            return {
                paddingLeft: '10px',
                listStyleType: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
                borderLeft: 'solid black 2px',
            }
        }
    };
    const evaluateActiveTopic = (topic) => {
        switch(topic) {
            case 'Contacts':
                return <ContactInformations updatePreviewState={updatePreviewState} />;
            case 'Work experience':
                return <WorkExperience updatePreviewState={updatePreviewState}/>;
            case 'Education':
                return <Education updatePreviewState={updatePreviewState}/>;
            case 'Cv Clause':
                return <CvClause updatePreviewState={updatePreviewState} />;
            case 'Skills':
                return <Skills updatePreviewState={updatePreviewState} />;
            case 'Languages':
                return <Languages updatePreviewState={updatePreviewState}  />;
            case 'Hobbies':
                return <Hobbies updatePreviewState={updatePreviewState}  />
            case 'Download CV':
                return <DownloadCv />
            // Add other cases as needed
            default:
                return <div>No tab found</div>;
        }
    };
    return (
        <div className='UserPanel'>
            <TopicSidebar setActiveTopic={setActiveTopic} addStyleToActiveLi={addStyleToActiveLi} />
            {evaluateActiveTopic(activeTopic)}

        </div>
    )
}