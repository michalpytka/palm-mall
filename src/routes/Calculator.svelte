<script lang="ts">
    import DraggableWindow from './Draggable-Window.svelte';
    import { calculatorVisible } from './Page-Stores';

    let display = '0.';
    let currentValue = 0;
    let previousValue = 0;
    let operation: string | null = null;
    let waitingForOperand = false;
    let memory = 0;

    function updateDisplay(value: number) {
        if (Number.isInteger(value)) {
            display = value.toString() + '.';
        } else {
            display = value.toString();
        }
    }

    function inputNumber(num: string) {
        if (waitingForOperand) {
            display = num + '.';
            waitingForOperand = false;
        } else {
            if (display === '0.') {
                display = num + '.';
            } else {
                display = display.slice(0, -1) + num + '.';
            }
        }
        currentValue = parseFloat(display);
    }

    function inputDecimal() {
        if (waitingForOperand) {
            display = '0.';
            waitingForOperand = false;
        } else if (display.indexOf('.') === -1) {
            display += '.';
        }
    }

    function clear() {
        display = '0.';
        currentValue = 0;
        previousValue = 0;
        operation = null;
        waitingForOperand = false;
    }

    function clearEntry() {
        display = '0.';
        currentValue = 0;
    }

    function backspace() {
        if (display.length > 1 && display !== '0.') {
            display = display.slice(0, -2) + '.';
            if (display === '.') {
                display = '0.';
            }
            currentValue = parseFloat(display);
        } else {
            display = '0.';
            currentValue = 0;
        }
    }

    function performOperation(nextOperation: string | null = null) {
        if (operation && !waitingForOperand) {
            let result = previousValue;
            
            switch (operation) {
                case '+':
                    result = previousValue + currentValue;
                    break;
                case '-':
                    result = previousValue - currentValue;
                    break;
                case '*':
                    result = previousValue * currentValue;
                    break;
                case '/':
                    if (currentValue !== 0) {
                        result = previousValue / currentValue;
                    } else {
                        display = 'Error';
                        return;
                    }
                    break;
            }
            
            currentValue = result;
            updateDisplay(result);
        }

        waitingForOperand = true;
        operation = nextOperation;
        previousValue = currentValue;
    }

    function calculate() {
        performOperation();
        operation = null;
        waitingForOperand = true;
        previousValue = 0;
    }

    function sqrt() {
        if (currentValue >= 0) {
            currentValue = Math.sqrt(currentValue);
            updateDisplay(currentValue);
            waitingForOperand = true;
        } else {
            display = 'Error';
        }
    }

    function percent() {
        currentValue = currentValue / 100;
        updateDisplay(currentValue);
        waitingForOperand = true;
    }

    function reciprocal() {
        if (currentValue !== 0) {
            currentValue = 1 / currentValue;
            updateDisplay(currentValue);
            waitingForOperand = true;
        } else {
            display = 'Error';
        }
    }

    function toggleSign() {
        currentValue = -currentValue;
        updateDisplay(currentValue);
    }

    function memoryClear() {
        memory = 0;
    }

    function memoryRecall() {
        currentValue = memory;
        updateDisplay(memory);
        waitingForOperand = true;
    }

    function memoryStore() {
        memory = currentValue;
    }

    function memoryAdd() {
        memory += currentValue;
    }
</script>

<style>
    .window-content {
        font-family: sans-serif;
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .underline {
        text-decoration: underline;
    }

    .toolbar {
        font-size: 12px;
        width: 100%;
        margin: 2px 0 2px 8%;
    }

    .toolbar-spacing {
        margin-right: 5px;
    }

    .display {
        background-color: white;
        border: solid;
        border-width: 2px;
        border-color:  #3a3a3a #efefef #efefef #3a3a3a;
        height: 20px;
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: end;
        padding: 0 5px;
        box-sizing: border-box;
    }

    .display-text {
        font-family: sans-serif;
        float: right;
        font-size: 12px;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .weird-box {
        width: 20px;
        height: 20px;
        border: solid;
        border-width: 2px;
        border-color: #3a3a3a #efefef #efefef  #3a3a3a;
        margin: 10px 12px 5px 15px;
    }

    .button-row {
        display: flex;
        align-items: center;
        justify-content: start;
        width: 100%;
    }

    .wide-button {
        width: 50px;
        height: 25px;
        border: solid;
        border-width: 2px;
        border-color:  #efefef #3a3a3a #3a3a3a #efefef;
        color: #ff0000;
        font-family: sans-serif;
        font-size: 10px;
        margin-left: 5px;
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: #c0c0c0;
    }

    .wide-button:active {
        border-color:  #3a3a3a #efefef #efefef #3a3a3a;
    }

    .slim-button {
        width: 25px;
        height: 25px;
        border: solid;
        border-width: 2px;
        border-color:  #efefef #3a3a3a #3a3a3a #efefef;
        font-family: sans-serif;
        font-size: 10px;
        margin-left: 5px;
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background: #c0c0c0;
    }

    .slim-button:active {
        border-color:  #3a3a3a #efefef #efefef #3a3a3a;
    }

    .color-red {
        color: #ff0000;
    }

    .color-blue {
        color: #0000ff;
    }

    .left-column {
        margin-left: 13px;
    }

    .empty-space-between-functional-keys {
        margin-left: 15px;
    }

    .grid-spacing {
        margin-left: 7px;
    }

    .button-wrapper {
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;

    }
</style>

{#if $calculatorVisible}
    <DraggableWindow windowHeight={255} windowWidth={240} title="Calculator" iconSrc="calculator-icon.png" isClosable={true} windowVisibleFlagStore={calculatorVisible}>
        <div class="window-content">
            <div class="toolbar">
                <span class="toolbar-spacing"><span class="underline">E</span><span>dit</span></span>
                <span class="toolbar-spacing"><span class="underline">V</span><span>iew</span></span>
                <span class="toolbar-spacing"><span class="underline">H</span><span>elp</span></span>
            </div>
            <div class="display">
                <span class="display-text">{display}</span>
            </div>
            <div class="button-row">
                <div class="weird-box"></div>
                <button class="button-wrapper" on:click={backspace}>
                    <div class="wide-button">Backspace</div>
                </button>
                <button class="button-wrapper" on:click={clearEntry}>
                    <div class="wide-button">CE</div>
                </button>
                <button class="button-wrapper" on:click={clear}>
                    <div class="wide-button">C</div>
                </button>
            </div>
            <div class="button-row">
                <button class="button-wrapper" on:click={memoryClear}><div class="slim-button color-red left-column">MC</div></button>
                <button class="button-wrapper" on:click={() => inputNumber('7')}><div class="slim-button color-blue empty-space-between-functional-keys">7</div></button>
                <button class="button-wrapper" on:click={() => inputNumber('8')}><div class="slim-button color-blue grid-spacing">8</div></button>
                <button class="button-wrapper" on:click={() => inputNumber('9')}><div class="slim-button color-blue grid-spacing">9</div></button>
                <button class="button-wrapper" on:click={() => performOperation('/')}><div class="slim-button color-red grid-spacing">/</div></button>
                <button class="button-wrapper" on:click={sqrt}><div class="slim-button color-blue">sqrt</div></button>
            </div>
            <div class="button-row">
                <button class="button-wrapper" on:click={memoryRecall}><div class="slim-button color-red left-column">MR</div></button>
                <button class="button-wrapper" on:click={() => inputNumber('4')}><div class="slim-button color-blue empty-space-between-functional-keys">4</div></button>
                <button class="button-wrapper" on:click={() => inputNumber('5')}><div class="slim-button color-blue grid-spacing">5</div></button>
                <button class="button-wrapper" on:click={() => inputNumber('6')}><div class="slim-button color-blue grid-spacing">6</div></button>
                <button class="button-wrapper" on:click={() => performOperation('*')}><div class="slim-button color-red grid-spacing">*</div></button>
                <button class="button-wrapper" on:click={percent}><div class="slim-button color-blue grid-spacing">%</div></button>
            </div>
            <div class="button-row">
                <button class="button-wrapper" on:click={memoryStore}><div class="slim-button color-red left-column">MS</div></button>
                <button class="button-wrapper" on:click={() => inputNumber('1')}><div class="slim-button color-blue empty-space-between-functional-keys">1</div></button>
                <button class="button-wrapper" on:click={() => inputNumber('2')}><div class="slim-button color-blue grid-spacing">2</div></button>
                <button class="button-wrapper" on:click={() => inputNumber('3')}><div class="slim-button color-blue grid-spacing">3</div></button>
                <button class="button-wrapper" on:click={() => performOperation('-')}><div class="slim-button color-red grid-spacing">-</div></button>
                <button class="button-wrapper" on:click={reciprocal}><div class="slim-button color-blue grid-spacing">1/x</div></button>
            </div>
            <div class="button-row">
                <button class="button-wrapper" on:click={memoryAdd}><div class="slim-button color-red left-column">M+</div></button>
                <button class="button-wrapper" on:click={() => inputNumber('0')}><div class="slim-button color-blue empty-space-between-functional-keys">0</div></button>
                <button class="button-wrapper" on:click={toggleSign}><div class="slim-button color-blue grid-spacing">+/-</div></button>
                <button class="button-wrapper" on:click={inputDecimal}><div class="slim-button color-blue grid-spacing">.</div></button>
                <button class="button-wrapper" on:click={() => performOperation('+')}><div class="slim-button color-red grid-spacing">+</div></button>
                <button class="button-wrapper" on:click={calculate}><div class="slim-button color-red grid-spacing">=</div></button>
            </div>
        </div>
    </DraggableWindow>
{/if}