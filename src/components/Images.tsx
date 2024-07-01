import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode} from 'swiper/modules';
import classNames from 'classnames';
import close from '../assets/images/close.svg';

type Props = {
  isOpen: boolean;
  onSelect: (img: Media) => void;
  onClose: () => void;
  position: Position;
  images: Media[];
};

const Images = ({isOpen, onSelect, onClose, position, images}: Props) => {
  return (
    <div
      className={classNames([
        'w-[50vw] h-screen fixed top-0 bg-white z-20 ease-in-out',
        isOpen === false && position === 'left' && '-translate-x-full',
        isOpen === false && position === 'right' && 'translate-x-full',
        position === 'right' ? 'right-0' : 'left-0',
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
        {images.map((el, i) => (
          <SwiperSlide
            key={`image-slide-${i}-${position}`}
            className="flex items-center justify-center w-full h-[40vh] px-[20vh] mt-[1vh]"
          >
            <div
              style={{backgroundImage: `url(${el.src})`}}
              key={`menu-${el.id}`}
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
