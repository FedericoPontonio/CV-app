
export default function DownloadCv() {
    return (
        <div className="DownloadCv">
            <h2>Download your CV</h2>
            <img alt="download icon" src="../../../images/download.jpg"></img>
            <button className="printButton" onClick={()=>{window.print()}}>DOWNLOAD</button>
        </div>
    )
}