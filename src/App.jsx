// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import PreHeader from './components/PreHeader/PreHeader';
import Header from './components/Header/Header';
import Coffe from './components/CoffeCarts/CoffeCarts';

// import HeroSwiper from './components/HeroSwiper/HeroSwiper';
// import AfterHeader from './components/AfterHeader/AfterHeader';
// import CoffeShops from './components/CoffeShops/CoffeShops'
// import Banner from './components/Banner/Banner';

function App() {

  return (
    <>
      <PreHeader />
			<Header />
			<Coffe />
			{/* <CoffeShops />
			<HeroSwiper />
			<AfterHeader />
			<Banner /> */}
    </>
  )
}

export default App;