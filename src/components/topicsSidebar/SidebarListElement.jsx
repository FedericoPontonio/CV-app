

export default function SidebarListElement({ text, setActiveTopic }) {
    const elementstyle = {
        borderLeft: 'solid black 2px',
        paddingLeft: '10px',
        listStyleType: 'none',
        fontWeight: 'bold',
        cursor: 'pointer'
    };

    return (
        <li style={elementstyle} onClick={() => setActiveTopic(text)}>
            {text}
        </li>
    );
}