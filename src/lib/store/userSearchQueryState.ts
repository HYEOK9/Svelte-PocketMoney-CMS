import { writable } from "svelte/store";
import type { IUserSearchQueryState } from "$lib/types/userSearchQuery";

const initialState: IUserSearchQueryState = {
  isQuit: false,
  selectType: "code",
  type: "owner",
  value: "",
};

export const userSearchQueryState = writable({ ...initialState });
