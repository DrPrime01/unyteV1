import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../assets/styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import PropTypes from "prop-types";

function TestimonialSwiper({ slides, slidesPerView }) {
	const swiperRef = useRef(null);

	const [disablePrev, setDisablePrev] = useState(true);
	const [disableNext, setDisableNext] = useState(false);

	const handlePrev = () => {
		swiperRef.current?.slidePrev();
		setDisablePrev(true);
		setDisableNext(false);
	};

	const handleNext = () => {
		swiperRef.current?.slideNext();
		setDisableNext(true);
		setDisablePrev(false);
	};

	return (
		<>
			<Swiper
				ref={swiperRef}
				slidesPerView={slidesPerView}
				spaceBetween={30}
				onBeforeInit={(swiper) => {
					swiperRef.current = swiper;
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				{slides.map((slide, index) => {
					return <SwiperSlide key={index}>{slide}</SwiperSlide>;
				})}
			</Swiper>
			{slides?.length > 3 && (
				<div className="flex justify-center items-center gap-x-4 mt-16 mx-20">
					<button
						disabled={disablePrev}
						className="flex items-center justify-center rounded-full p-2 bg-[#F4F4F4] text-2xl"
						onClick={handlePrev}
					>
						<FaArrowLeft className="text-sm" />
					</button>
					<button
						disabled={disableNext}
						className="flex items-center justify-center rounded-full p-2 bg-[#F4F4F4] text-2xl"
						onClick={handleNext}
					>
						<FaArrowRight className="text-sm" />
					</button>
				</div>
			)}
		</>
	);
}

TestimonialSwiper.propTypes = {
	slides: PropTypes.array.isRequired,
	slidesPerView: PropTypes.number.isRequired,
};

export default TestimonialSwiper;
