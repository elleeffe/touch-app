import {useSwiper} from 'swiper/react';
import chevronLeft from '../assets/images/chevron-left.svg';
import chevronRight from '../assets/images/chevron-right.svg';
import zoomIn from '../assets/images/zoom-in.svg';
import expand from '../assets/images/expand.svg';

const Pagination = ({
  onSelect,
  mediaCount,
}: {
  onSelect: () => void;
  mediaCount: number;
}) => {
  const swiper = useSwiper();

  return (
    <>
      <div className="pagination">
        <button
          className="text-base text-blue2 flex items-center gap-[1vw] bg-blue4 rounded-[1vw] px-[1.5vw] py-[1.5vh]"
          onClick={() => swiper.slidePrev()}
        >
          <img src={chevronRight} alt="" className="h-[3vh]" /> Indietro
        </button>
        <button
          className="text-base text-white flex items-center gap-[1vw] bg-blue2 rounded-[1vw] px-[1.5vw] py-[1.5vh]"
          onClick={onSelect}
        >
          {mediaCount === 1 ? (
            <>
              Apri immagine
              <img src={zoomIn} alt="" className="h-[3vh]" />
            </>
          ) : (
            <>
              Confronta immagini
              <img src={expand} alt="" className="h-[3vh]" />
            </>
          )}
        </button>
        <button
          className="text-base text-blue2 flex items-center gap-[1vw] bg-blue4 rounded-[1vw] px-[1.5vw] py-[1.5vh]"
          onClick={() => swiper.slideNext()}
        >
          Avanti
          <img src={chevronLeft} alt="" className="h-[3vh]" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
