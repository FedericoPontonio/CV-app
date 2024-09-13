export default function DownloadCv() {
    return (
        <div className="DownloadCv">
            <button className="printButton" onClick={()=>{window.print()}}>Print CV</button>
        </div>
    )
}