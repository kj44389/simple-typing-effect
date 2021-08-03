function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function popText(element, ms) {
    while(element.innerText.length != 0){
        element.innerText = element.innerText.slice(0, -1);
        await sleep(ms);
    }
}
async function insertText(element, text_from, ms) {
    let text = '';
    for (let i of [...text_from]) { // get each char character from string (spread operator ES6)
        text += i; // each time add next letter to text variable from string
        element.innerText = text; // asign it to element
        await sleep(ms); // then wait
    }
}
(async () => {
    // CONFIG SECTION
    let config = {
        initialSleep: 5000, // in (ms), how much time before starting code
        operationSleep: 50, // in (ms), how much time before cutting/adding letter
        afterPopingSleep: 1000, // in (ms), how much time to wait before adding new text
        afterInsertingSleep: 2000, // in (ms), how much time to wait after adding new text. 
        texts: [
            "a Student",
            "a Junior Web Developer",
            "looking for a new and exciting job"
        ]
    }
    //////////////////
    await sleep(config.initialSleep); // initial sleep 

    for (let x of config.texts) { // get each text from array (ES6 for iterator) 
        let element = document.getElementById("text_to_change");
        await popText(element, config.operationSleep); // delete text from element with "pop effect"
        await sleep(config.afterPopingSleep);
        await insertText(element, x, config.operationSleep); // inserting text from array
        await sleep(config.afterInsertingSleep);
    }
})();