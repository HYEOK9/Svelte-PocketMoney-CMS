<script lang="ts">
  import UserDetailInfoRow from "./UserDetailInfoRow.svelte";

  const tempRows = [
    { label: "추천코드", value: "KREGWMG" },
    { label: "추천코드", value: "KREGWMG" },
    { label: "추천코드", value: "KREGWMG" },
    { label: "추천코드", value: "KREGWMG" },
  ];

  export let label = "유저 정보";
  export let sections = [
    tempRows,
    tempRows,
    tempRows,
    tempRows,
    tempRows,
    tempRows,
    tempRows,
    tempRows,
  ];
</script>

<div class="user-detail-info">
  {#each sections as rows}
    <div class="table-row">
      <span class="title">{label}</span>
      <div class="table-detail-rows">
        {#each rows as row, index}
          <UserDetailInfoRow
            {...row}
            --border-bottom={`${Number(rows.length - 1 !== index)}px`}
          />
        {/each}
      </div>
    </div>
  {/each}
</div>

<style lang="scss">
  .user-detail-info {
    display: flex;
    flex-direction: row;
    padding: 0 1rem;
    width: 40em;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .table-row {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
    width: 49%;
  }

  .title {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .table-detail-rows {
    border: 1px solid #f1f1f1;
  }
</style>
