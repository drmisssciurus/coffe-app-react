import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './HeroSwiper.module.scss'
import 'swiper/css';
import 'swiper/css/mousewheel';
import { Navigation, Mousewheel } from 'swiper/modules';


function HeroSwiper() {
	return (
		<Swiper 
			navigation={true}
			modules={[Navigation, Mousewheel]}
			className="mySwiper"
			scrollbar={{ draggable: true }}
			mousewheel={true}
			slidesPerView={1}
		>
			{[1, 2, 3, 4, 5, 6].map((_, i) => {
        return (
					<SwiperSlide key={i}>
						<div className={styles.wrapper}> Slide {i + 1} </div>
					</SwiperSlide>
				);
      })}
		</Swiper>
	)
}

export default HeroSwiper