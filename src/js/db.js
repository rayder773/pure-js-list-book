'use strict';

import bookList from '../assets/bookList';

export const initDb = () => {
  localStorage.setItem('bookList', JSON.stringify(bookList));
};
