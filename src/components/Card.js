import star from '../images/Star.png'
export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className = "card">
            <div className = "imagesection">
                {badgeText && <div className= "status">{badgeText}</div>} 
                <img src = {props.image} alt = "female swimmer" className = "image"/>
            </div>
            <div className = "cardstats"> 
                <span><img src = {star} alt = "star" className = "star"/></span>
                <span>{props.rating}</span>
                <span className = "gray">({props.reviewcount}) • </span>
                <span className = "gray"> {props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p> <b>From {props.price}</b> / person</p>
        </div>
    )
}
