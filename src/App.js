
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
        <Main title="The blogger"/>
        <Sidebar contact = "Contact Arola here..."/>
      </div>
      
    </div>
  );
}

export default App;
