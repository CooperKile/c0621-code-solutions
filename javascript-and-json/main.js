var books = [
  {
    title: 'Lord of the rings',
    author: 'JRR Tolkien',
    isbn: '123456789101'
  },
  {
    title: 'The Hobbit',
    author: 'JRR Tolkien',
    isbn: '223355779900'
  },
  {
    title: 'The Silmarillion',
    author: 'JRR Tolkien',
    isbn: '109876543211'
  }];
console.log(JSON.stringify(books));

console.log(JSON.parse(JSON.stringify({
  sudent: 'Cooper',
  number: 'id'
})));
