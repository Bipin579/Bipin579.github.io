
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      {/* <h1 style={{ fontWeight: "bold", color: "red" }}>Hey there Welcome i am coming soon....</h1> */}
      <Navbar />
      <Hero />
      
    </div>
  );
}

export default App;
