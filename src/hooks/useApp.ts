import {useCallback, useMemo, useRef, useState} from 'react';
import {slides} from '../config/slides';

const useApp = () => {
  const [step, setStep] = useState<Step>();
  const [slide, setSlide] = useState<SlideType>(slides[0]);
  const [leftImage, setLeftImage] = useState<Media>(slides[0].media[0]);
  const [rightImage, setRightImage] = useState<Media | undefined>();
  const [menuLeftOpened, setMenuLeftOpened] = useState<boolean>(false);
  const [menuRightOpened, setMenuRightOpened] = useState<boolean>(false);

  const wrapRef = useRef<HTMLDivElement>(null);

  const handleStart = useCallback(() => {
    if (wrapRef.current) {
      wrapRef.current
        .requestFullscreen()
        .then(() => setStep('slide'))
        .catch(() => alert('not supported'));
    }
    setStep('slide');
  }, []);

  const handleImage = useCallback((position: Position, image: Media) => {
    if (position === 'left') {
      setMenuLeftOpened(false);
      setLeftImage(image);
      return;
    }

    setMenuRightOpened(false);
    setRightImage(image);
  }, []);

  const handleChangeSlide = useCallback(
    (slide: SlideType) => {
      setSlide(slide);
      setLeftImage(slide.media[0]);
      if (rightImage) {
        setRightImage(undefined);
      }
    },
    [rightImage]
  );

  const handleSelectSlide = useCallback(() => {
    setStep('touch');
    if (slide.media.length === 2) {
      setRightImage(slide.media[1]);
    }
  }, [slide.media]);

  const handleClose = useCallback(() => {
    setStep('slide');
    setLeftImage(slide.media[0]);
    setRightImage(undefined);
    setMenuRightOpened(false);
    setMenuLeftOpened(false);
  }, [slide.media]);

  const images = useMemo(
    () =>
      slides
        .map((s) => s.media)
        .flat()
        .filter((m) => m.id !== rightImage?.id && m.id !== leftImage.id),
    [rightImage, leftImage]
  );

  return {
    step,
    slide,
    leftImage,
    setLeftImage,
    rightImage,
    setRightImage,
    menuLeftOpened,
    setMenuLeftOpened,
    menuRightOpened,
    setMenuRightOpened,
    wrapRef,
    handleStart,
    handleImage,
    handleChangeSlide,
    handleSelectSlide,
    handleClose,
    images,
  };
};

export default useApp;
