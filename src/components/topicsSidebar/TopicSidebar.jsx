import SidebarListElement from './SidebarListElement.jsx'
import '../../styles/TopicSidebar.css'


export default function TopicSidebar({ setActiveTopic }) {
    return (
        <div className='TopicSidebar'>
            <h2>Edit Panel</h2>
            <ul className='listSidebar'>
                <SidebarListElement text='Contacts' setActiveTopic={setActiveTopic} />
                <SidebarListElement text='Work experience' setActiveTopic={setActiveTopic} />
                <SidebarListElement text='Education' setActiveTopic={setActiveTopic} />
                <SidebarListElement text='Soft skills' setActiveTopic={setActiveTopic} />
                <SidebarListElement text='Languages' setActiveTopic={setActiveTopic} />
                <SidebarListElement text='Hobbies' setActiveTopic={setActiveTopic} />
                <SidebarListElement text='Cv Clause' setActiveTopic={setActiveTopic} />
                <SidebarListElement text='Download CV' setActiveTopic={setActiveTopic} />
            </ul>
        </div>
    )
}