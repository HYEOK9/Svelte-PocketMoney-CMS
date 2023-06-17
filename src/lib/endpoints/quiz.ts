import { queryWrapper } from "$lib/util/util";

export const POST_QUIZ = "/quiz";

export const GET_QUIZ = queryWrapper("/quiz");

export const GET_QUIZ_DETAIL = (id: string) => `/quiz/${id ?? ""}`;

export const DELETE_QUIZ = (id: string) => `/quiz/${id}`;

export const PATCH_TERMINATE_QUIZ = (id: string) => `/quiz/${id}/terminate`;

export const GET_QUIZ_WINNER = (id: string | number) =>
  queryWrapper(`/quiz/${id}/winners`);

export const GET_USER_QUIZ = (id: string | number) =>
  queryWrapper(`/quiz/user/${id}`);
