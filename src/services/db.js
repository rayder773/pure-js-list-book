import bookList from '../assets/bookList';

export const getBookList = () => {
  return JSON.parse(localStorage.getItem('bookList'));
};

export const setBookList = (list) => {
  localStorage.setItem('bookList', JSON.stringify(list));
};

export const initDb = () => {
  const list = getBookList();
  if(list !== undefined) {
    setBookList(bookList);
  }
};
