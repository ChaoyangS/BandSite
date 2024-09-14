const BandSite1 = new BandSiteApi(apiKey);
const show1 = await BandSite1.getShows();
const showListEle = document.querySelector(".shows__title1");

function displayShows() {
  show1.forEach((show) => {
    displayShow(show);
  });
}

function displayShow(show) {
  const showEle = document.createElement("article");
  showEle.classList.add("shows-list");

  const showSec = document.createElement("article");
  showSec.classList.add("shows-section");
  showEle.appendChild(showSec);

  const showDateEle = document.createElement("h3");
  showDateEle.classList.add("shows__subtitle--date");
  showDateEle.textContent = "DATE";
  showSec.appendChild(showDateEle);

  const showDateCon = document.createElement("h4");
  showDateCon.classList.add("shows__date");
  showDateCon.textContent = convertTime(show.date);
  showSec.appendChild(showDateCon);

  const showVenueEle = document.createElement("h3");
  showVenueEle.classList.add("shows__subtitle--ven");
  showVenueEle.textContent = "VENUE";
  showSec.appendChild(showVenueEle);

  const showVenueCon = document.createElement("h4");
  showVenueCon.classList.add("shows__venue");
  showVenueCon.textContent = show.place;
  showSec.appendChild(showVenueCon);

  const showLocEle = document.createElement("h3");
  showLocEle.classList.add("shows__subtitle--loc");
  showLocEle.textContent = "LOCATION";
  showSec.appendChild(showLocEle);

  const showLocCon = document.createElement("h4");
  showLocCon.classList.add("shows__location");
  showLocCon.textContent = show.location;
  showSec.appendChild(showLocCon);

  const showButton = document.createElement("button");
  showButton.classList.add("shows__button");
  showButton.textContent = "BUY TICKETS";
  showSec.appendChild(showButton);

  const showDivider = document.createElement("hr");
  showDivider.classList.add("solid");
  showEle.appendChild(showDivider);

  showListEle.appendChild(showEle);
}

function convertTime(timestamp) {
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

displayShows();
