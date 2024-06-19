import {Swiper, SwiperSlide} from 'swiper/react';
import {slides} from '../config/slides';
import {FreeMode} from 'swiper/modules';
import classNames from 'classnames';
import close from '../assets/images/close.svg';

const Images = ({
  isOpen,
  onSelect,
  onClose,
}: {
  isOpen: boolean;
  onSelect: (img: string) => void;
  onClose: () => void;
}) => {
  const elements = slides.map(({media}) => media).flat();

  return (
    <div
      className={classNames([
        'w-[50vw] h-screen fixed top-0 right-0 bg-white z-20 ease-in-out',
        isOpen === false && 'translate-x-full',
      ])}
    >
      <button
        className="absolute top-[2vh] left-[1vh] bg-blue4 p-[2vh] rounded-[2vh] z-10"
        onClick={onClose}
      >
        <img src={close} alt="close" className="w-[2vh]" />
      </button>
      <Swiper
        direction={'vertical'}
        freeMode
        navigation
        pagination={{clickable: false}}
        className="w-full h-full"
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
    </div>
  );
};

export default Images;
