import close from '../assets/images/close.svg';
import change from '../assets/images/change.svg';
import classNames from 'classnames';

const TouchArea = ({
  leftImage,
  rightImage,
  onClose,
  onChangeImage,
}: {
  leftImage: string;
  rightImage?: string;
  onClose: () => void;
  onChangeImage: () => void;
}) => {
  return (
    <div className="h-screen w-screen flex relative gap-[1vh] p-[1vh]">
      <button
        className="absolute top-[2vh] left-[2vh] bg-white p-[2vh] rounded-[2vh] z-10"
        onClick={onClose}
      >
        <img src={close} alt="close" className="w-[2vh]" />
      </button>
      <button
        className="absolute top-[2vh] right-[2vh] bg-white p-[2vh] rounded-[2vh] z-10"
        onClick={onChangeImage}
      >
        <img src={change} alt="change" className="w-[2vh]" />
      </button>
      <div
        className={classNames([
          'h-full rounded-[2vh] bg-cover bg-center',
          rightImage ? 'w-1/2' : 'w-full',
        ])}
        style={{backgroundImage: `url(${leftImage})`}}
      ></div>
      {rightImage && (
        <div
          className="w-1/2 h-full rounded-[2vh] bg-cover bg-center"
          style={{backgroundImage: `url(${rightImage})`}}
        ></div>
      )}
    </div>
  );
};

export default TouchArea;
