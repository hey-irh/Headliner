async function getNews() {
  const response = await fetch(`http://localhost:5000/news`);
  console.log(response);
  const { payload } = await response.json();
  console.log(payload);
}

getNews();
