import { NightwatchBrowser } from "nightwatch";
import { SearchResults } from "./SearchResults";

export class Homepage {
  private readonly searchBoxCss: string = "[data-q=search-keyword-field]";
  private readonly locationBoxCss: string = "[data-q=search-location-field]";
  private readonly searchSubmitButtonCss: string = "[data-q=search-button]";
  private browser: NightwatchBrowser;

  constructor(browser: NightwatchBrowser) {
    this.browser = browser;
  }

  public open(): Homepage {
    this.browser.url(this.browser.launch_url);
    return this;
  }

  public searchForItemInLocation(
    item: string,
    location: string
  ): SearchResults {
    this.browser
      .waitForElementVisible(this.searchBoxCss)
      .setValue(this.searchBoxCss, item)
      .waitForElementVisible(this.locationBoxCss)
      .setValue(this.locationBoxCss, location)
      .waitForElementVisible(this.searchSubmitButtonCss)
      .click(this.searchSubmitButtonCss);
    return new SearchResults(this.browser);
  }
}
