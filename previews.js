const puppeteer = require('puppeteer');
const fs = require('fs');

async function create() {
  
  
  let width = 600
  let height = Math.floor(width / 1.91)
  console.log(`${width}x${height}`)
  

  fs.readdir('./languages', (err, filenames) => {
    for (let file of filenames) {
      fs.readFile('./languages/' + file, 'utf-8', async (err, content) => {
        let iso = file.split('.')[0]
        console.log(iso)
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({
          width: width,
          height: height,
          deviceScaleFactor: 2,
        })
        await page.goto(`https://whynano.cc/${iso}`);
        // console.log()
        await page.screenshot({ path: `./client/static/img/preview_${iso}.png`  });
        await browser.close();
      })
    }
  })
}

create()