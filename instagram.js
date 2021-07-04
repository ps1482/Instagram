const puppeteer = require("puppeteer");
const credentials = require("./credentials");

async function init() {
    const browser = await puppeteer.launch({
        headless: false,
        args: ["--window-size=1920,1080"],
    });

    const page = await browser.newPage();
    page.setViewport({ width: 1500, height: 764 });
    await page.goto("https://www.instagram.com/");

    await page.waitForFunction(() => document.querySelectorAll("input").length);

    // Login
    await page.type("[name=username]", credentials.username, { delay: 100 });
    await page.type("[name=password]", credentials.password, { delay: 100 });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("button[type='submit']"),
    ]);

    
    await page.type("input[placeholder='Search']", "ronaldo");


    await page.waitForSelector('[role="none"]>a')
    await page.evaluate(() => {
        let selector =  document.querySelectorAll('[role="none"]>a')[0];
        selector.click();
    })

    await page.waitForSelector('._9AhH0')
    await page.evaluate(() => {
        let selector =  document.querySelectorAll('._9AhH0')[0];
        selector.click();
    })
     
 
    setInterval(async function(){
      await page.waitForSelector('._65Bje.coreSpriteRightPaginationArrow')
    await page.evaluate(() => {
        let selector =  document.querySelector('._65Bje.coreSpriteRightPaginationArrow');
        selector.click();
    })
      }, 3000);



    await page.waitForSelector('._65Bje.coreSpriteRightPaginationArrow')
    await page.evaluate(() => {
        let selector =  document.querySelector('._65Bje.coreSpriteRightPaginationArrow');
        selector.click();
    })


} 
init();
