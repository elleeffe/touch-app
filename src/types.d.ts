type Step = 'slide' | 'touch';

type SlideType = {
  title: string;
  content: string;
  media: [string] | [string, string];
};
