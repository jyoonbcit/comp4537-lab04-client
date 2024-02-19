import message from "../user.js";
const endPointRoot = "https://comp4537-lab04-server.vercel.app/api/server.js/";
// const endPointRoot = "http://localhost:8000/";
class Store {
    createWord(word, definition) {
        xhr.open("POST", endPointRoot, true);
        // Set to text/plain because otherwise the server receives a preflight request
        xhr.setRequestHeader("Content-Type", "text/plain");
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                document.getElementById("response").innerHTML = xhr.responseText;
            } else {
                document.getElementById("response").innerHTML = message.processError;
            }
        };
        xhr.send("word=" + word + "&definition=" + definition);
    }
}

const xhr = new XMLHttpRequest();
const store = new Store();

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("create-word").addEventListener("click", () => {
        let word = document.getElementById("word").value;
        let definition = document.getElementById("definition").value;
        if (word === "" || definition === "" || !word.match(/^[a-zA-Z]+$/)) {
            console.log(word === "");
            console.log(definition === "");
            console.log(!word.match(/^[a-zA-Z]+$/));
            document.getElementById("response").innerHTML = message.validationError;
            return;
        } else {
            store.createWord(word, definition);
        }
    });
});

export default Store;
