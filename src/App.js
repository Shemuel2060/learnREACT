
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function handleMouseEnter(){
  alert("Side bar entered")
}

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
        <Main heading="The blogger"/>
        <Sidebar contact = "Contact Arola here..." 
        entered={handleMouseEnter}/>
      </div>
      
    </div>
  );
}

export default App;
