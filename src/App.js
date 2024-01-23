
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

// meals list - State management with Context API
import Counter from './components/Counter';
import MealsList from './components/MealsList';

import MealsProvider from './providers/MealsListProvider';

function handleMouseEnter(){
  alert("Side bar entered")
}

function App() {
  return (
    <div className="App">
      <Header/>
      <MealsProvider>
        <MealsList/>
        <Counter/>
      </MealsProvider>
      <hr/>
      <div className='content'>
        <Main heading="The blogger"/>
        <Sidebar contact = "Contact Arola here..." 
        entered={handleMouseEnter}/>
      </div>
      
    </div>
  );
}

export default App;
