import styles from "./BaristaSchool.module.scss";

function BaristaSchool() {
	return (
		<div className={styles.wrapper}>
			<img
				src="/src/assets/barista-school.png"
				alt="One Barista teach another barista"
			/>
			<div className={styles.descriptionwrapper}>
				<h2 className={styles.title}>Barista Schools & Careers</h2>
				<div className={styles.description}>
					<p>
						We host courses covering everything from simple home brewing
						techniques to advanced latte art to allow you to learn the essential
						life skill of how to make truly great coffee.
					</p>
				</div>
				<button className={styles.button}>viev more</button>
			</div>
		</div>
	);
}

export default BaristaSchool;
