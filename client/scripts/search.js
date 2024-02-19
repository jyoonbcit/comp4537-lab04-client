const endPointRoot = "http://comp-4537-lab04-nine.vercel.app/api/";
// const endPointRoot = "http://localhost:8000/";
class Search {
    getResults(query) {
        let params = "?word=" + query;
        const url = endPointRoot + params
        xhr.open("GET", url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                return this.displayResults(xhr.responseText);
            }
        };
        xhr.send();
    }

    displayResults(results) {
        document.getElementById("response").innerHTML = results;
    }
}

const xhr = new XMLHttpRequest();
const search = new Search();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search").addEventListener("input", () => {
        // TODO: Input validation
        search.getResults(document.getElementById("search").value);
    });
});

export default Search;