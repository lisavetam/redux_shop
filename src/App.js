
import './App.css';
import Cart from './Components/Cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCatagories from './Components/Filter/AllCategories';

function App() {
  return (
    <div className="App">
      <div className='block'>
      <AllCatagories/>
      <Cart/>
      </div>
      <div className='block'>
     <Dishes/>
   </div>
    </div>
  );
}

export default App;
