export const convertToPx = (str: number | string) =>
  `${String(str).split("px")[0]}px`;
