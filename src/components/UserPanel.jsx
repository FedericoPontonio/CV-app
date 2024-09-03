import '../styles/UserPanel.css'
import TopicSidebar from './topicsSidebar/TopicSidebar.jsx'
import ContactInformations from "./topicComponents/ContactInformations"
import CvClause from "./topicComponents/CV-clause.jsx"
import WorkExperience from './topicComponents/WorkExperience.jsx'
import Education from './topicComponents/Education.jsx'
import  { useState } from 'react';



export default function UserPanel() {
    const [activeTopic, setActiveTopic] = useState('Contacts');
    const evaluateActiveTopic = (topic) => {
        switch(topic) {
            case 'Contacts':
                return <ContactInformations />;
            case 'Work experience':
                return <WorkExperience />;
            case 'Education':
                return <Education />;
            case 'Cv Clause':
                return <CvClause />;
            // Add other cases as needed
            default:
                return <div>No tab found</div>;
        }
    };
    return (
        <div className='UserPanel'>
            <TopicSidebar setActiveTopic={setActiveTopic} />
            {evaluateActiveTopic(activeTopic)}

        </div>
    )
}