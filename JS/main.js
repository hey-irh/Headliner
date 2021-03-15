var theGuardian;
var bbc;
var mirror;
var theTimes;
var dailyMail;
var allNews;
var headLines = [];

let bbcDiv = document.querySelector('#bbcDiv');
let guardianDiv = document.querySelector('#guardianDiv');
let timesDiv = document.querySelector('#timesDiv');
let dailymailDiv = document.querySelector('#dailymailDiv');
let mirrorDiv = document.querySelector('#mirrorDiv');

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

//function to collate all news
function concat() {
  if (dailyMail !== 'undefined') {
    allNews = theGuardian.concat(bbc, mirror, theTimes, dailyMail);
    allNews.forEach((allNews) => headLines.push(allNews.title));
    Display(allNews);
    console.log(allNews);
    // findHeadlines(headLines);
  } else concat();
}

//function to find top topics by looking for most common word
// function findHeadlines(headLines) {
//   let wordsarray = [];
//   headLines.forEach((headlines) => wordsarray.push(...headlines.split(' ')));

//   console.log(wordsarray);

//   const filteredarray = wordsarray.filter(
//     (word) =>
//       word !== 'to' || word !== 'for' || word !== 'and' || word !== 'but'
//   );

//   var counts = {};
//   var compare = 0;
//   var mostFrequent;
//   (function (array) {
//     for (var i = 0, len = array.length; i < len; i++) {
//       var word = array[i];

//       if (counts[word] === undefined) {
//         counts[word] = 1;
//       } else {
//         counts[word] = counts[word] + 1;
//       }
//       if (counts[word] > compare) {
//         compare = counts[word];
//         mostFrequent = filteredarray[i];
//       }
//     }
//     console.log(mostFrequent);
//     return mostFrequent;
//   })(filteredarray);

//   console.log(mostFrequent);
// }

function Display(news) {
  news.forEach((element) => {
    const div = document.createElement('div');
    const image = document.createElement('img');
    div.innerText = `${element.title}`;
    image.src = element.urlToImage;
    if (element.source.name === 'BBC News') {
      bbcDiv.appendChild(image);
      bbcDiv.appendChild(div);
    } else if (element.source.name === 'The Guardian') {
      guardianDiv.appendChild(image);
      guardianDiv.appendChild(div);
    } else if (element.source.name === 'The Times') {
      timesDiv.appendChild(image);
      timesDiv.appendChild(div);
    } else if (element.source.name === 'Mirror Online') {
      mirrorDiv.appendChild(image);
      mirrorDiv.appendChild(div);
    } else if (element.source.name === 'Daily Mail') {
      dailymailDiv.appendChild(image);
      dailymailDiv.appendChild(div);
    }
  });
}
