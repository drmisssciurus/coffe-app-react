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
			<div className={styles.banner}>
				<h2 className={styles.title}>swing by our place <br/> we also have food.</h2>
				<img className={styles.image} src={menuFood} alt="" />
			</div>
			<div className={styles.food}>
				<ul className={styles.wrapper}>
					{
						foodElements.map((item, i) => {
							return (
								<>
									<li 
										className={styles.item}  
										key={i}
									>
										<div>
											<h3 className={styles.titles}>{item.title}</h3>
											<p className={styles.deckription}>{item.deckription}</p>
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