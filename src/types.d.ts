type Step = 'slide' | 'touch';

type Media = {
  id: string;
  src: string;
};

type SlideType = {
  title: string;
  content: string;
  media: [Media] | [Media, Media];
};

type Position = 'left' | 'right';
