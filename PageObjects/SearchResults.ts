import { NightwatchBrowser } from "nightwatch";

export class SearchResults {
  private readonly featuredResultsCss: string = "[data-q=featuredresults]";
  private browser: NightwatchBrowser;

  constructor(browser: NightwatchBrowser) {
    this.browser = browser;
  }

  public verifyFeaturedResultsAreReturnedSuccessfullyWithin(
    milliseconds: number
  ): void {
    this.browser.expect
      .element(this.featuredResultsCss)
      .to.be.present.before(milliseconds);
  }
}
