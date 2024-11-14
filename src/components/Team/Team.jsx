import styles from './Team.module.scss'
import TeamCards from '../TeamCards/TeamCards'

const teamCards = [
	{
		image: '/src/assets/team-cards/1.png',
		title: 'Uma Clark',
		description: 'Manager'
	},
	{
		image: '/src/assets/team-cards/2.png',
		title: 'Tom Splinder',
		description: 'Manager'
	},
	{
		image: '/src/assets/team-cards/3.png',
		title: 'Jonas Hanks',
		description: 'Pastry Chef'
	},
	{
		image: '/src/assets/team-cards/4.png',
		title: 'Laura Simons',
		description: 'Media manager'
	},
	{
		image: '/src/assets/team-cards/5.png',
		title: 'Ed Morris',
		description: 'Chef'
	},
	{
		image: '/src/assets/team-cards/6.png',
		title: 'Rita Flams',
		description: 'Sales person'
	},
]


function Team() {
	return (
			<div>
					<h2 className={styles.title}>Our Awesome Team</h2>
					<div className={styles.wrapper}>
					{
						teamCards.map((item, i) => {
							return (
								<TeamCards key={i} content={item}/>
							)
						})
					}
					</div>
			</div>
	)
}

export default Team;