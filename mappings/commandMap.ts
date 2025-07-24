export const commandMap: Record<string, string> = {
  "goto": "driver.get($1)",
  "click": "driver.findElement(By.cssSelector($1)).click()",
  // Add more mappings as needed
  "fill": "driver.findElement(By.cssSelector($1)).sendKeys($2)",
  "type": "driver.findElement(By.cssSelector($1)).sendKeys($2)",
  "check": "driver.findElement(By.cssSelector($1)).click()",
  "uncheck": "driver.findElement(By.cssSelector($1)).click()",
  "selectOption": "new Select(driver.findElement(By.cssSelector($1))).selectByValue($2)",
  "selectText": "new Select(driver.findElement(By.cssSelector($1))).selectByVisibleText($2)",
  "selectOptionByIndex": "new Select(driver.findElement(By.cssSelector($1))).selectByIndex($2)",
  "press": "driver.findElement(By.cssSelector($1)).sendKeys(Keys.$2)",
  "hover": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).perform()",
  "dragAndDrop": "new Actions(driver).dragAndDrop(driver.findElement(By.cssSelector($1)), driver.findElement(By.cssSelector($2))).perform()",
  "title": "driver.getTitle()",
  "url": "driver.getCurrentUrl()",
  "text": "driver.findElement(By.cssSelector($1)).getText()",
  "innerText": "driver.findElement(By.cssSelector($1)).getAttribute('innerText')",
  "innerHTML": "driver.findElement(By.cssSelector($1)).getAttribute('innerHTML')",
  "textContent": "driver.findElement(By.cssSelector($1)).getText()",
  "value": "driver.findElement(By.cssSelector($1)).getAttribute('value')",
  "pause": "Thread.sleep($1)",



  //screenshot
  "screenshot": "File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE); FileUtils.copyFile(screenshot, new File($1))",


  //assertion
  "expect(page).toHaveTitle": "assertTrue($1, driver.getTitle());",
  "expect(locator).toHaveText": "assert driver.findElement(By.cssSelector($1)).getText().equals($2)",
  "expect(locator).toBeVisible": "assert driver.findElement(By.cssSelector($1)).isDisplayed()",
  "expect(locator).toBeHidden": "assert !driver.findElement(By.cssSelector($1)).isDisplayed()",
  "expect(locator).toHaveValue": "assert driver.findElement(By.cssSelector($1)).getAttribute('value').equals($2)",
  "expect(locator).toHaveAttribute": "assert driver.findElement(By.cssSelector($1)).getAttribute($2).equals($3)",
  "expect(locator).toHaveClass": "assert driver.findElement(By.cssSelector($1)).getAttribute('class').contains($2)",
  "expect(locator).toHaveCount": "assert driver.findElements(By.cssSelector($1)).size() == $2",
  "expect(locator).toHaveURL": " assertTrue(driver.getCurrentUrl().equals($1))",
  "expect(locator).toHaveTextContent": "assert driver.findElement(By.cssSelector($1)).getText().contains($2)",
  "expect(locator).toHaveScreenshot": "assert driver.findElement(By.cssSelector($1)).getScreenshotAs(OutputType.FILE).exists()",
  "expect(locator).toHaveCSS": "assert driver.findElement(By.cssSelector($1)).getCssValue($2).equals($3)",
  "expect(locator).toHaveStyle": "assert driver.findElement(By.cssSelector($1)).getCssValue($2).equals($3)",
  "expect(locator).toHaveElement": "assert driver.findElements(By.cssSelector($1)).size() > 0",
  "expect(locator).toHaveNoElement": "assert driver.findElements(By.cssSelector($1)).size() == 0",
  "expect(locator).toHaveFocus": "assert driver.switchTo().activeElement().equals(driver.findElement(By.cssSelector($1)))",
  "expect(selector).toContainText": "assertTrue(driver.findElement(By.cssSelector($1)).getText().contains($2))",
  "expect(element).toContainText": "assertTrue($1.getText().contains($2))",
 
  


  
  // Waits
  "waitForSelector": "new WebDriverWait(driver, 10).until(ExpectedConditions.presenceOfElementLocated(By.cssSelector($1)))",
  "waitForTimeout": "Thread.sleep($1)",
  "waitForNavigation": "new WebDriverWait(driver, 10).until(ExpectedConditions.urlToBe($1))",
  "waitForResponse": "new WebDriverWait(driver, 10).until(ExpectedConditions.urlMatches($1))",
  "waitForEvent": "new WebDriverWait(driver, 10).until(ExpectedConditions.eventFired($1))",
  "waitForFunction": "new WebDriverWait(driver, 10).until(ExpectedConditions.function($1))",
  "waitForLoadState": "new WebDriverWait(driver, 10).until(ExpectedConditions.loadState($1))",
  "waitForRequest": "new WebDriverWait(driver, 10).until(ExpectedConditions.request($1))",
  "waitForAlert": "new WebDriverWait(driver, 10).until(ExpectedConditions.alertIsPresent())",


  
  // Keyboard and mouse
  "keyboard.press": "driver.findElement(By.cssSelector($1)).sendKeys(Keys.$2)",
  "mouse.move": "// Selenium does not support direct mouse move without Actions class",
  "mouse.click": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).click().perform()",
  "mouse.dblclick": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).doubleClick().perform()",
  "mouse.down": "new Actions(driver).clickAndHold(driver.findElement(By.cssSelector($1))).perform()",
  "mouse.up": "new Actions(driver).release(driver.findElement(By.cssSelector($1))).perform()",
  "mouse.wheel": "new Actions(driver).scrollToElement(driver.findElement(By.cssSelector($1))).perform()",
  "mouse.dragAndDrop": "new Actions(driver).dragAndDrop(driver.findElement(By.cssSelector($1)), driver.findElement(By.cssSelector($2))).perform()",
  "mouse.hover": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).perform()",
  "mouse.selectText": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).clickAndHold().moveToElement(driver.findElement(By.cssSelector($2))).release().perform()",
  "mouse.scroll": "new Actions(driver).scrollToElement(driver.findElement(By.cssSelector($1))).perform()",
  "mouse.contextMenu": "new Actions(driver).contextClick(driver.findElement(By.cssSelector($1))).perform()",
  "mouse.rightClick": "new Actions(driver).contextClick(driver.findElement(By.cssSelector($1))).perform()",
  "mouse.middleClick": "new Actions(driver).clickAndHold(driver.findElement(By.cssSelector($1))).perform()",
  "mouse.press": "new Actions(driver).clickAndHold(driver.findElement(By.cssSelector($1))).perform()",
  "mouse.release": "new Actions(driver).release(driver.findElement(By.cssSelector($1))).perform()",
  "mouse.selectOption": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).click().perform()",
  "mouse.selectTextByPosition": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1)), $2, $3).clickAndHold().moveToElement(driver.findElement(By.cssSelector($4)), $5, $6).release().perform()",
  "mouse.selectTextByRange": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).clickAndHold().moveToElement(driver.findElement(By.cssSelector($2))).release().perform()",
  "mouse.selectTextByOffset": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1)), $2, $3).clickAndHold().moveToElement(driver.findElement(By.cssSelector($4)), $5, $6).release().perform()",
  "mouse.selectTextByElement": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).clickAndHold().moveToElement(driver.findElement(By.cssSelector($2))).release().perform()",
  "mouse.selectTextByLocator": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).clickAndHold().moveToElement(driver.findElement(By.cssSelector($2))).release().perform()",
  "mouse.selectTextByCSS": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).clickAndHold().moveToElement(driver.findElement(By.cssSelector($2))).release().perform()",
  "mouse.selectTextByXPath": "new Actions(driver).moveToElement(driver.findElement(By.xpath($1))).clickAndHold().moveToElement(driver.findElement(By.xpath($2))).release().perform()",
  "mouse.selectTextByTag": "new Actions(driver).moveToElement(driver.findElement(By.tagName($1))).clickAndHold().moveToElement(driver.findElement(By.tagName($2))).release().perform()",
  "mouse.selectTextByClass": "new Actions(driver).moveToElement(driver.findElement(By.className($1))).clickAndHold().moveToElement(driver.findElement(By.className($2))).release().perform()",
  "mouse.selectTextById": "new Actions(driver).moveToElement(driver.findElement(By.id($1))).clickAndHold().moveToElement(driver.findElement(By.id($2))).release().perform()",
  "mouse.selectTextByName": "new Actions(driver).moveToElement(driver.findElement(By.name($1))).clickAndHold().moveToElement(driver.findElement(By.name($2))).release().perform()",
  "mouse.selectTextByLinkText": "new Actions(driver).moveToElement(driver.findElement(By.linkText($1))).clickAndHold().moveToElement(driver.findElement(By.linkText($2))).release().perform()",
  "mouse.selectTextByPartialLinkText": "new Actions(driver).moveToElement(driver.findElement(By.partialLinkText($1))).clickAndHold().moveToElement(driver.findElement(By.partialLinkText($2))).release().perform()",
  "mouse.selectTextByAttribute": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).clickAndHold().moveToElement(driver.findElement(By.cssSelector($2))).release().perform()",
  "mouse.selectTextByData": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).clickAndHold().moveToElement(driver.findElement(By.cssSelector($2))).release().perform()",
  "mouse.selectTextByRole": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).clickAndHold().moveToElement(driver.findElement(By.cssSelector($2))).release().perform()",
  "mouse.selectTextByText": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).clickAndHold().moveToElement(driver.findElement(By.cssSelector($2))).release().perform()",
  "mouse.selectTextByValue": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).clickAndHold().moveToElement(driver.findElement(By.cssSelector($2))).release().perform()",
  "mouse.selectTextByPlaceholder": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).clickAndHold().moveToElement(driver.findElement(By.cssSelector($2))).release().perform()",
  "mouse.selectTextByLabel": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).clickAndHold().moveToElement(driver.findElement(By.cssSelector($2))).release().perform()",
  "mouse.selectTextByOption": "new Actions(driver).moveToElement(driver.findElement(By.cssSelector($1))).clickAndHold().moveToElement(driver.findElement(By.cssSelector($2))).release().perform()",

  //Browser Control
  "browser.close": "driver.quit()",
  "browser.newPage": "driver = new ChromeDriver()",
  


};