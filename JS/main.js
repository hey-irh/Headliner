var theGuardian;
var bbc;
var mirror;
var theTimes;
var dailyMail;
var allNews;
var headLines = [];

// API call per publication due to limitation of free news api
async function getTheGuardian() {
  const response = await fetch(`http://localhost:5000/theguardian`);
  const { payload } = await response.json();
  console.log(payload);
  theGuardian = payload.articles;
  getBBC();
}

getTheGuardian();

async function getBBC() {
  const response = await fetch(`http://localhost:5000/bbc`);
  const { payload } = await response.json();
  console.log(payload);
  bbc = payload.articles;
  getMirror();
}

async function getMirror() {
  const response = await fetch(`http://localhost:5000/mirror`);
  const { payload } = await response.json();
  console.log(payload);
  mirror = payload.articles;
  getTheTimes();
}

async function getTheTimes() {
  const response = await fetch(`http://localhost:5000/thetimes`);
  const { payload } = await response.json();
  console.log(payload);
  theTimes = payload.articles;
  getDailyMail();
}

async function getDailyMail() {
  const response = await fetch(`http://localhost:5000/dailymail`);
  const { payload } = await response.json();
  console.log(payload);
  dailyMail = payload.articles;
  concat();
}

function concat() {
  if (dailyMail !== 'undefined') {
    allNews = theGuardian.concat(bbc, mirror, theTimes, dailyMail);
    allNews.forEach((allNews) => headLines.push(allNews.title));
    console.log(headLines);
  } else concat();
}
