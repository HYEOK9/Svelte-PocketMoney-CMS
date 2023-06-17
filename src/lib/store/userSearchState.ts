import { writable } from "svelte/store";
import type { IUserSearchState } from "$lib/types/userSearch";

const initialState: IUserSearchState = {
  searched: false,
  selectedUser: undefined,
};

export const userSearchState = writable({ ...initialState });
