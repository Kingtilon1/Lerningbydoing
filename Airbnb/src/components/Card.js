import star from '../images/Star.png'
export default function Card(props) {
    let badgeText
    if (props.data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.data.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className = "card">
            <div className = "imagesection">
                {badgeText && <div className= "status">{badgeText}</div>} 
                <img src = {props.data.image} alt = "female swimmer" className = "image"/>
            </div>
            <div className = "cardstats"> 
                <span><img src = {star} alt = "star" className = "star"/></span>
                <span>{props.data.stats.rating}</span>
                <span className = "gray">({props.data.stats.reviewcount}) • </span>
                <span className = "gray"> {props.data.location}</span>
            </div>
            <h2>{props.data.title}</h2>
            <p> <b>From {props.data.price}</b> / person</p>
        </div>
    )
}
