import classNames from 'classnames';

const Slide = ({slide: {title, content, media}}: {slide: SlideType}) => {
  return (
    <div
      className={classNames([
        'w-full h-full flex px-[4vw] pt-[4vh] pb-[16vh] bg-white',
        media.length === 2 && 'flex-col',
      ])}
    >
      <div className="w-3/5 pr-[4vw]">
        <h1 className="text-xl text-blue2">{title}</h1>
        <p className="text-sm font-light font-gothamLight">{content}</p>
      </div>
      <div
        className={classNames([
          media.length === 2
            ? 'flex flex-1 gap-[1vw] mt-[2vh]'
            : 'h-full w-2/5',
        ])}
      >
        {media.map((m, i) => (
          <div
            style={{backgroundImage: `url(${m.src})`}}
            key={m.id}
            className="w-full h-full bg-cover bg-center rounded-[2vw]"
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;
