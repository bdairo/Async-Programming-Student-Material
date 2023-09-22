/**
 * The datmuse api is used for a wide range of features, includingh autocomplete on text input fields, etc
 * Documentation: https://www.datamuse.com/api/
 * In this lab, we will be using the api to get a list of words similar to the word the user inputs
 * We will specifically be using the asyn/await syntax to do this
 */



/**
 * Information to reach API
 */
const url = 'https://api.datamuse.com/words?';
const queryParams = 'ml=';

/**
*  Selecting page elements
*/
const inputField = document.querySelector('#input');
const submitButton = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');


/**
 * Using fetch API => https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 */
const renderResponseToScreen = (res) => {
    
    if(!res){
      console.log(res.status);
    }
    // In case res comes back as a blank array
    if(!res.length){
      responseField.innerHTML = "<p>Try again!</p><p>There were no suggestions found!</p>";
      return;
    }
  
    // Creates an empty array to contain the HTML strings
    let wordList = [];
    // Loops through the response and caps off at 10
    for(let i = 0; i < Math.min(res.length, 10); i++){
      // creating a list of words
      wordList.push(`<li>${res[i].word}</li>`);
    }
    // Joins the array of HTML strings into one string
    wordList = wordList.join("");
  
    // Manipulates responseField to render the modified response
    responseField.innerHTML = `<p>You might be interested in:</p><ol>${wordList}</ol>`;
    return
  }


  /**
 * Asynchronous function with .then() syntax code goes here
 * Uses the renderResponseToScreen() Function after retrieving the data from the api
 * Uses the.json() method. => https://developer.mozilla.org/en-US/docs/Web/API/Response/json
 */

function makeRequestWithThenSyntax(){
  const wordQuery = inputField.value;
  const endpoint = url + queryParams + wordQuery;

  console.log('Making requests with .then() syntax...')
  fetch(endpoint, {cache: 'no-cache'})
      .then(response => {
          if(response.ok){
              return response.json();
          }
      })
      .then(jsonResponse => {
          renderResponseToScreen(jsonResponse);
      })
      .catch(error => {
        console.log(error);
      })
}


/**
 * Async Await Asynchronous function code goes here
 * Make sure to use the renderResponseToScreen() Function after retrieving the data from the api
 * Use the.json() method. => https://developer.mozilla.org/en-US/docs/Web/API/Response/json
 * Don't forget about the await keyword!
 */
async function makeRequestWithAsyncAwait(){
    // Write Code here

}

/**
 * Function which triggers the whole operation
 * this function will be sent in as a callback to the eventlistener function
 */
function displaySuggestions(event){
    event.preventDefault();
    while(responseField.firstChild){
        responseField.removeChild(responseField.firstChild)
    }

    // makeRequestWithAsyncAwait();
    makeRequestWithThenSyntax()
}

/**
 * Add an event listener to the submit button
 */
submitButton.addEventListener('click', displaySuggestions);