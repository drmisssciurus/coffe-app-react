import styles from './AfterHeader.module.scss'


const text = [
	'fairtrade',
	'Organic',
	'Climate neutral'
]

function AfterHeader() {
	return (
		<div className={styles.wrapper}>
			{
				text.map((item, i) => {
					return (
						<div 
							className={styles.text} 
							key={i}
						> 						
							{item} 
						
						{ i }
						</div>
					);
				})
			}
		</div>
	)
}

export default AfterHeader
