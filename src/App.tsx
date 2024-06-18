import {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Pagination from './components/Pagination';
import {slides} from './config/slides';
import texture from './assets/images/texture.svg';
import Slide from './components/Slide';

function App() {
  const [slide, setSlide] = useState<SlideType>();

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
      >
        {slides.map((el, i) => (
          <SwiperSlide key={`slide-${i}`}>
            <Slide slide={el} onExpand={() => setSlide(el)} />
          </SwiperSlide>
        ))}
        <Pagination />
      </Swiper>
      <div className="footer" />
    </div>
  );
}

export default App;
