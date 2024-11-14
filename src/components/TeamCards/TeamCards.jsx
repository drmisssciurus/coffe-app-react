import PropTypes from 'prop-types';
import styles from './TeamCards.module.scss';


function TeamCards({content}) {
	return (
			<div className={styles.wrapper}>
				<img className={styles.image} src={content.image} alt="" />
				<h1 className={styles.title}>{content.title}</h1>
				<p className={styles.description}>{content.description}</p>
			</div>
	)
}

TeamCards.propTypes = {content: PropTypes.object};
export default TeamCards;
