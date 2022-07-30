import RendCard from "./components/CardRend/RendCard";
import Nav from "./components/Nav/Nav";
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  
  return (
    <div className='App'> 
      <header className="App-header">
       <Nav/>
      </header>
    <RendCard/>
    <Footer/>
    </div>
  );
}

export default App;
