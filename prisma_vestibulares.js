const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser
  const browser = await puppeteer.launch({ headless: false });

  // Create a page
  const page = await browser.newPage();

  // Go to your site
  await page.goto('https://estudeprisma.com/');

  // Query for an element handle.
  const element = await page.waitForSelector('div.MuiGrid-root:nth-child(8) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > span:nth-child(1)');

  // Do something with element...
  await element.click(); // Just an example.

  // Dispose of handle
  await element.dispose();

  console.log('atte aqui ok.');

  const key_word_box_xpath = '#\:rt\:';  

  await page.focus(key_word_box_xpath)
await page.keyboard.type('test54')
  
//   const key_word_elements = await page.evaluate((xpath) => {
//     const elements = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
//     const nodes = [];
//     let node = elements.iterateNext();
//     while (node) {
//       nodes.push(node);
//       node = elements.iterateNext();
//     }
//     return nodes;
//   }, key_word_box_xpath);


//   // Check if element exists
//   if (key_word_elements.length > 0) {
//     // Type into the first matching element
//     await key_word_elements[0].type("TESTE 123");
//   } else {
//     console.log('XPath element not found.');
//   }

  await new Promise(resolve => setTimeout(resolve, 5000));

  // Close browser.
//   await browser.close();
})();