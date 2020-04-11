'use strict';

import bookList from '../../assets/bookList';

export const initDb = () => {
  if(JSON.parse(localStorage.getItem('bookList')) !== undefined) {
    localStorage.setItem('bookList', JSON.stringify(bookList));
  }
};
