import ContactInformationsPreview from "./ContactInformationsPreview";
import SkillsPreview from "./SkillsPreview";
import LanguagesPreview from "./LanguagesPreview";
import HobbiesPreview from "./HobbiesPreview";

export default function SidebarPreview({state}) {
    return (
        <div className="SidebarPreview">
            <ContactInformationsPreview state={state}/>
            <SkillsPreview state={state} />
            <LanguagesPreview state={state} />
            <HobbiesPreview state={state} />
        </div>
    )
}