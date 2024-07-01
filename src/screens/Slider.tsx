import {Swiper, SwiperSlide} from 'swiper/react';
import Pagination from '../components/Pagination';
import texture from '../assets/images/texture.svg';
import Slide from '../components/Slide';
import {slides} from '../config/slides';
import zoomIn from '../assets/images/zoom-in.svg';
import slideCompare from '../assets/images/slide-compare.svg';

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
        pagination={{clickable: true}}
        className="w-full flex-1"
        simulateTouch={false}
        onSlideChange={({activeIndex}) => onChangeSlide(slides[activeIndex])}
        initialSlide={initialIndex}
        allowTouchMove={false}
      >
        {slides.map((el, i) => (
          <SwiperSlide key={`slide-${i}`}>
            <Slide slide={el} />
          </SwiperSlide>
        ))}
        <Pagination>
          <button
            className="text-base text-white flex items-center gap-[1vw] bg-blue2 rounded-[1vw] px-[1.5vw] py-[1.5vh]"
            onClick={onSelectSlide}
          >
            {mediaCount === 1 ? (
              <>
                Apri immagine
                <img src={zoomIn} alt="" className="h-[3vh]" />
              </>
            ) : (
              <>
                Confronta immagini
                <img src={slideCompare} alt="" className="h-[3vh]" />
              </>
            )}
          </button>
        </Pagination>
      </Swiper>
      <div className="footer" />
    </div>
  );
};

export default Slider;
