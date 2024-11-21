// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
import PreHeader from "./components/PreHeader/PreHeader";
// import Header from "./components/Header/Header";
// import Coffe from "./components/CoffeCarts/CoffeCarts";
// import HeroSwiper from "./components/HeroSwiper/HeroSwiper";
// import AfterHeader from "./components/AfterHeader/AfterHeader";
// import CoffeShops from "./components/CoffeShops/CoffeShops";
// import Banner from "./components/Banner/Banner";
// import MenuFood from "./components/MenuFood/MenuFood";
// import Team from "./components/Team/Team";
import BlogPost from "./components/BlogPost/BlogPost";
import BaristaSchool from "./components/BaristaSchool/BaristaSchool";

function App() {
	return (
		<>
			<PreHeader />
			{/* <Header />
			<HeroSwiper />
			<AfterHeader />
			<Banner />
			<CoffeShops />
			<Coffe />
			<MenuFood />
			<Team /> */}
			<BlogPost />
			<BaristaSchool />
		</>
	);
}

export default App;
