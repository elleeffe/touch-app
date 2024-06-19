import classNames from 'classnames';
import {useRef} from 'react';
import QuickPinchZoom, {
  make2dTransformValue,
  make3dTransformValue,
  hasTranslate3DSupport,
} from 'react-quick-pinch-zoom';

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const use3DTransform = hasTranslate3DSupport() && !isSafari;

const makeTransformValue = use3DTransform
  ? make3dTransformValue
  : make2dTransformValue;

const Touchable = ({isFull, imgSrc}: {isFull: boolean; imgSrc: string}) => {
  const ref = useRef<HTMLImageElement>(null);
  const onUpdate = ({x, y, scale}: {x: number; y: number; scale: number}) => {
    if (ref.current) {
      const value = makeTransformValue({x, y, scale});

      ref.current.style.setProperty('transform', value);
    }
  };

  const toggleWillChange = () => {
    if (ref.current) {
      requestAnimationFrame(() => {
        ref.current!.style.setProperty('will-change', 'auto');

        requestAnimationFrame(() => {
          ref.current!.style.setProperty('will-change', 'transform');
        });
      });
    }
  };

  return (
    <div
      className={classNames([
        'h-full rounded-[2vh] overflow-hidden',
        isFull ? 'w-full' : 'w-1/2',
      ])}
    >
      <QuickPinchZoom
        containerProps={{className: 'h-full'}}
        onZoomEnd={toggleWillChange}
        onDragEnd={toggleWillChange}
        onUpdate={onUpdate}
      >
        <img ref={ref} alt="" src={imgSrc} />
      </QuickPinchZoom>
    </div>
  );
};

export default Touchable;
