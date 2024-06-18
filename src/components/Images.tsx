import {Swiper, SwiperSlide} from 'swiper/react';
import {slides} from '../config/slides';
import {FreeMode} from 'swiper/modules';
import classNames from 'classnames';

const Images = ({
  isOpen,
  onSelect,
}: {
  isOpen: boolean;
  onSelect: (img: string) => void;
}) => {
  const elements = slides.map(({media}) => media).flat();

  return (
    <Swiper
      direction={'vertical'}
      freeMode
      navigation
      pagination={{clickable: false}}
      className={classNames([
        'w-[50vw] h-screen fixed top-0 right-0 bg-white z-20 ease-in-out',
        isOpen === false && 'translate-x-full',
      ])}
      modules={[FreeMode]}
      slidesPerView={'auto'}
    >
      {elements.map((el, i) => (
        <SwiperSlide
          key={`image-slide-${i}`}
          className="flex items-center justify-center w-full h-[40vh] px-[20vh] mt-[1vh]"
        >
          <div
            style={{backgroundImage: `url(${el})`}}
            key={`media-${i}`}
            className="w-full h-full bg-cover bg-center rounded-[2vw]"
            onClick={() => onSelect(el)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Images;
