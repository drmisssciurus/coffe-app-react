import styles from './MenuFood.module.scss';
import menuFood from '/src/assets/menu-food.svg';

const foodElements = [
	{
		title: 'Delivery',
		deckription: 'Vivamus hendrerit at sapien nec mattis. Quisque quis arcu'
	},
	{
		title: 'Wholesale',
		deckription: 'Pellentesque in tempor lorem, vel porttitor est.'
	},
	{
		title: 'Consistency',
		deckription: 'Aliquam ut arcu sodales, gravida quam vitae.'
	},
	{
		title: 'Quality',
		deckription: 'Nam at sapien ligula. Morbi maximus scelerisque mi sed.'
	},
]

function MenuFood() {
	return (
		<div className={styles.container}>
			<div>
				<h2 className={styles.title}>swing by our place we also have food.</h2>
				<img className={styles.image} src={menuFood} alt="" />
			</div>
			<div className={styles.wrapper}>
				<ul>
					{
						foodElements.map((item, i) => {
							return (
								<>
									<li 
										className={styles.item}  
										key={i}
									>
										<div>
											<h3>{item.title}</h3>
											<p>{item.deckription}</p>
										</div>
										<button className={styles.button}>view more</button>
									</li>
								</>
							)
						})
					}
				</ul>
			</div>
		</div>
	)
}

export default MenuFood;