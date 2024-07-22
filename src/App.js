import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import swimmer from './images/swimmer.png'
import wedding from './images/wedding.png'
import bike from './images/bike.jpg'
function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className = "cards">
        <Card
        image = {swimmer}
        rating = "5.0"
        reviewcount = "6"
        description = "Life lessons with Katie Zaferes"
        price = "$136"
        />
        <Card
        image = {wedding}
        rating = "5.0"
        reviewcount = "30"
        description = "Learn wedding photography"
        price = "$125"
        />
        <Card
        image = {bike}
        rating = "4.8"
        reviewcount = "2"
        description = "Group Mountain Biking"
        price = "$50"
        />
       </div>
    </div>
  );
}

export default App;