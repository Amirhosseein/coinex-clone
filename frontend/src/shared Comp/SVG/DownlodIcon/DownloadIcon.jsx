import "./DownloadIcon.css";

const DownloadIcon = ({light})=>{
    return <svg  className={`DownloadIcon ${light ? "DownloadIcon--light":"DownloadIcon--dark"}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4,20H20a1,1,0,0,1,0,2H4a1,1,0,0,1,0-2ZM12,2a1,1,0,0,0-1,1V14.586L8.707,12.293a1,1,0,1,0-1.414,1.414l4,4a1,1,0,0,0,.325.216.986.986,0,0,0,.764,0,1,1,0,0,0,.325-.216l4-4a1,1,0,0,0-1.414-1.414L13,14.586V3A1,1,0,0,0,12,2Z"/>
    </svg>
};

export default DownloadIcon;