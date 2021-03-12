const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('2c7880703dde46bba0f3a7f808d7e380');
var today = new Date();
var todayformat = today.toISOString().substring(0, 10);

app.get('/theguardian', async function (req, res) {
  const news = await newsapi.v2.everything({
    language: 'en',
    from: todayformat,
    to: todayformat,
    sortBy: 'popularity',
    domains: 'theguardian.com',
  });
  console.log(news);
  res.json({ success: true, payload: news });
  console.log(news);
});

app.get('/bbc', async function (req, res) {
  const news = await newsapi.v2.everything({
    language: 'en',
    from: todayformat,
    to: todayformat,
    sortBy: 'popularity',
    domains: 'bbc.co.uk',
  });
  console.log(news);
  res.json({ success: true, payload: news });
  console.log(news);
});

app.get('/mirror', async function (req, res) {
  const news = await newsapi.v2.everything({
    language: 'en',
    from: todayformat,
    to: todayformat,
    sortBy: 'popularity',
    domains: 'mirror.co.uk',
  });
  console.log(news);
  res.json({ success: true, payload: news });
  console.log(news);
});

app.get('/thetimes', async function (req, res) {
  const news = await newsapi.v2.everything({
    language: 'en',
    from: todayformat,
    to: todayformat,
    sortBy: 'popularity',
    domains: 'thetimes.co.uk',
  });
  console.log(news);
  res.json({ success: true, payload: news });
  console.log(news);
});

app.get('/dailymail', async function (req, res) {
  const news = await newsapi.v2.everything({
    language: 'en',
    from: todayformat,
    to: todayformat,
    sortBy: 'popularity',
    domains: 'dailymail.co.uk',
  });
  console.log(news);
  res.json({ success: true, payload: news });
  console.log(news);
});
