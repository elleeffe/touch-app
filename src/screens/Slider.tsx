import {Swiper, SwiperSlide} from 'swiper/react';
import Pagination from '../components/Pagination';
import texture from '../assets/images/texture.svg';
import Slide from '../components/Slide';
import {slides} from '../config/slides';

const Slider = ({
  mediaCount,
  onChangeSlide,
  onSelectSlide,
  initialIndex,
}: {
  mediaCount: number;
  onChangeSlide: (slide: SlideType) => void;
  onSelectSlide: () => void;
  initialIndex: number;
}) => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="header">
        <img src={texture} alt="texture" className="img-left" />
        <p className="title">
          <strong className="uppercase">Masterclass immersiva: </strong>
          Dall’infiammazione alla gestione del paziente con DMR E RVO
        </p>
        <img src={texture} alt="texture" className="img-right" />
      </div>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        className="w-full flex-1"
        simulateTouch={false}
        onSlideChange={({activeIndex}) => onChangeSlide(slides[activeIndex])}
        initialSlide={initialIndex}
      >
        {slides.map((el, i) => (
          <SwiperSlide key={`slide-${i}`}>
            <Slide slide={el} />
          </SwiperSlide>
        ))}
        <Pagination onSelect={onSelectSlide} mediaCount={mediaCount} />
      </Swiper>
      <div className="footer" />
    </div>
  );
};

export default Slider;
