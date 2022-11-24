import './App.css';
import About from './components/About/About';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Global from './components/Global/Global';
import Help from './components/Help/Help';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing/Pricing';
import Trusted from './components/Trusted/Trusted';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Features/>
      <Pricing/>
      <Global/>
      <Trusted/>
      <Help/>
      <Footer/>
    </div>
  );
}

export default App;
