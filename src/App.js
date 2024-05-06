import './App.css';
import BookDisplay from './Components/Book Display/BookDisplay';
import Header from './Components/Header/Header';
import HomePage from './Components/Home Page/HomePage';
import HomeLoader from './Components/Loader/Home Loader/HomeLoader';
import StoreLoader from './Components/Loader/Store Loader/StoreLoader';
import Routing from './Routing';

function App() {
  return (
    <div>
      {/* <Header/> */}
      {/* <HomePage/> */}
      <Routing/>
      {/* <HomeLoader/> */}
      {/* <StoreLoader/> */}
      {/* <BookDisplay/> */}
    </div>
  );
}

export default App;
