import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./HeroSwiper.module.scss";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import { Navigation, Mousewheel } from "swiper/modules";

const arrContent = [
	{
		image: "hero-img.png",
		title: "enjoy life sip by sip",
		alt: "Coffe and juice",
	},
	{
		image: "slider-2.jpg",
		title: "your best of choice",
		alt: "Coffe and man",
	},
	{
		image: "slider-3.jpg",
		title: "For your work flow",
		alt: "Coffe and work",
	},
];

function HeroSwiper() {
	return (
		<Swiper
			navigation={true}
			modules={[Navigation, Mousewheel]}
			className="heroSwiper"
			scrollbar={{ draggable: true }}
			// mousewheel={true}
			slidesPerView={1}
		>
			{arrContent.map((item, i) => {
				return (
					<SwiperSlide key={i}>
						<div className={styles.wrapper}>
							<div>
								<img
									className={styles.image}
									src={`/src/assets/${item.image}`}
									alt={item.alt}
								/>
							</div>
							<div className={styles.info}>
								<h1 className={styles.title}>{item.title}</h1>
							</div>
						</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}

export default HeroSwiper;
