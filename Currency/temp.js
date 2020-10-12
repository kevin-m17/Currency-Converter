const usInput = document.querySelector('#usDollar > input'); // give me the input inside the celsius div
const ukInput = document.querySelector('#britainPound > input'); // Britain, fahenreiheit
const chnInput = document.querySelector('#chineseYuan > input'); // China kelvin
function roundNum(num) {
    return Math.round(num*100) / 100;
}

function usToUkAndChn() {
    const usVal = parseFloat(usInput.value);
    const ukVal = usVal * 0.774;
    const chnVal = usVal * 6.79;
    ukInput.value = roundNum(ukVal);
    chnInput.value = roundNum(chnVal);
}

function ukToUsAndChn() {
    const ukVal = parseFloat(ukInput.value);
    const usVal = ukVal * 1.29;
    const chnVal = ukVal * 8.77;
    usInput.value = roundNum(usVal);
    chnInput.value = roundNum(chnVal);
}

function chnToUsAndUk() {
    const chnVal = parseFloat(chnInput.value);
    const usVal = chnVal * 0.147;
    const ukVal = chnVal * 0.114;
    usInput.value = roundNum(usVal);
    ukInput.value = roundNum(ukVal);
    console.log(ukVal);
}

function main() {
    usInput.addEventListener('input', usToUkAndChn);
    ukInput.addEventListener('input', ukToUsAndChn);
    chnInput.addEventListener('input', chnToUsAndUk);
}

main();


// celsiusInput.addEventListener('click', function() { // when someone listens to an event (we listening to a click)
//     console.log("hello");
//     console.log("hi");
// });

// celsiusInput.addEventListener('input', function() {
//     // console.log(typeof cTemp);
//     // const cTemp = celsiusInput.value;
// });