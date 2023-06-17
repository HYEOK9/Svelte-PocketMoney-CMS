<script lang="ts">
  import { page } from "$app/stores";
  // smui
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field";
  // store
  import { createQuizState } from "$lib/store/createQuizState";
  // constant
  import { QUIZ_SERVICE_LIST } from "$lib/constants/quiz";
  // lib
  import { convertQuizTypeLang, isInProgress } from "$lib/util/quiz";
  // components
  import ComponentWithTitle from "../ComponentWithTitle.svelte";
  import Input from "$lib/components/UI/Input.svelte";
  import Button from "$lib/components/UI/Button.svelte";
  import DatePicker from "$lib/components/UI/DatePicker.svelte";

  const EXPOSE_SERVICES = QUIZ_SERVICE_LIST.slice(1);

  let type = $createQuizState.type.length
    ? convertQuizTypeLang($createQuizState.type)
    : ["캐시닥"];

  $createQuizState.endDate = $createQuizState.endDate || "";
  $: $createQuizState.type = convertQuizTypeLang(type);

  const clickAll = () =>
    (type = type.length !== EXPOSE_SERVICES.length ? [...EXPOSE_SERVICES] : []);

  let disabled =
    !$page.url.pathname.includes("create") &&
    isInProgress($createQuizState.beginDate);

  const buttonStyle = (active: boolean) =>
    `padding:3px 10px;border-radius:3px;border:1px solid var(--color-line-500);margin-right:5px;${
      active ? "font-weight:700;" : ""
    }`;
</script>

<div class="container">
  <ComponentWithTitle title="제목" required>
    <Input
      bind:value={$createQuizState.title}
      placeHolder="제목을 입력하세요. (최대 30자)"
      maxLength={30}
      --width="50%"
      --height="35px"
      deleteIcon
    />
  </ComponentWithTitle>

  <ComponentWithTitle title="리스트노출" required>
    <Button
      text="노출"
      onClick={() => ($createQuizState.show = true)}
      --background-color={$createQuizState.show && "var(--color-blue)"}
      --color={$createQuizState.show && "white"}
      style={buttonStyle($createQuizState.show === true)}
    />
    <Button
      text="미노출"
      onClick={() => ($createQuizState.show = false)}
      --background-color={!$createQuizState.show && "var(--color-red)"}
      --color={!$createQuizState.show && "white"}
      style={buttonStyle($createQuizState.show === false)}
    />
  </ComponentWithTitle>

  <ComponentWithTitle title="시작날짜" required>
    <DatePicker
      bind:value={$createQuizState.beginDate}
      placeholder="시작날짜를 선택하세요."
      --width="180px"
      --height="35px"
      {disabled}
      deleteIcon
    />
  </ComponentWithTitle>

  <ComponentWithTitle title="종료날짜">
    <DatePicker
      bind:value={$createQuizState.endDate}
      placeholder="종료날짜를 선택하세요."
      --width="180px"
      --height="35px"
      deleteIcon
    />
  </ComponentWithTitle>

  <ComponentWithTitle title="광고주" required>
    <Input
      bind:value={$createQuizState.vendor}
      placeHolder="광고주를 입력하세요."
      --width="50%"
      --height="35px"
      deleteIcon
    />
  </ComponentWithTitle>

  <ComponentWithTitle title="홍보 url" required>
    <Input
      bind:value={$createQuizState.marketingUrl}
      placeHolder="https://"
      --width="50%"
      --height="35px"
      deleteIcon
    />
  </ComponentWithTitle>

  <ComponentWithTitle title="노출 서비스" required>
    <div class="checkbox-area">
      <FormField on:click={clickAll}>
        <Checkbox
          checked={$createQuizState.type.length === EXPOSE_SERVICES.length}
          value="전체"
        />
        <span class="option">전체</span>
      </FormField>

      {#each EXPOSE_SERVICES as option}
        <FormField>
          <Checkbox bind:group={type} value={option} />
          <span class="option" slot="label">{option}</span>
        </FormField>
      {/each}
    </div>
  </ComponentWithTitle>
</div>

<style lang="scss">
  .checkbox-area {
    margin-left: -10px;
  }
  .option {
    cursor: pointer;
  }
  *:global(.container .mdc-form-field label) {
    margin-left: -3px;
    padding: 0;
  }
</style>
