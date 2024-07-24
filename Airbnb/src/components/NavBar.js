import airlogo from '../images/airbnb1.png'


export default function NavBar() {
  return (
    <nav className = "airnav">
      <img src = {airlogo} alt = "Description" className = "airlogo"/>
    </nav>
  );
}
