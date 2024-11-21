import styles from "./BlogPost.module.scss";
import BlogPosts from "../BlogPosts/BlogPosts";

const blogPosts = [
	{
		image: "/src/assets/blog-posts/1.png",
		date: "November 1, 2022",
		title: "Make sure your coffee is as fresh as it can be.",
	},
	{
		image: "/src/assets/blog-posts/2.png",
		date: "November 2, 2022",
		title: "The Best Coffee Advent Calendars of this year",
	},
	{
		image: "/src/assets/blog-posts/3.png",
		date: "November 2, 2022",
		title: "The Most Common Way People Drink Noir Café",
	},
	{
		image: "/src/assets/blog-posts/4.png",
		date: "November 2, 2022",
		title: "Coffee Beans Prepared In Four Different Ways",
	},
	{
		image: "/src/assets/blog-posts/5.png",
		date: "November 2, 2022",
		title: "The Baristan Kettle is a Beacon for Preparation",
	},
	{
		image: "/src/assets/blog-posts/6.png",
		date: "November 2, 2022",
		title: "The World’s Best Coffee Tours: Brasil, Columbi",
	},
];

function BlogPost() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.titlewrapper}>
				<h2 className={styles.title}>
					Recent blog <br /> posts Explore
					<span className={styles.undertitle}>now</span>
				</h2>
				<button className={styles.button}>read all news</button>
			</div>
			<div>
				{blogPosts.map((item, i) => {
					return <BlogPosts key={i} content={item} />;
				})}
			</div>
		</div>
	);
}

export default BlogPost;
