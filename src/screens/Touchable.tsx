import classNames from 'classnames';
import {useEffect, useRef} from 'react';
import QuickPinchZoom, {
  make2dTransformValue,
  make3dTransformValue,
  hasTranslate3DSupport,
} from 'react-quick-pinch-zoom';

import {useSpring, animated} from '@react-spring/web';
import {createUseGesture, dragAction, pinchAction} from '@use-gesture/react';

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const use3DTransform = hasTranslate3DSupport() && !isSafari;

const makeTransformValue = use3DTransform
  ? make3dTransformValue
  : make2dTransformValue;

type Props = {isFull: boolean; imgSrc: string};

const Touchable = ({isFull, imgSrc}: Props) => {
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
        tapZoomFactor={0.5}
      >
        <img ref={ref} alt="" src={imgSrc} />
      </QuickPinchZoom>
    </div>
  );
};

export default Touchable;

const useGesture = createUseGesture([dragAction, pinchAction]);

export const Touchable2 = ({isFull, imgSrc}: Props) => {
  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotateZ: 0,
  }));
  const ref = useRef<HTMLDivElement>(null);

  useGesture(
    {
      // onHover: ({ active, event }) => console.log('hover', event, active),
      // onMove: ({ event }) => console.log('move', event),
      onDrag: ({pinching, cancel, offset: [x, y], ...rest}) => {
        if (pinching) {
          return cancel();
        }
        api.start({x, y});
      },
      onPinch: ({
        origin: [ox, oy],
        first,
        movement: [ms],
        offset: [s, a],
        memo,
      }) => {
        if (first) {
          const {width, height, x, y} = ref.current!.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }

        const x = memo[0] - (ms - 1) * memo[2];
        const y = memo[1] - (ms - 1) * memo[3];
        api.start({scale: s, rotateZ: a, x, y});
        return memo;
      },
    },
    {
      target: ref,
      drag: {from: () => [style.x.get(), style.y.get()]},
      pinch: {scaleBounds: {min: 0.5, max: 2}, rubberband: true},
    }
  );

  useEffect(() => {
    const handler = (e: Event) => e.preventDefault();
    document.addEventListener('gesturestart', handler);
    document.addEventListener('gesturechange', handler);
    document.addEventListener('gestureend', handler);
    return () => {
      document.removeEventListener('gesturestart', handler);
      document.removeEventListener('gesturechange', handler);
      document.removeEventListener('gestureend', handler);
    };
  }, []);

  return (
    <div
      className={classNames([
        'h-full rounded-[2vh] overflow-hidden',
        isFull ? 'w-full' : 'w-1/2',
      ])}
    >
      <animated.div
        className="bg-cover bg-center touch-none select-none will-change-transform w-full h-full"
        ref={ref}
        style={{...style, backgroundImage: `url(${imgSrc})`}}
      ></animated.div>
    </div>
  );
};
