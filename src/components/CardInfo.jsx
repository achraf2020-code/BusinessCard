import mailIcon from "../assets/images/icon-btn-mail.png" 
const CardInfo = ()=>{
    return(
        <div className="card--info">
            <h1>Laura Smith</h1>
            <h2>Frontend Developer</h2>
            <small><a href="/">laurasmith.website</a></small>
            <button>
                <img src={mailIcon} alt="mail"/>
                Email
            </button>
        </div>
    )
}
export default CardInfo