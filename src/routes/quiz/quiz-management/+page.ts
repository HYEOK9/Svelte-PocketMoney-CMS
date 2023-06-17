// types
import type { PageLoad } from "./$types";
import type { IGetQuiz } from "$lib/types/data/get";
// end points
import { GET_QUIZ } from "$lib/endpoints/quiz";
// lib
import { get } from "$lib/util/request";

export const load = (async () => {
  let quizData: IGetQuiz | undefined;
  let isError = false;

  await get<IGetQuiz>(GET_QUIZ({ show: true }))
    .then((res) => {
      quizData = res;
    })
    .catch(() => {
      isError = true;
    });

  return { quizData, isError };
}) satisfies PageLoad;
