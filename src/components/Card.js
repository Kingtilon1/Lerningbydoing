import swimmer from '../images/swimmer.png'
import star from '../images/Star.png'

export default function Card() {
    return (
        <div className = "card">
            <img src = {swimmer} alt = "female swimmer" className = "swimmer"/>
            <div className = "cardstats"> 
                <span><img src = {star} alt = "star" className = "star"/></span>
                <span>5.0</span>
                <span className = "gray">(6) • </span>
                <span className = "gray"> USA</span>
            </div>
            <h2>Life lessons with Katie Zaferes</h2>
            <p> <b>From $136</b> / person</p>
        </div>
    )
}