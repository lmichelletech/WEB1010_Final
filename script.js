// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'
var quoteT = document.querySelector('.quote-text')
var quoteA = document.querySelector('.quote-author')
var button = document.querySelector('.button')

function getQuote() {
    $.ajax({
        url: API_URL,
        dataType: 'json',
        success: function(data){
            
            console.log(data.quoteText)
            console.log(data.quoteAuthor)
            
            quoteT.textContent = data.quoteText
            quoteA.textContent = data.quoteAuthor
        },
        error: function(error){

        }
    })
    .done(function (response) {
        console.log(response);

        
    })
}

button.addEventListener('click', function(e){
    getQuote()
})
    

    

