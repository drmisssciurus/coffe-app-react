// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.scss'
import PreHeader from './components/PreHeader/PreHeader';
import Header from './components/Header/Header';
import HeroSwiper from './components/HeroSwiper/HeroSwiper';
import AfterHeader from './components/AfterHeader/AfterHeader';

function App() {

  return (
    <>
      <PreHeader />
			<Header />
			<HeroSwiper />
			<AfterHeader />
    </>
  )
} 

export default App;