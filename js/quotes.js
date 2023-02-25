let url = 'https://api.kanye.rest/';
let loadQuotes = () => {
    fetch(url)
    .then (res => res.json())
    .then(data => displayQuotes(data))
};

function displayQuotes(data) {
  let container = document.getElementById('quotes')
  container.innerText = data.quote;

};
loadQuotes()


// function loeadq() {
// location.reload();
// }