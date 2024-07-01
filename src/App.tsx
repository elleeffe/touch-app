import {slides} from './config/slides';
import TouchArea from './screens/TouchArea';
import Slider from './screens/Slider';
import 'swiper/css';
import Images from './components/Images';
import useApp from './hooks/useApp';

function App() {
  const {
    wrapRef,
    handleStart,
    step,
    slide,
    handleChangeSlide,
    handleSelectSlide,
    leftImage,
    setLeftImage,
    rightImage,
    setRightImage,
    handleClose,
    menuLeftOpened,
    setMenuLeftOpened,
    menuRightOpened,
    setMenuRightOpened,
    handleImage,
    images,
  } = useApp();

  return (
    <div ref={wrapRef} className="bg-blue4">
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
          onChangeSlide={handleChangeSlide}
          onSelectSlide={handleSelectSlide}
        />
      )}
      {step === 'touch' && (
        <TouchArea
          rightImage={rightImage}
          leftImage={leftImage}
          onClose={handleClose}
          onChangeLeft={() => setMenuLeftOpened(true)}
          onChangeRight={() => setMenuRightOpened(true)}
          onExpand={(media) => {
            setLeftImage(media);
            setRightImage(undefined);
          }}
        />
      )}
      <Images
        key="right"
        position="right"
        isOpen={menuRightOpened}
        onSelect={(img) => handleImage('right', img)}
        onClose={() => setMenuRightOpened(false)}
        images={images}
      />
      <Images
        key="left"
        position="left"
        isOpen={menuLeftOpened}
        onSelect={(img) => handleImage('left', img)}
        onClose={() => setMenuLeftOpened(false)}
        images={images}
      />
    </div>
  );
}

export default App;
