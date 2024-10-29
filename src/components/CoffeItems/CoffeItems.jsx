import PropTypes from 'prop-types';
import styles from './CoffeItems.module.scss';


function CoffeItems({content}) {
	return (
		<div className={styles.wrapper}>
			<div>
				<img className={styles.image} src={content.image} alt="" />
			</div>
			<div className={styles.information}>
					<h1 className={styles.title}>{content.title}</h1>
					<p className={styles.price}>${content.price}</p>
			</div>
		</div>
	)
}

CoffeItems.propTypes = {content: PropTypes.object};
export default CoffeItems;
