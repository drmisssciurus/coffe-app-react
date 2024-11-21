import styles from "./TrustedSupplies.module.scss";

const suppliesItems = [
	"/src/assets/supplies/1.png",
	"/src/assets/supplies/2.png",
	"/src/assets/supplies/3.png",
	"/src/assets/supplies/4.png",
	"/src/assets/supplies/5.png",
];

function TrustedSupplies() {
	return (
		<div>
			<h1 className={styles.title}>our trusted supplies</h1>
			<ul className={styles.wrapper}>
				{suppliesItems.map((item, i) => {
					return (
						<li className={styles.item} key={i}>
							<a href="#">
								<img src={item} alt="" />
							</a>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default TrustedSupplies;
