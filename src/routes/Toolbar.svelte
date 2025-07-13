<script>
    import StartButton from './Start-Button.svelte';
    import TallDivider from './Tall-Divider.svelte';
    import ChunkyDivider from './Chunky-Divider.svelte';
    import Logos from './Logos.svelte';
    import Clock from './Clock.svelte';
</script>

<div class="toolbar">
  <div class="toolbar-top-border">
  </div>
  <div class="float-left">
    <StartButton/>
  </div>
  <div class="float-left">
    <TallDivider/>
  </div>
  <div class="float-left">
    <ChunkyDivider/>
  </div>
  <div class="float-left">
    <Logos/>
  </div>
  <div class="float-left">
    <TallDivider/>
  </div>
  <div class="float-left">
    <ChunkyDivider/>
  </div>
  <div class="">
    <Clock/>
  </div>
</div>

<style>
  .toolbar {
    width: 100%;
    height: 30px;
    background-color: #c0c0c0;
    border-width: 2px 0px 0px 0px;
    border-color: #f5f2ef;
    border-style: solid;
  }

  .toolbar-top-border {
    height: 1px;
    width: 100%;
    background-color: #b8b8b8;
    border-width: 1px 0px 0px 0px;
    border-color: #909493;
    border-style: solid;
  }

  .float-left {
    float: left;
  }

  .float-right {
    float: right;
  }
</style>