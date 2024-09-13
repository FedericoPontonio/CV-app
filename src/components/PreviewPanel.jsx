import Header from "./previewComponents/Header";
import MainSectionPreview from "./previewComponents/mainSectionComponents/MainSectionPreview";
import SidebarPreview from "./sidebarPreviewComponents/SidebarPreview";
import "../styles/PreviewPanel.css"

export default function PreviewPanel({state}) {
    return (
        <div className="PreviewPanel">
            <Header state={state} />
            <MainSectionPreview state={state} />
            <SidebarPreview state={state} />
        </div>
    )
}