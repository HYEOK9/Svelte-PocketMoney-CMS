import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { convertQuizTypeLang } from "./convertLanguage";
// types
import type { IQuiz, TSort } from "$lib/types/quiz";
import type {
  QUIZ_SERVICE_LIST,
  SEARCH_FILTER_LIST,
} from "$lib/constants/quiz";

dayjs.extend(customParseFormat);

const searchQuizByVendor = (quizList: IQuiz[], keyword: string) => {
  if (!keyword) return quizList;

  const searchKey = keyword.toLowerCase();

  return quizList.filter(({ vendor }) => vendor.includes(searchKey));
};

const searchQuizByTitleAndVendor = (quizList: IQuiz[], keyword: string) => {
  if (!keyword) return quizList;

  const searchKey = keyword.toLowerCase();

  return quizList.filter(
    ({ title, vendor }) =>
      title.includes(searchKey) || vendor.includes(searchKey)
  );
};

const searchQuizByTitle = (quizList: IQuiz[], keyword: string) => {
  if (!keyword) return quizList;

  const searchKey = keyword.toLowerCase();

  return quizList.filter(({ title }) =>
    title?.toLowerCase().includes(searchKey)
  );
};

const searchQuizByKeyword =
  (filterValue: (typeof SEARCH_FILTER_LIST)[number], keyword: string) =>
  (quizList: IQuiz[]) => {
    // TODO : api에서 vendor오면 return값 변경
    switch (filterValue) {
      case "전체":
        return searchQuizByTitleAndVendor(quizList, keyword);
      case "광고주":
        return searchQuizByVendor(quizList, keyword);
      case "제목":
        return searchQuizByTitle(quizList, keyword);
      default:
        return quizList;
    }
  };

const searchQuizByService =
  (serviceTypeValue: (typeof QUIZ_SERVICE_LIST)[number][]) =>
  (quizList: IQuiz[]) => {
    if (!serviceTypeValue.length) return quizList;

    const serviceType = convertQuizTypeLang(serviceTypeValue);

    return quizList.filter(({ type }) =>
      serviceType.every((item) => type.includes(item))
    );
  };

const searchQuizByTime = (time: string) => (quizList: IQuiz[]) => {
  const timeFormat = "HH:mm";
  if (!time || !dayjs(time, timeFormat).isValid()) return quizList;

  return quizList.filter(
    ({ beginDate }) => dayjs(beginDate).format(timeFormat) === time
  );
};

const sortQuizByDate = (
  quizList: IQuiz[],
  sortKey: TSort,
  dateKey: "begin" | "end"
) => {
  const date = dateKey === "begin" ? "beginDate" : "endDate";
  const temp = [...quizList];

  switch (sortKey) {
    case "asc":
      return temp.sort((a, b) => (dayjs(a[date]).diff(b[date]) >= 0 ? 1 : -1));
    case "dsc":
      return temp.sort((a, b) => (dayjs(a[date]).diff(b[date]) <= 0 ? 1 : -1));
    default:
      return temp;
  }
};

export {
  searchQuizByTitleAndVendor,
  searchQuizByTitle,
  searchQuizByKeyword,
  searchQuizByService,
  searchQuizByTime,
  sortQuizByDate,
};
