// TypeRacer-F1
// typeracer.com bot 
// LICENSE : MIT
// Author : SkwalExe
// Github : https://github.com/SkwalExe

// SKIDS : please don't copy this code or at least credit me

// This program is only for educational purposes and doesn't incite you to cheat.




const pupeteer = require('puppeteer');

async function sleep(ms) { // function to sleep in milliseconds
    return new Promise(resolve => setTimeout(resolve, ms));
}


(async() => {
    const browser = await pupeteer.launch({
        headless: false,
        defaultViewport: null
    });

    console.log("An error ? Please open an issue on https://github.com/SkwalExe/TypeRacer-F1/issues");

    const page = await browser.newPage();
    await page.goto('https://play.typeracer.com/'); // open typeracer

    console.log("You have 7 seconds, click on the 'agree' to cookies button if any");

    await sleep(7000)

    console.log("Starting a game...")

    var startGameButton = await page.waitForSelector('#gwt-uid-1 > a')
    await startGameButton.click() // click start game button

    console.log("Waiting for the game to start...")
    console.log("Starting in 14 seconds...")
    await sleep(14000); // wait 14 seconds - time for the game to start
    page.evaluate(() => {
        // focus the input
        document.querySelector("#gwt-uid-20 > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > input").focus()
    });

    await sleep(1000) // wait 1 second

    var text = await page.$('#gwt-uid-20 > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > div > div');
    var text = await page.evaluate(text => text.textContent, text); // get the text to type

    console.log("Starting typing...")

    for (var i = 0; i < text.length; i++) { // for each chars in the text
        await sleep(35); // delay between each char
        page.keyboard.type(text[i]); // type the char
    }

    console.log("Game ended!")

})();