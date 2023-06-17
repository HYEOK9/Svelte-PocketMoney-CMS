<script lang="ts">
  import { userSearchState } from "$lib/store/userSearchState";
  import Button from "$lib/components/UI/Button.svelte";
  import type { UserInfo } from "$lib/types/userSearch";

  const tempUserInfo: UserInfo = {
    smsAuth: true,
    device: "ios",
    email: "csh_layner@naver.com",
    lastAccess: "2023-06-05T01:01:38.838Z",
    weight: 56,
    friendListLastSawAt: "2023-06-05T01:01:46.085Z",
    city: "서울시",
    code: "KREGWMG",
    friendCount: 0,
    token: {
      owner: "63f8707dcbd50105f9f7c049",
      token: "32a37646fb3ec6c816b05aefff0ffece5579b7f32a7bcea9",
    },
    nickname: "조민준",
    birth: "19860101",
    abuseBanAt: "2123-02-24T08:08:29.206Z",
    friendMigration: true,
    id: "63f8707dcbd50105f9f7c049",
    phone: "01031230979",
    appVersion: "4.7.8",
    badgeCount: 0,
    createdAt: "2023-02-24T08:08:29.128Z",
    isCheckInviteData: true,
    showAdForRejoin: "2023-02-19T20:08:29.159Z",
    profileUrl: "https://images.cashdoc.io/account/person.image_1655968644.png",
    recommendPoint: 0,
    gender: "m",
    height: 172,
    uuid: "47A1EDFC45CC4B73BC6A6348CF0BDD9F",
    point: 0,
    fb: "5444783832315055",
    pushId:
      "fZaDbeu2tEPxtPNtTyodcR:APA91bGQ_8ZJ1diDOY5r1OKUS61vCBvK7FnJgMyZRbEn1uW-QxT_PMjS4S1cj4E1MGSTVQA417-PQ6PcKzC6mxGJBVaLxVg_dcQWx0j2-VsEA4v4PkLS7dNSGCUQsxs176T9kbcsUDKO",
    isDormant: false,
    hashPhone: "65f51f0609cc92f5a446ab",
    phoneAuth: true,
    redisBanAt: "-",
    inbody: {},
    heart: {},
    watch: {},
  };

  const onClick = () => {
    $userSearchState.searched = true;
    $userSearchState.userInfo = [tempUserInfo];
    $userSearchState.selectedUser = undefined;
  };

  const onThreeClick = () => {
    $userSearchState.searched = true;
    $userSearchState.userInfo = [tempUserInfo, tempUserInfo, tempUserInfo];
    $userSearchState.selectedUser = undefined;
  };

  const onMultipleClick = () => {
    $userSearchState.searched = true;
    $userSearchState.userInfo = [
      tempUserInfo,
      tempUserInfo,
      tempUserInfo,
      tempUserInfo,
      tempUserInfo,
      tempUserInfo,
      tempUserInfo,
      tempUserInfo,
      tempUserInfo,
    ];
    $userSearchState.selectedUser = undefined;
  };
</script>

<div style:display="flex">
  <Button
    text="임시값 넣기"
    {onClick}
    --background-color="#1890ff"
    --color="white"
  />
  &nbsp;
  <Button
    text="임시값 3개 넣기"
    onClick={onThreeClick}
    --background-color="#1890ff"
    --color="white"
  />
  &nbsp;
  <Button
    text="임시값 많이 넣기"
    onClick={onMultipleClick}
    --background-color="#1890ff"
    --color="white"
  />
</div>
