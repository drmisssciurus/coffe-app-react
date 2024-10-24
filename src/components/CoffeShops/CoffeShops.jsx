// import styles from './CoffeShops.module.scss';
import CoffeShop from '../CoffeShop/CoffeShop';

const coffeShopContent = [
	{
		title: 'Lisbon Coffe Salon',
		adress: 'R. Filipe Folque 12A',
		tel: '45234578235608',
		email: 'fgfgh@gmail.com',
		weekdays: '6.45am-3.00pm',
		weekends: '8.30am-4.00pm',
		image: ''
	},
	{
		title: 'Berlin Coffe Roastery',
		adress: 'Markgrafenstraße 34',
		tel: '3487528347052874587',
		email: 'wewe@gmail.com',
		weekdays: '6.45am-3.00pm',
		weekends: '8.30am-4.00pm',
		image: ''
	},
	{
		title: 'Amsterdam Coffe Shop',
		adress: 'Van Ostadestraat 135-97',
		tel: '374659276349',
		email: 'weferf@gmail.com',
		weekdays: '6.45am-3.00pm',
		weekends: '8.30am-4.00pm',
		image: ''
	},
	{
		title: 'Amsterdam Centre Coffe',
		adress: 'Van Ostadestraat 135-97',
		tel: '374650185347',
		email: 'eth6y@gmail.com',
		weekdays: '6.45am-3.00pm',
		weekends: '8.30am-4.00pm',
		image: ''
	}
];

function CoffeShops() {
	return (
		<>
			{
				coffeShopContent.map((item, i) => {
					return (
						<CoffeShop key={i} content={item}/>
					)
				})
			}
		</>
	)
}

export default CoffeShops;