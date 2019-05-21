import { NightwatchBrowser } from "nightwatch";
import { Homepage } from "../PageObjects/Homepage";

module.exports = {
  "Search for item should return results within required time": (
    browser: NightwatchBrowser
  ) => {
    const item: string = "iphone";
    const location: string = "london";
    const milliseconds: number = 1000;

    const homepage: Homepage = new Homepage(browser);
    homepage
      .open()
      .searchForItemInLocation(item, location)
      .verifyFeaturedResultsAreReturnedSuccessfullyWithin(milliseconds);

    browser.end();
  }
};
