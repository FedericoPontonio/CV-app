import SidebarListElement from './SidebarListElement.jsx'
import '../../styles/TopicSidebar.css'
import { useState } from 'react'


export default function TopicSidebar({ setActiveTopic, addStyleToActiveLi }) {
    const [sidebarVisibility, setSidebarVisibility] = useState(true);
    function handleSidebarVisibility() {
        const topicSidebar= document.querySelector('.TopicSidebar');
        if (sidebarVisibility === true) {
            topicSidebar.classList.remove('topicSidebarVisible')
            topicSidebar.classList.add('topicSidebarHidden')
            setSidebarVisibility(false);
        }
        else {
            topicSidebar.classList.remove('topicSidebarHidden')
            topicSidebar.classList.add('topicSidebarVisible')
            setSidebarVisibility(true);
        }
    };
    return (
        <div >
            <button onClick={()=>{handleSidebarVisibility()}} id='collapseTopicsidebar'><svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000"></path> </g></svg></button>
            <div className='TopicSidebar topicSidebarVisible'>
                <h2>Edit Panel</h2>
                <ul className='listSidebar'>
                    <SidebarListElement text='Contacts' setActiveTopic={setActiveTopic} addStyleToActiveLi={addStyleToActiveLi} />
                    <SidebarListElement text='Work experience' setActiveTopic={setActiveTopic} addStyleToActiveLi={addStyleToActiveLi} />
                    <SidebarListElement text='Education' setActiveTopic={setActiveTopic} addStyleToActiveLi={addStyleToActiveLi} />
                    <SidebarListElement text='Skills' setActiveTopic={setActiveTopic} addStyleToActiveLi={addStyleToActiveLi}/>
                    <SidebarListElement text='Languages' setActiveTopic={setActiveTopic} addStyleToActiveLi={addStyleToActiveLi} />
                    <SidebarListElement text='Hobbies' setActiveTopic={setActiveTopic} addStyleToActiveLi={addStyleToActiveLi} />
                    <SidebarListElement text='Cv Clause' setActiveTopic={setActiveTopic} addStyleToActiveLi={addStyleToActiveLi} />
                    <SidebarListElement text='Download CV' setActiveTopic={setActiveTopic} addStyleToActiveLi={addStyleToActiveLi} />
                </ul>
            </div>
        </div>
    )
}