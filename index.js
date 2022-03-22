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




(async () => {
    const browser = await pupeteer.launch({
        headless: false,
        defaultViewport: null
    });

    const page = await browser.newPage();
    await page.goto('https://play.typeracer.com/'); // open typeracer




    await page.waitForSelector('#gwt-uid-1 > a');
    await page.click('#gwt-uid-1 > a'); // click to button to start a race


    await sleep(14000); // wait 14 seconds - time for the game to start

    page.evaluate(() => {
        // focus the input
        document.querySelector("#gwt-uid-20 > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > input").focus()
    });

    await sleep(1000) // wait 1 second

    var text = await page.$('#gwt-uid-20 > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > div > div');
    var text = await page.evaluate(text => text.textContent, text); // get the text to type



    for (var i = 0; i < text.length; i++) { // for each chars in the text
        await sleep(35); // delay between each char
        page.keyboard.type(text[i]); // type the char
    }

})();