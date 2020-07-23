type Font = {
  src: string;
  weights: Array<number>;
};

export type Typography = {
  font: {
    primary: Font;
    secondary: Font;
  };
  sizes: {
    heading: Array<number>;
    body: Array<number>;
  };
  lineHeights: {
    heading: Array<number>;
    body: Array<number>;
  };
};

const typography: Typography = {
  font: {
    secondary: {
      src: "'Karla', sans-serif;",
      weights: [400, 700],
    },
    primary: {
      src: "'Inter', sans-serif;",
      weights: [200, 300, 400, 500, 700, 800],
    },
  },

  sizes: {
    heading: [24, 32, 40, 48, 56, 64],
    body: [14, 16, 18, 20, 24],
  },

  lineHeights: {
    heading: [22, 26.4, 35.2, 44, 52.8, 61.6],
    body: [19.6, 22.4, 25.2, 28],
  },
};

export default typography;
