export interface UserInfo {
  smsAuth: boolean;
  device: "aos" | "ios";
  email: string;
  lastAccess: string;
  weight: number;
  friendListLastSawAt: string;
  city: string;
  code: string;
  friendCount: number;
  token: {
    owner: string;
    token: string;
  };
  nickname: string;
  birth: string;
  abuseBanAt: string;
  friendMigration: boolean;
  id: string;
  phone: string;
  appVersion: string;
  badgeCount: number;
  createdAt: string;
  isCheckInviteData: boolean;
  showAdForRejoin: string;
  profileUrl: string;
  recommendPoint: number;
  gender: "f" | "m";
  height: number;
  uuid: string;
  point: number;
  fb: string;
  pushId: string;
  isDormant: boolean;
  hashPhone: string;
  phoneAuth: boolean;
  redisBanAt: string;
  inbody: unknown;
  heart: unknown;
  watch: unknown;
}

export interface IUserSearchState {
  searched: boolean;
  userInfo?: UserInfo[];
  selectedUser?: UserInfo;
}
