import {useEffect, useRef, useState} from 'react';
import {slides} from './config/slides';
import TouchArea from './screens/TouchArea';
import Slider from './screens/Slider';
import 'swiper/css';
import Images from './components/Images';

function App() {
  const [step, setStep] = useState<Step>();
  const [slide, setSlide] = useState<SlideType>(slides[0]);
  const [secondImage, setSecondImage] = useState<string>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    if (ref.current) {
      ref.current.requestFullscreen().then(() => setStep('slide'));
    }
  };

  return (
    <div ref={ref} className="bg-white">
      {step === undefined && (
        <div className="flex justify-center items-center w-screen h-screen">
          <button
            className="text-base text-white flex items-center gap-[1vw] bg-blue2 rounded-[1vw] px-[1.5vw] py-[1.5vh]"
            onClick={handleStart}
          >
            Clicca per iniziare
          </button>
        </div>
      )}
      {step === 'slide' && (
        <Slider
          initialIndex={slides.findIndex((el) => el.title === slide.title)}
          mediaCount={slide.media.length}
          onChangeSlide={(slide) => setSlide(slide)}
          onSelectSlide={() => {
            setStep('touch');
            if (slide.media.length === 2) {
              setSecondImage(slide.media[1]);
            }
          }}
        />
      )}
      {step === 'touch' && (
        <TouchArea
          leftImage={slide.media[0]}
          rightImage={secondImage}
          onClose={() => {
            setStep('slide');
            setSecondImage(undefined);
            setIsOpen(false);
          }}
          onChangeImage={() => setIsOpen(true)}
        />
      )}
      <Images
        isOpen={isOpen}
        onSelect={(img) => {
          setIsOpen(false);
          setSecondImage(img);
        }}
      />
    </div>
  );
}

export default App;
