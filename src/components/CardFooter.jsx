import twitterIcon from "../assets/images/icon-twitter.png"
import facebookIcon from "../assets/images/icon-facebook.png"
import instagramIcon from "../assets/images/icon-instagram.png"
import githubIcon from  "../assets/images/icon-github.png"
import linkedinIcon from  "../assets/images/icon-linkedin.png"




const CardFooter  = ()=>{
    return(
        <div className="card--footer">
            <img src={twitterIcon} alt="twitter"/>
            <img src={facebookIcon} alt="facebook"/>
            <img src={instagramIcon} alt="instagram"/>
            <img src={linkedinIcon} alt="linkedin"/>
            <img src={githubIcon} alt="github"/>
        </div>
    )
}
export default CardFooter