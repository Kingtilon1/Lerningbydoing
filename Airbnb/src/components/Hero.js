
import headerimg from '../images/Group77.png'

export default function Hero() {
    return(
        <section className = "hero">
            <img src = {headerimg} className = "heroimg" alt = "Headerimage"/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}