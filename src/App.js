
import './App.css';
import Navbar from './components/Navbar';
import TravelInfo from './components/TravelInfo';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  const content = TravelInfo.map((item) => {
    return <Hero
    key={item.id}
    {...item}
    // img={item.img}
    // location={item.location}
    // title={item.title}
    // date={item.date}
    // info={item.info} 
    />
  })
  return (
    <div className="App">
      <Navbar />
      {content}
      <Footer />
    </div>
  );
}

export default App;
