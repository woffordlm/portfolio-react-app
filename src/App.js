import './App.css';
import About from './components/About/About';
import Footer from './components/footer';
import Nav from './components/header';
import Hero from './components/hero/hero';
import Work from './components/work/Work'
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <About></About>
      <Work></Work>
      <Footer></Footer>
    </div>
  );
}

export default App;
