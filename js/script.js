function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
async function popText(element, text, ms) {
    for (let i = text.length - 1; i >= 0; i--) {
        text = text.slice(0, i); // cutting 1 letter each iteration
        element.innerText = text; // and assign it to element
        await sleep(ms); // then wait
    }
}
async function insertText(element, text_from, ms) {
    let text = "";
    for (let i = 0; i < text_from.length; i++) {
        text += text_from[i]; // each time add next letter to text variable from string
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
    for (let x = 0; x < config.texts.length; x++) {
        let element = document.getElementById("text_to_change");
        let text = element.innerText; // get text from element
        await popText(element, text, config.operationSleep); // delete text with "pop effect"
        await sleep(config.afterPopingSleep);
        await insertText(element, config.texts[x], config.operationSleep); // inserting text from array
        await sleep(config.afterInsertingSleep);
    }
})();