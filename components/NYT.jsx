import key from './NYT_API_KEY'

const API_KEY = key.apikey
const LIST_NAME = "hardcover-fiction"
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists";

function fetchBooks(list_name = LIST_NAME) {
    let url = `${API_STEM}/${LIST_NAME}?response-format-format=json&api-key=${API_KEY}`
    return fetch(url)
            .then(response=>response.json())
            .then(responseJson=>{
                return responseJson.results.books;
            })
            .catch(error=>{
                console.error(error)
            })
}

export default { fetchBooks:fetchBooks}