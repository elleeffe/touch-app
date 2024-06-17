import {useSwiper} from 'swiper/react';

const Pagination = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className="pagination">
        <button className="text-base" onClick={() => swiper.slidePrev()}>
          Indietro
        </button>
        <button className="text-base" onClick={() => swiper.slideNext()}>
          Avanti
        </button>
      </div>
    </>
  );
};

export default Pagination;
