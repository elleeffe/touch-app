import {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Pagination from './components/Pagination';
import {slides} from './config/slides';
import classNames from 'classnames';
import texture from './assets/images/texture.svg';

function App() {
  const [slide, setSlide] = useState<Slide>();

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
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="w-full flex-1"
      >
        {slides.map((el, i) => (
          <SwiperSlide key={`slide-${i}`}>
            <div
              className={classNames([
                'w-full h-full flex px-[4vw] py-[4vh]',
                el.mediaPosition === 'bottom' && 'flex-col',
              ])}
            >
              <h1 className="text-lg">{el.title}</h1>
              <p className="text-sm">{el.content}</p>
            </div>
          </SwiperSlide>
        ))}
        <Pagination />
      </Swiper>
      <div className="footer" />
    </div>
  );
}

export default App;
