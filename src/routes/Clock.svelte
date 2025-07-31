<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  
  let currentTime: Date = new Date();
  let interval: NodeJS.Timeout | null = null;
  
  function updateTime(): void {
    currentTime = new Date();
  }
  
  function formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', { 
        hour12: true,
        hour: 'numeric',
        minute: '2-digit'
    });
  }
  
  
  onMount((): void => {
    updateTime();
    
    interval = setInterval(updateTime, 1000);
  });
  
  onDestroy((): void => {
    if (interval) {
      clearInterval(interval);
    }
  });
</script>

<div class="clock-container">
    <img class="clock-icons" alt="clock icons" src="clock-icons.png">
    <span class="clock-text">{formatTime(currentTime)}</span>
</div>

<style>
    .clock-container {
        width: 105px;
        height: 22px;
        border: solid;
        border-width: 2px;
        border-color: #7e7e7e #f5f2ef #f5f2ef #7e7e7e;
        margin-right: 3px;
    }

    .clock-icons {
        height: 20px;
    }

    .clock-text {
        font-family: sans-serif;
        font-weight: 400;
        font-size: 14px;
        display: block;
        float: right;
        padding: 2px 7px 0 0;
    }
</style>