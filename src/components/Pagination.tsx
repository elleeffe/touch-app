import {PropsWithChildren} from 'react';
import {useSwiper} from 'swiper/react';
import chevronLeft from '../assets/images/chevron-left.svg';
import chevronRight from '../assets/images/chevron-right.svg';
import classNames from 'classnames';
import {slides} from '../config/slides';

type Props = PropsWithChildren<{}>;

const Pagination = ({children}: Props) => {
  const swiper = useSwiper();
  return (
    <>
      <div className="pagination">
        <button
          className={classNames([
            'text-base text-blue2 flex items-center gap-[1vw] bg-blue4 rounded-[1vw] px-[1.5vw] py-[1.5vh]',
            swiper.realIndex === 0 && 'opacity-0 cursor-default',
          ])}
          onClick={
            swiper.realIndex === 0 ? undefined : () => swiper.slidePrev()
          }
        >
          <img src={chevronRight} alt="" className="h-[3vh]" /> Indietro
        </button>
        {children}
        <button
          className={classNames([
            'text-base text-blue2 flex items-center gap-[1vw] bg-blue4 rounded-[1vw] px-[1.5vw] py-[1.5vh]',
            swiper.realIndex === slides.length - 1 &&
              'opacity-0 cursor-default',
          ])}
          onClick={
            swiper.realIndex === slides.length - 1
              ? undefined
              : () => swiper.slideNext()
          }
        >
          Avanti
          <img src={chevronLeft} alt="" className="h-[3vh]" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
