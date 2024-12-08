import styles from "./FollowUs.module.scss";

const suppliesItems = [
	"/src/assets/follow-us/1.png",
	"/src/assets/follow-us/2.png",
	"/src/assets/follow-us/3.png",
	"/src/assets/follow-us/4.png",
	"/src/assets/follow-us/5.png",
	"/src/assets/follow-us/6.png",
	"/src/assets/follow-us/7.png",
	"/src/assets/follow-us/8.png",
	"/src/assets/follow-us/9.png",
	"/src/assets/follow-us/10.png",
];

function FollowUs() {
	return (
		<div>
			<h1 className={styles.title}>Follow Us For More</h1>
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

export default FollowUs;
