import PropTypes from "prop-types";
import styles from "./BlogPosts.module.scss";

function BlogPosts({ content }) {
	return (
		<div className={styles.wrapper}>
			<img className={styles.image} src={content.image} alt="" />
			<div className={styles.contentwrapper}>
				<div>
					<p className={styles.date}>{content.date} | cortado</p>
					<h1 className={styles.title}>{content.title}</h1>
				</div>
				<a href="">
					<button className={styles.button}>read more</button>
				</a>
			</div>
		</div>
	);
}

BlogPosts.propTypes = { content: PropTypes.object };
export default BlogPosts;
