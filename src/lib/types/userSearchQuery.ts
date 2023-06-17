export type TCodeType =
  | "code"
  | "owner"
  | "kakao"
  | "facebook"
  | "apple"
  | "watch"
  | "partner"
  | "movigame"
  | "phone";
export type TSelectType = "code" | "phoneNumber";

export interface IUserSearchQueryState {
  isQuit: boolean;
  selectType: TSelectType;
  type: TCodeType;
  value: string;
}
