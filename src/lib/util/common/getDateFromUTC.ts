import dayjs from "dayjs";

export const dateFormatter = (date: string) =>
  dayjs(date).format("YYYY-MM-DD / HH:mm");
