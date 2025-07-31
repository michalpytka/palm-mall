<script lang="ts">
    import StartButton from './Start-Button.svelte';
    import TallDivider from './Tall-Divider.svelte';
    import ChunkyDivider from './Chunky-Divider.svelte';
    import Logos from './Logos.svelte';
    import Clock from './Clock.svelte';
</script>

<div class="toolbar">
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
    <div class="float-right">
        <Clock/>
    </div>
    <div class="float-right">
        <TallDivider/>
    </div>
</div>

<style>
    .toolbar {
        width: 100%;
        height: 30px;
        background-color: #c0c0c0;
        border: solid;
        border-image-slice: 1;
        border-width: 3px 0 0 0;
        border-image-source: linear-gradient(to top, #565858, 97%, #ffffff);
        padding-top: 2px;
    }

    .float-left {
        float: left;
    }

    .float-right {
        float: right;
    }
</style>