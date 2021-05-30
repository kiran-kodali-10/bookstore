export function fetchBooks() {
    const response = fetch('/books')
        .then(result => result.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
        return response
}

