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
    findHeadlines(headLines);
  } else concat();
}

function findHeadlines(headLines) {
  let array = [];
  headLines.forEach((headlines) => array.push(headlines.split(' ')));
  let words = array.join(' ');
  console.log(words);
  //words is currently a big string needs to be combined in to an array or remove the commas

  var counts = {};
  var compare = 0;
  var mostFrequent;
  (function (array) {
    for (var i = 0, len = array.length; i < len; i++) {
      var word = array[i];

      if (counts[word] === undefined) {
        counts[word] = 1;
      } else {
        counts[word] = counts[word] + 1;
      }
      if (counts[word] > compare) {
        compare = counts[word];
        mostFrequent = words[i];
      }
    }
    return mostFrequent;
  })(words);

  console.log(mostFrequent);
}
