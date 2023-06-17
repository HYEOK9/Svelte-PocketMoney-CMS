/* eslint-disable no-param-reassign */
import queryString from "query-string";

export const queryWrapper = (url: string) => (_query?: Record<string, any>) => {
  if (!_query) return url;

  const queryObj = Object.entries(_query).reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (acc: Record<string, any>, [k, v]) => {
      v !== undefined && (acc[k] = v);
      return acc;
    },
    {}
  );
  return `${url}?${queryString.stringify(queryObj)}`;
};

export const conditional = (url: string) => (condition: boolean) =>
  condition ? url : () => false;
