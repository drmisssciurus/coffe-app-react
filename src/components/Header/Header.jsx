import styles from './Header.module.scss';
import coffeLogo from '/src/assets/logo.png';
import buttonStar from '/src/assets/star.svg';

const navElements = [
	'Home', 'Pages', 'Shop', 'Blog'
]

function Header() {
	return (
		<header className={styles.header}>
			
			<div>
				<nav>
					<ul className={styles.wrapper}>
						{
							navElements.map((item, i) => {
								return (
									<li 
										className={styles.item}  
										key={i}
									>
										<a href="#">{item}</a>
									</li>
								)
							})
						}
					</ul>
				</nav>
			</div>

			<div className={`${styles.logo} ${styles.wrapper}`}>
				<a href="">
					<img src={coffeLogo} alt="" />
				</a>
			</div>

			<div className={styles.wrapper}>
				<ul className={styles.wrapper}>
					<li className={styles.item}>cart(0)</li>
					<li className={styles.item}>search</li>
				</ul>
				<div>
					<button className={styles.login}>
						<img src={buttonStar} alt="" />
					</button>
				</div>
			</div>
		</header>
	)
}


export default Header;