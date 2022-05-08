const getTheTitles = function(arr) {
    let titles = arr.map(book => book.title)
    console.log(titles)
    return titles
};

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

getTheTitles(books)


// Do not edit below this line
module.exports = getTheTitles;
