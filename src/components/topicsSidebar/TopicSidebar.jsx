import SidebarListElement from './SidebarListElement.jsx'
import '../../styles/TopicSidebar.css'


export default function TopicSidebar({ setActiveTopic, addStyleToActiveLi }) {
    return (
        <div className='TopicSidebar'>
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
    )
}