import type { IQuiz, TEventPoint } from "../quiz";

export interface IGetQuiz {
  items: IQuiz[];
  totalSize: number;
  offest: number;
  limit: number;
}

export interface IGetQuizDetail {
  id: string;
  title: string;
  show: true;
  type: string[];
  vendor: string;
  question: string;
  description: string;
  hint: string;
  answer: string;
  searchBtnText: string;
  hintRedirectUrl: string;
  detailImageUrl: string;
  iconImageUrl?: string;
  youtubeUrl: string;
  winnerCount: number;
  totalPoint: number;
  pointRange: [number, number];
  eventPoint: [TEventPoint, TEventPoint];
  usedPoint: number;
  beginDate: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICommonState {
  statusCode: number;
  message: string;
}
