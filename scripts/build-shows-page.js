const show1 = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Nov 16 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

/*
<h1 class="shows__title">Shows</h1>
<h3 class="shows__subtitle--date">DATE</h3>
<h4 class="shows__date">Mon Sept 09 2024</h4>
<h3 class="shows__subtitle--ven">VENUE</h3>
<h4 class="shows__venue">Ronald Lane</h4>
<h3 class="shows__subtitle--loc">LOCATION</h3>
<h4 class="shows__location">San Francisco, CA</h4>
<button class="shows__button">BUY TICKETS</button> */

const showListEle = document.querySelector(".shows__title1");
console.log(showListEle);

function displayShows() {
  //showListEle.innerHTML = "";
  show1.forEach((show) => {
    displayShow(show);
  });
}

function displayShow(show) {
  const showEle = document.createElement("article");
  showEle.classList.add("shows-list");

  const showDateEle = document.createElement("h3");
  showDateEle.classList.add("shows__subtitle--date");
  showDateEle.textContent = "DATE";
  showEle.appendChild(showDateEle);

  const showDateCon = document.createElement("h4");
  showDateCon.classList.add("shows__date");
  showDateCon.textContent = show.date;
  showEle.appendChild(showDateCon);

  const showVenueEle = document.createElement("h3");
  showVenueEle.classList.add("shows__subtitle--ven");
  showVenueEle.textContent = "VENUE";
  showEle.appendChild(showVenueEle);

  const showVenueCon = document.createElement("h4");
  showVenueCon.classList.add("shows__venue");
  showVenueCon.textContent = show.venue;
  showEle.appendChild(showVenueCon);

  const showLocEle = document.createElement("h3");
  showLocEle.classList.add("shows__subtitle--loc");
  showLocEle.textContent = "LOCATION";
  showEle.appendChild(showLocEle);

  const showLocCon = document.createElement("h4");
  showLocCon.classList.add("shows__location");
  showLocCon.textContent = show.location;
  showEle.appendChild(showLocCon);

  const showButton = document.createElement("button");
  showButton.classList.add("shows__button");
  showButton.textContent = "BUY TICKETS";
  showEle.appendChild(showButton);

  const showDivider = document.createElement("hr");
  showDivider.classList.add("solid");
  showEle.appendChild(showDivider);

  showListEle.appendChild(showEle);
}

displayShows();
