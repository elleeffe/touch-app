import placeholder1 from '../assets/images/placeholder-1.jpg';
import placeholder2 from '../assets/images/placeholder-2.png';
import placeholder3 from '../assets/images/placeholder-3.png';
import placeholder4 from '../assets/images/placeholder-4.png';

export const slides: SlideType[] = [
  {
    media: [{src: placeholder1, id: 'media-1'}],
    title: 'Titolo slide 1',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis turpis a urna dictum dictum sit amet nec libero. Etiam nec urna fringilla, dignissim felis sed, accumsan risus. Nunc eleifend mauris purus, ut dapibus lorem cursus in. Nunc id felis pharetra, porttitor eros eu, vestibulum diam. Integer in pulvinar orci, ac dapibus dui. Nullam vulputate a mauris vitae tincidunt. Nullam convallis tempor libero, sit amet scelerisque erat facilisis vitae. Aenean commodo nulla nec dignissim vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam et erat metus.',
  },
  {
    media: [
      {src: placeholder2, id: 'media-2'},
      {src: placeholder3, id: 'media-3'},
    ],
    title: 'Titolo slide 2',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis turpis a urna dictum dictum sit amet nec libero.',
  },
  {
    media: [{src: placeholder4, id: 'media-4'}],
    title: 'Titolo slide 3',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis turpis a urna dictum dictum sit amet nec libero. Etiam nec urna fringilla, dignissim felis sed, accumsan risus. Nunc eleifend mauris purus, ut dapibus lorem cursus in. Nunc id felis pharetra, porttitor eros eu, vestibulum diam. Integer in pulvinar orci, ac dapibus dui. Nullam vulputate a mauris vitae tincidunt. Nullam convallis tempor libero, sit amet scelerisque erat facilisis vitae. Aenean commodo nulla nec dignissim vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam et erat metus.',
  },
];
