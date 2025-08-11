<script lang="ts">
  import { startMenuVisible } from './Page-Stores';

  function handleClick(): void {
    startMenuVisible.set(!$startMenuVisible);
  }
</script>

<button class="start-button" onclick={handleClick}>
  <div class="start-button-container" class:pressed={$startMenuVisible}>
    <img class="logo" src="binbows-logo.png" alt="Binbows Logo">
    <span class="start-button-label">Start</span>
  </div>
</button>

<style>
  .start-button-container {
    height: 22px;
    width: 70px;
    border-color: #f7f7f7 #1c1c1c #1c1c1c #f7f7f7;
    border-style: solid;
    background-color: #c0c0c0;
    border-width: 2px;
    margin: 0 0 0 2px;
  }

  .start-button-container.pressed {
    border-color: #1c1c1c #f7f7f7 #f7f7f7 #1c1c1c ;
    margin: 1px 0 0 3px;
  }

  .start-button-label {
    font-weight: 600;
    display: block;
    float: right;
    padding: 2px 5px 0 0;
    font-family: sans-serif;
    font-size: 16px;
  }

  .start-button {
    height: 24px;
    width: 75px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .logo {
    margin: 2px 0 0 2px;
    height: 19px;
    width: 23px;
  }
</style>
