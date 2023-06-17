// types
import type { PageLoad } from "./$types";
import type { IGetQuizDetail } from "$lib/types/data/get";
// end points
import { GET_QUIZ_DETAIL } from "$lib/endpoints/quiz";
// lib
import { get } from "$lib/util/request";
import { createQuizState } from "$lib/store/createQuizState";
import { urlToFile } from "$lib/util/common";

export const load = (async ({ params }) => {
  let quizDetail: IGetQuizDetail | undefined;
  let isError = false;
  let errorMessage = "";

  await get<IGetQuizDetail>(GET_QUIZ_DETAIL(params.quizId))
    .then((res) => {
      quizDetail = res;
    })
    .catch((e) => {
      isError = true;
      errorMessage = e.message;
    });

  let detailImage: File;
  let iconImage: File;

  try {
    if (quizDetail?.detailImageUrl) {
      detailImage = await urlToFile(quizDetail.detailImageUrl);
    }
    if (quizDetail?.iconImageUrl) {
      iconImage = await urlToFile(quizDetail.iconImageUrl);
    }
  } catch (e) {
    console.log(e);
  }

  createQuizState.update((prev) => ({
    ...prev,
    ...quizDetail,
    detailImage,
    iconImage,
  }));

  return { quizDetail, isError, errorMessage };
}) satisfies PageLoad;
