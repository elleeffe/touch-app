import {useState} from 'react';
import {slides} from './config/slides';
import TouchArea from './screens/TouchArea';
import Slider from './screens/Slider';
import 'swiper/css';
import Images from './components/Images';

function App() {
  const [step, setStep] = useState<Step>('slide');
  const [slide, setSlide] = useState<SlideType>(slides[0]);
  const [secondImage, setSecondImage] = useState<string>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {step === 'slide' ? (
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
      ) : (
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
    </>
  );
}

export default App;
