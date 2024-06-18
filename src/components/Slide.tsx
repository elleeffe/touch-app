import classNames from 'classnames';

const Slide = ({
  slide: {title, content, media, mediaPosition},
  onExpand,
}: {
  slide: SlideType;
  onExpand: () => void;
}) => {
  return (
    <div
      className={classNames([
        'w-full h-full flex px-[4vw] pt-[4vh] pb-[16vh]',
        mediaPosition === 'bottom' && 'flex-col',
      ])}
    >
      <div className="w-3/5 pr-[4vw]">
        <h1 className="text-xl text-blue2">{title}</h1>
        <p className="text-sm font-light font-gothamLight">{content}</p>
      </div>
      <div
        className={classNames([
          mediaPosition === 'bottom'
            ? 'flex flex-1 gap-[1vw] mt-[2vh]'
            : 'h-full w-2/5',
        ])}
      >
        {media.map((m, i) => (
          <div
            style={{backgroundImage: `url(${m})`}}
            key={`media-${i}`}
            className="w-full h-full bg-cover bg-center rounded-[2vw]"
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;