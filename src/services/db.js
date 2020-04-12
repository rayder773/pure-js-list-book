import bookList from '../assets/bookList';

/**
 * @description return Book list from LocalStore
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
 *
 * @param {Array} list
 */
export const filterBookList = (list) => {
  setBookList(list)
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
