import CardImg from "./components/cardImg"
import CardInfo from "./components/CardInfo"
import CardContent from "./components/CardContent"
import CardFooter from "./components/CardFooter"
CardFooter
const Card = ()=>{
    return(
        <div className="card" >
            <CardImg/>
            <div className="card--body">
                <CardInfo/>
                <CardContent/>
            </div>
            <CardFooter/>
        </div>
    )
}
export default Card