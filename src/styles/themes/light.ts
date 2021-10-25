import { Theme } from 'src/types/themes';

const light: Theme = {
  id: 0,
  colors: {
    layout: {
      darkest: 'rgb(1, 17, 18)',
      darker: 'rgb(12, 31, 33)',
      dark: 'rgb(75, 75, 76)',
      light: 'rgb(30, 30, 30)',
      lighter: 'rgb(150, 150, 150)',
      lightest: 'rgb(255, 255, 255)',
    },
    text: {
      lightest: 'rgb(255, 255, 255)',
      lighter: 'rgb(200, 200, 200)',
      light: 'rgb(150, 150, 150)',
      dark: 'rgb(135, 135, 135)',
      darker: 'rgb(100, 100, 100)',
      darkest: 'rgb(0, 16, 17)',
    },
    accent: {
      light: 'rgb(255, 66, 0)',
      dark: 'rgb(216, 59, 4)',
    },
  },
};

export default light;
