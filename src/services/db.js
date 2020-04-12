import bookList from '../assets/bookList';

/**
 * @returns {Booklist from LocalStore}
 */
export const getBookList = () => {
  return JSON.parse(localStorage.getItem('bookList'));
};

/**
 * @param {Array} list
 */
export const setBookList = (list) => {
  return localStorage.setItem('bookList', JSON.stringify(list));
};

/**
 * If no book in localStorage - set it
 */
export const initDb = () => {
  const list = getBookList();
  if(list === null) {
    setBookList(bookList);
  }
};
