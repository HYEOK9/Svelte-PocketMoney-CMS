import dayjs from "dayjs";
// types
import type { IQuiz } from "$lib/types/quiz";

const isInProgress = (beginDate: string, endDate?: string) =>
  dayjs().isAfter(beginDate) && (!endDate || dayjs().isBefore(endDate));

const isToBeInProgress = (quiz: IQuiz) => dayjs().isBefore(quiz.beginDate);

const isEnd = (quiz: IQuiz) => dayjs().isAfter(quiz.endDate);

const getInProgressQuiz = (quizList: IQuiz[]) =>
  quizList.filter(({ beginDate, endDate }) => isInProgress(beginDate, endDate));

const getToBeInProgressQuiz = (quizList: IQuiz[]) =>
  quizList.filter((quiz) => isToBeInProgress(quiz));

const getPrivateQuiz = (quizList: IQuiz[]) =>
  quizList.filter((quiz) => !quiz.show);

const getEndedQuiz = (quizList: IQuiz[]) =>
  quizList.filter((quiz) => isEnd(quiz));

export {
  isInProgress,
  isToBeInProgress,
  isEnd,
  getInProgressQuiz,
  getToBeInProgressQuiz,
  getPrivateQuiz,
  getEndedQuiz,
};
