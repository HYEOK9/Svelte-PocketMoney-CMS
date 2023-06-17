<script lang="ts">
  // smui
  import Checkbox from "@smui/checkbox";
  import FormField from "@smui/form-field";
  import Switch from "$lib/components/UI/Switch.svelte";
  // constant
  import { OS_LIST } from "$lib/constants/quiz";
  // component
  import ComponentWithTitle from "../ComponentWithTitle.svelte";
  import DatePicker from "$lib/components/UI/DatePicker.svelte";
  import Input from "$lib/components/UI/Input.svelte";
  import ImageUpload from "$lib/components/UI/ImageUpload.svelte";

  let selected = ["iOS", "안드로이드"];
  let endTime = "";
  let image: File;
  let traffic = false;
  let exposeTime = "";
  let tps = "";
</script>

<div class="container">
  <ComponentWithTitle title="OS">
    <div class="checkbox-area">
      {#each OS_LIST.slice(1) as option}
        <FormField>
          <Checkbox bind:group={selected} value={option} />
          <span class="option" slot="label">{option}</span>
        </FormField>
      {/each}
    </div>
  </ComponentWithTitle>

  <ComponentWithTitle title="종료 시간" required>
    <DatePicker
      bind:value={endTime}
      noCalendar
      dateFormat="H:i"
      placeholder="시간을 선택하세요."
      --width="160px"
      --height="35px"
      deleteIcon
    />
  </ComponentWithTitle>

  <ComponentWithTitle title="이미지" required>
    <ImageUpload bind:file={image} />
  </ComponentWithTitle>

  <ComponentWithTitle title="트래픽 대응">
    <Switch bind:checked={traffic} label="ON" --width="50px" />
  </ComponentWithTitle>

  {#if traffic}
    <ComponentWithTitle title="노출 시간" required>
      <div class="expose-time">
        <span>시작부터</span>
        &nbsp;&nbsp; <Input
          bind:value={exposeTime}
          --width="80px"
          --height="35px"
        />
        &nbsp;
        <span>분 까지 </span>
      </div>
    </ComponentWithTitle>

    <ComponentWithTitle title="TPS" required>
      <Input bind:value={tps} --width="80px" --height="35px" />
    </ComponentWithTitle>
  {/if}
</div>

<style lang="scss">
  .checkbox-area {
    margin-left: -10px;
  }
  .option {
    cursor: pointer;
  }
  .expose-time {
    display: flex;
    align-items: center;
  }
</style>
