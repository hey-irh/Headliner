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

app.get('/news', async function (req, res) {
  const news = await newsapi.v2.everything({
    language: 'en',
    domains:
      'bbc.co.uk, theguardian.com, mirror.co.uk, thetimes.co.uk, dailymail.co.uk',
  });
  console.log(news);
  res.json({ success: true, payload: news });
  console.log(news);
});
