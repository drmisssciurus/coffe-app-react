import CoffeItems from '../CoffeItems/CoffeItems';
import styles from './CoffeCarts.module.scss'

const coffeItems = [
	{
		image: '/src/assets/coffe-arabica.png',
		title: 'FRENCH ROAST',
		price: '37.60'
	},
	{
		image: '/src/assets/coffe-decaf-robusta.png',
		title: 'DECAF ESPRESSO',
		price: '41.00'
	},
	{
		image: '/src/assets/coffe-liberica.png',
		title: 'COSTA RICA',
		price: '36.00'
	},
	{
		image: '/src/assets/coffe-decaf-robusta.png',
		title: 'Decaf French Roast',
		price: '45.00'
	},
];

function CoffeCarts() {
	return (
		<>
			<h1 className={styles.title}>The Coffee that&apos;s right for you</h1>
			<div className={styles.wrapper}>
			{
				coffeItems.map((item, i) => {
					return (
						<CoffeItems key={i} content={item}/>
					)
				})
			}
			</div>
		</>
	)
}

export default CoffeCarts;