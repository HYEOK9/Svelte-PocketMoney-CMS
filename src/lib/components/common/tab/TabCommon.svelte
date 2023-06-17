<script lang="ts">
  // smui
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  // props
  export let tabs: { title: string; count: number | null }[];
  export let active: string;

  const getCount = (curTab: string) =>
    tabs.find(({ title }) => title === curTab)?.count;
</script>

<div class="tab-area">
  <TabBar tabs={tabs.map(({ title }) => title)} let:tab bind:active>
    <div class="tab">
      <Tab {tab}>
        <Label style={tab.includes("종료") ? "color:var(--color-red);" : ""}>
          {tab}
        </Label>
        {#if getCount(tab) !== null}
          <span class="sub-number">{getCount(tab)}</span>
        {/if}
      </Tab>
    </div>
  </TabBar>
</div>

<style lang="scss">
  .tab-area {
    display: flex;
    align-items: baseline;
  }
  .tab {
    margin-right: 10px;
  }
  .sub-number {
    line-height: 1.2;
    text-align: center;
    padding: 1px 6px;
    margin-left: 5px;
    background-color: var(--color-red);
    color: white;
    border-radius: 100px;
    font-size: 0.875rem;
  }
  *:global(.tab-area .mdc-tab--active .mdc-tab__text-label) {
    font-weight: 600;
    color: var(--color-blue);
  }
  *:global(.tab-area .mdc-tab-indicator__content--underline) {
    border-color: var(--color-blue);
  }
  *:global(.tab-area .mdc-ripple-upgraded:hover .mdc-tab__text-label) {
    color: var(--color-blue-hover);
  }
  *:global(.tab-area .mdc-tab) {
    padding: 0 10px;
    min-width: 55px;
  }
</style>
