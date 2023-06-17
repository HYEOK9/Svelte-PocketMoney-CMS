import { writable } from "svelte/store";
// types
import type { ICreateQuizState } from "$lib/types/quiz";

const initialQuizData: ICreateQuizState = {
  iconImage: undefined,
  iconImageUrl: "",
  detailImage: undefined,
  detailImageUrl: "",
  title: "",
  show: true,
  type: [],
  quizList: [],
  vendor: "",
  youtubeUrl: "",
  totalPoint: 0,
  pointRange: [],
  eventPoint: [
    { point: 1000, quantity: 0 },
    { point: 10000, quantity: 0 },
  ],
  beginDate: "",
  endDate: "",
  noticeImage: undefined,
  noticeImageUrl: "",
  marketingUrl: "",
};

export const createQuizState = writable({ ...initialQuizData });

export const resetCreateQuizState = () =>
  createQuizState.set({ ...initialQuizData });
