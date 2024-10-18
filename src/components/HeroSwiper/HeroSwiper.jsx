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
			// mousewheel={true}
			slidesPerView={1}
		>
			<SwiperSlide>
				<div className={styles.wrapper}> 
					<div>
						<img className={styles.image} src="/src/assets/hero-img.png" alt="Coffe and juice" />
					</div>
					<div className={styles.info}>
						<h1 className={styles.title}>enjoy <br /> life sip <br /> by sip</h1>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className={styles.wrapper}> 
					<div className={styles.image}>
					<img className={styles.image} src="/src/assets/slider-2.jpg" alt="Coffe and juice" />
					</div>
					<div className={styles.info}>
						<h1 className={styles.title}>your <br /> best of <br /> choice</h1>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
			<div className={styles.wrapper}> 
					<div className={styles.image}>
					<img className={styles.image} src="/src/assets/slider-3.jpg" alt="Coffe and juice" />
					</div>
					<div className={styles.info}>
						<h1 className={styles.title}>For your <br /> work <br /> flow</h1>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	)
}

export default HeroSwiper