import close from '../assets/images/close.svg';
import change from '../assets/images/image.svg';
import expand from '../assets/images/expand.svg';
import compare from '../assets/images/compare.svg';
import Touchable from './Touchable';

type Props = {
  leftImage?: Media;
  rightImage?: Media;
  onClose: () => void;
  onChangeRight: () => void;
  onChangeLeft: () => void;
  onExpand: (media: Media) => void;
};

const TouchArea = ({
  leftImage,
  rightImage,
  onClose,
  onChangeRight,
  onChangeLeft,
  onExpand,
}: Props) => {
  return (
    <div className="h-screen w-screen flex gap-[1vh] p-[1vh] relative">
      <button
        className="absolute top-[2vh] left-[2vh] bg-white p-[2vh] rounded-[2vh] z-10"
        onClick={onClose}
      >
        <img src={close} alt="close" className="w-[2vh]" />
      </button>
      {leftImage && (
        <Touchable
          isFull={rightImage === undefined}
          imgSrc={leftImage.src}
          key={leftImage.id}
        >
          {rightImage !== undefined && (
            <button
              className="absolute top-[1vh] right-[15vh] bg-white p-[2vh] rounded-[2vh] z-10"
              onClick={() => onExpand(leftImage)}
            >
              <img src={expand} alt="expand" className="w-[2vh]" />
            </button>
          )}
          {rightImage === undefined && (
            <button
              className="absolute top-[1vh] right-[15vh] bg-white p-[2vh] rounded-[2vh] z-10"
              onClick={onChangeRight}
            >
              <img src={compare} alt="compare" className="w-[2vh]" />
            </button>
          )}
          <button
            className="absolute top-[1vh] right-[8vh] bg-white p-[2vh] rounded-[2vh] z-10"
            onClick={onChangeLeft}
          >
            <img src={change} alt="change" className="w-[2vh]" />
          </button>
        </Touchable>
      )}
      {rightImage && (
        <Touchable isFull={false} imgSrc={rightImage.src} key={rightImage.id}>
          <button
            className="absolute top-[1vh] right-[15vh] bg-white p-[2vh] rounded-[2vh] z-10"
            onClick={() => onExpand(rightImage)}
          >
            <img src={expand} alt="expand" className="w-[2vh]" />
          </button>
          <button
            className="absolute top-[1vh] right-[8vh] bg-white p-[2vh] rounded-[2vh] z-10"
            onClick={onChangeRight}
          >
            <img src={change} alt="change" className="w-[2vh]" />
          </button>
        </Touchable>
      )}
    </div>
  );
};

export default TouchArea;
