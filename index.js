// TypeRacer-F1
// typeracer.com bot 
// LICENSE : MIT
// Author : SkwalExe
// Github : https://github.com/SkwalExe

// SKIDS : please don't copy this code or at least credit me

// This program is only for educational purposes and doesn't incite you to cheat.




const pupeteer = require('puppeteer');

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




(async() => {
    const browser = await pupeteer.launch({
        headless: false,
        defaultViewport: null
    });
    const page = await browser.newPage();
    await page.goto('https://play.typeracer.com/');




    await page.waitForSelector('#gwt-uid-1 > a');
    await page.click('#gwt-uid-1 > a');


    await sleep(14000);
    page.evaluate(() => {
        document.querySelector("#gwt-uid-20 > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td > input").focus()
    });
    await sleep(1000)

    var text = await page.$('#gwt-uid-20 > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td > div > div');


    var text = await page.evaluate(text => text.textContent, text);

    for (var i = 0; i < text.length; i++) {
        await sleep(35);
        page.keyboard.type(text[i]);

    }


})();