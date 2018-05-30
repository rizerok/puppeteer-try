const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const creds = require('./creditains');

const options = {
  uri: 'https://vk.com',
  transform: body => cheerio.load(body),
  viewport:{
    width: 1240,
    height: 680
  }
};

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.setViewport(options.viewport);
  //page.setDefaultNavigationTimeout()
  await page.goto(options.uri);

  // let content = await page.content();
  //
  // const $ = options.transform(content);

  const USERNAME_SELECTOR = '#index_email';
  const PASSWORD_SELECTOR = '#index_pass';
  const BUTTON_SELECTOR = '#index_login_button';

  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(creds.login);
  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(creds.pass);
  await page.click(BUTTON_SELECTOR);
  await page.waitForNavigation();

  //await page.screenshot({path: 'example.png'});

  //await browser.close();
})();