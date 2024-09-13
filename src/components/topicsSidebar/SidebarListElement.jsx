

export default function SidebarListElement({ text, setActiveTopic, addStyleToActiveLi }) {

    return (
        <li style={addStyleToActiveLi(text)} onClick={() => setActiveTopic(text)}>
            {text}
        </li>
    );
}