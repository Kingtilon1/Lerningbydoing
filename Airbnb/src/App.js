import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import info from './data.js'
function App() {
  const carddata = info.map(data =>{
    return(
      <Card 
      key = {data.id}
      data = {data}
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