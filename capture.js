const shots = [
  ["http://localhost:3211/list", "next-list-ssr.png"],
  ["http://localhost:3211/grid", "next-grid-ssr.png"],
]

const results = []

for (const [url, name] of shots) {
  const page = await browser.newPage()
  const cdp = await page.context().newCDPSession(page)
  await cdp.send('Emulation.setScriptExecutionDisabled', { value: true })
  await page.setViewportSize({ width: 430, height: 860 })
  await page.goto(url, { waitUntil: "domcontentloaded" })
  await page.waitForTimeout(300)
  results.push({
    url: page.url(),
    title: await page.title(),
    screenshot: await saveScreenshot(await page.screenshot(), name),
  })
  await page.close()
}

console.log(JSON.stringify(results, null, 2))
