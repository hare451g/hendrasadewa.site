enum fontFamily {
  primary = "'Inter', sans-serif;",
  monospace = "'IBM Plex Mono', monospace;",
  body = "'Karla', sans-serif;",
}

export type Typography = {
  fontFamily: typeof fontFamily;
  fontWeight: Array<number>;
  fontSize: Array<number>;
};

const typography = {
  fontFamily: {
    primary: fontFamily.primary,
    monospace: fontFamily.monospace,
    body: fontFamily.body,
  },
  fontWeight: [100, 200, 300, 400, 500, 600, 700, 800],
  fontSize: [12, 14, 16, 18, 20, 24, 32, 40, 42, 48, 64, 72],
};

export default typography;
