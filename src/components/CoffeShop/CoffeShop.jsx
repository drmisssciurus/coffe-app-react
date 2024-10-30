import PropTypes from 'prop-types';
import styles from './CoffeShop.module.scss';


function CoffeShop({content, pipiska, isOpen}) {
	return (
		<div onClick={pipiska}>
			{
				isOpen ? 
				<div className={styles.wrapper}>
				<div>
					<img className={styles.image} src={content.image} alt="" />
				</div>
				<div className={styles.information}>
					<div className={styles.infowrapper}>
						<h1 className={styles.title}>{content.title}</h1>
						<a className={styles.adress}>{content.adress}</a>
						<a className={styles.tel}>{content.tel}</a>
						<a className={styles.email}>{content.email}</a>
					</div>
					<div>
						<p>Mon-Fri..........{content.weekdays}</p>
						<p>Sat-Sun.........{content.weekends}</p>
					</div>
					<button className={styles.button}>Contact us</button>
				</div>
				</div>
				:
				<div>
					<h1 className={styles.maintitle}>{content.title}</h1>
				</div>

			}
			

		</div>
	)
}

CoffeShop.propTypes = {content: PropTypes.object, pipiska: PropTypes.func, isOpen: PropTypes.bool};

export default CoffeShop;
