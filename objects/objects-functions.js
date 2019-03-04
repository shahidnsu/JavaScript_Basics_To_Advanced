let myBook = {
    title : '1984',
    author : 'George Orwell',
    pageCount : 326
}

let otherBook = {
    title : 'The art of a good life',
    author : 'Dholf ',
    pageCount : 226
}

let bookSummary = function (book){
    console.log(`${book.title} by ${book.author}`);

}
bookSummary(otherBook);
bookSummary(myBook);


// returning objects from functions

let getSummary = function(book){
    return {
        summary  : `${book.title} by  ${book.author}`,
        pagesCount : `${book.title} is ${book.pageCount} pages long`
    }
}

console.log(getSummary(myBook));
console.log(getSummary(otherBook));