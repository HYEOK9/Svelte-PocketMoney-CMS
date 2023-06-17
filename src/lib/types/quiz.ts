interface QuizData {
  id: string;
  show: boolean;
  title: string;
  vendor: string;
  type: string[];
  totalPoint: number;
  usedPoint: number;
  remainingPoint: number;
  iconImageUrl?: string;
  detailImageUrl: string;
  beginDate: string;
  endDate?: string;
  createdAt: string;
  updatedAt: string;
}

export type IQuiz = QuizData;

export type TSort = "asc" | "dsc" | "none";

export type TEventPoint = { point: number; quantity: number };

// FIX ME => 변수명 모름
export interface IQuizInfo {
  question: string;
  description: string;
  hint: string;
  answer: string;
  maxPrice: string;
  searchBtnText: string;
  hintRedirectUrl: string;
}
export interface ICreateQuizState {
  iconImage?: File;
  iconImageUrl?: string;
  detailImage?: File;
  detailImageUrl: string;
  title: string;
  show: boolean;
  type: string[];
  vendor: string;
  // FIX ME => 변수명 모름
  quizList: IQuizInfo[];
  youtubeUrl: string;
  totalPoint: number;
  pointRange: number[];
  eventPoint: [TEventPoint, TEventPoint];
  beginDate: string;
  endDate: string;
  noticeImage?: File;
  noticeImageUrl?: string;
  marketingUrl?: string;
}
