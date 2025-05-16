const error = document.getElementById('error');
const quoteList = document.getElementById('quoteList');
const search = document.getElementById('search');


let quotes = [];

async function getQuotes() {
    try {
        const res = await fetch('/api/quotes');
        if(!res.ok) {
            throw new Error('Failed to fetch quotes');
        }
        data = await res.json();
        quotes = data.quotes;
        renderQuotes();
    }catch(err) {
        error.textContent = 'failed to find quotes';
    }
}

function renderQuotes() {
    quoteList.innerHTML = '';
    quotes.forEach(quote => {
        const li = document.createElement('li');
        li.textContent = quote;
        quoteList.appendChild(li);
    });
}

function searchForQuotes() {
   const searchQuote  = search.value.tolowerCase();
   const filter = quotes.filter(quote => quote.toLowerCase().includes(searchQuote));
   renderQuotes(filter);
}

