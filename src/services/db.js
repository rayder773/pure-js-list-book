import bookListFromJSON from '../assets/bookList';

let bookList = null;

/**
 * @returns {Booklist from LocalStore}
 */
export const getBookList = () => {
  return bookList;
};

/**
 * @param {Array} list
 */
export const setBookList = (list) => {
  bookList = list;
  return localStorage.setItem('bookList', JSON.stringify(list));
};

/**
 *
 * @param {Array} list
 */
export const filterBookList = (list) => {
  bookList = list;
};

/**
 * If no book in localStorage - set it
 */
export const initDb = () => {
  const list = getBookList();
  if(list === null) {
    setBookList(bookListFromJSON);
  }
};
