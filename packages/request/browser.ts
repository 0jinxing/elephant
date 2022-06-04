import puppeteer from 'puppeteer-extra';
import stealth from 'puppeteer-extra-plugin-stealth';

puppeteer.use(stealth());

const options = {
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-infobars',
    '--window-position=0,0',
    '--ignore-certificate-errors',
    '--ignore-certificate-errors-spki-list',
    `--user-agent=${config.ua}`,
  ],
  headless: true,
  ignoreHTTPSErrors: true,
};

export async function request(url: string) {
  const browser = await puppeteer.launch({});

  try {
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.evaluate(() => document.documentElement.innerHTML);
    return html;
  } finally {
    browser.close();
  }
}
