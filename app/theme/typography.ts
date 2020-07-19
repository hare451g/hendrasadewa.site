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
      src: "font-family: 'Karla', sans-serif;",
      weights: [400, 700],
    },
    primary: {
      src: "font-family: 'Inter', sans-serif;",
      weights: [200, 300, 400, 500, 700, 800],
    },
  },
  sizes: {
    heading: [56, 48, 40, 32, 24, 20],
    body: [20, 18, 16, 14],
  },
  lineHeights: {
    heading: [61.6, 52.8, 44, 35.2, 26.4, 22],
    body: [28, 25.2, 22.4, 19.6],
  },
};

export default typography;
