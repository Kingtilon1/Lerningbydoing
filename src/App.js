import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import info from './data.js'
function App() {
  const carddata = info.map(data =>{
    return(
      <Card 
      image = {data.image}
      rating = {data.stats.rating}
      reviewcount = {data.stats.reviewcount}
      title = {data.title}
      price = {data.price}
      country = {data.country}
      openSpots = {data.openSpots}
      />
    )
  })

  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className = "cards">
        {carddata}  
      </div>
    </div>
  );
}

export default App;