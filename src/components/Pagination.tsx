import {useSwiper} from 'swiper/react';
import chevronLeft from '../assets/images/chevron-left.svg';
import chevronRight from '../assets/images/chevron-right.svg';

const Pagination = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="pagination">
        <button
          className="text-base text-blue2 flex items-center gap-[1vw] bg-blue4 rounded-[1vw] px-[1vw] py-[1vh]"
          onClick={() => swiper.slidePrev()}
        >
          <img src={chevronRight} alt="" /> Indietro
        </button>
        <button
          className="text-base text-blue2 flex items-center gap-[1vw] bg-blue4 rounded-[1vw] px-[1vw] py-[1vh]"
          onClick={() => swiper.slideNext()}
        >
          Avanti
          <img src={chevronLeft} alt="" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
