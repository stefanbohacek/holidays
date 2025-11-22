import onReady from "./modules/onReady.js";
import backToTop from "./modules/backToTop.js";
// import downloadAll from "./modules/downloadAllEvents.js";
import handleSearch from "./modules/handleSearch.js";
import filterByTag from "./modules/filterByTag.js";
import addCurrentMonthDayLinks from "./modules/addCurrentMonthDayLinks.js";

onReady(() => {
  backToTop();
  handleSearch();
  filterByTag();
  addCurrentMonthDayLinks();
  // downloadAll();
});
