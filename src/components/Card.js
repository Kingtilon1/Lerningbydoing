import star from '../images/Star.png'
export default function Card(props) {
    return (
        <div className = "card">
            <img src = {props.image} alt = "female swimmer" className = "image"/>
            <div className = "cardstats"> 
                <span><img src = {star} alt = "star" className = "star"/></span>
                <span>{props.rating}</span>
                <span className = "gray">({props.reviewcount}) • </span>
                <span className = "gray"> USA</span>
            </div>
            <h2>{props.description}</h2>
            <p> <b>From {props.price}</b> / person</p>
        </div>
    )
}
