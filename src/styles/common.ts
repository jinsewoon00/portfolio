export const Common = {
  Font: {
    Kor: "SUIT Variable,sans-serif",
    Eng: "Montserrat,sans-serif",
  },
  CotainerSize: "960px",
};

const breakpoints = [480, 768, 1000];
export const mq = breakpoints.map(
  (bp) => `@media screen and (max-width: ${bp}px)`
);
