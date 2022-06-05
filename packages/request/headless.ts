import puppeteer from 'puppeteer-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import env from '@elephant/env';

puppeteer.use(stealth());

const options: Parameters<typeof puppeteer.launch>[0] = {
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-infobars',
    '--window-position=0,0',
    '--ignore-certificate-errors',
    '--ignore-certificate-errors-spki-list',
    `--user-agent=${env.request.ua}`,
  ],
  headless: true,
  ignoreHTTPSErrors: true,
};

export async function headless(url: string) {
  const browser = await puppeteer.launch(options);

  try {
    const page = await browser.newPage();
    await page.goto(url);
    const html = await page.evaluate(() => document.documentElement.innerHTML);
    return html;
  } finally {
    browser.close();
  }
}

export default headless;
