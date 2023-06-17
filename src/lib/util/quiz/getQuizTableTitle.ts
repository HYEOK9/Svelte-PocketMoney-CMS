import {
  TABLE_QUIZ_TITLES,
  TABLE_QUIZ_BOX_TITLES,
} from "$lib/constants/tableTitles";

type QuizTitlesPartial = ReadonlyArray<{ key: string; title: string }>;

const getInProgressQuizTitles: QuizTitlesPartial = TABLE_QUIZ_TITLES.filter(
  ({ key }) => !["endDate"].includes(key)
);

const getToBeInProgressQuizTitles: QuizTitlesPartial = TABLE_QUIZ_TITLES.filter(
  ({ key }) => !["endDate", "usedPoint"].includes(key)
);

const getPrivateQuizTitles: QuizTitlesPartial = TABLE_QUIZ_TITLES.filter(
  ({ key }) => !["endDate"].includes(key)
);

const getEndQuizTitles: QuizTitlesPartial = TABLE_QUIZ_TITLES.filter(
  ({ key }) => key
);

const getCustomQuizBoxTitles: QuizTitlesPartial = TABLE_QUIZ_BOX_TITLES.filter(
  ({ key }) => key
);

const getCustomToBeInProgressQuizBoxTitles: QuizTitlesPartial =
  TABLE_QUIZ_BOX_TITLES.filter(({ key }) => !["expose"].includes(key));

const getPrivateQuizBoxTitles: QuizTitlesPartial = TABLE_QUIZ_BOX_TITLES.filter(
  ({ key }) => !["expose"].includes(key)
);

const getEndQuizBoxTitles: QuizTitlesPartial = TABLE_QUIZ_BOX_TITLES.filter(
  ({ key }) => !["expose"].includes(key)
);

export {
  getInProgressQuizTitles,
  getToBeInProgressQuizTitles,
  getPrivateQuizTitles,
  getEndQuizTitles,
  getCustomQuizBoxTitles,
  getCustomToBeInProgressQuizBoxTitles,
  getPrivateQuizBoxTitles,
  getEndQuizBoxTitles,
};
