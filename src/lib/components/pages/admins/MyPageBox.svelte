<script lang="ts">
  import ComponentWithTitle from "../quiz/create/ComponentWithTitle.svelte";
  import Badge from "$lib/components/UI/Badge.svelte";
  import Input from "$lib/components/UI/Input.svelte";
  import Button from "$lib/components/UI/Button.svelte";
</script>

<!-- TODO : api생기면 바꿔야함 -->
<div class="container">
  <div class="box">
    <ComponentWithTitle title="아이디">
      <div class="value">
        <span>leejaehyuck9@khu.ac.kr</span>
      </div>
    </ComponentWithTitle>

    <ComponentWithTitle title="이름">
      <div class="value">
        <span>이재혁</span>
      </div>
    </ComponentWithTitle>

    <ComponentWithTitle title="권한">
      <div class="value">
        <Badge
          text="CS"
          padding="5px 10px"
          textColor="white"
          bgColor="var(--color-green)"
        />
      </div>
    </ComponentWithTitle>

    <ComponentWithTitle title="현재 비밀번호" required>
      <div class="value">
        <Input --width="300px" />
      </div>
    </ComponentWithTitle>

    <ComponentWithTitle title="비밀번호" required>
      <div class="value">
        <Input --width="300px" type="password" />
      </div>
    </ComponentWithTitle>

    <ComponentWithTitle title="비밀번호 확인" required>
      <div class="value">
        <Input --width="300px" type="password" />
      </div>
    </ComponentWithTitle>
  </div>

  <Button
    text="저장"
    --color="white"
    --background-color="var(--color-blue)"
    style="padding:10px 50px;margin-top:20px;font-size:1.125rem;border-radius:2px;"
  />
</div>

<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .box {
    width: 720px;
    padding: 24px;
    background-color: #fff;
    border: 1px solid var(--color-border-color);
  }
  .value {
    margin-left: 50px;
  }
</style>
