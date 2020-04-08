'use strict';

import { initDb } from "./db";

initDb();

export const renderEdit = () => {
  const formElement = document.getElementById('edit');
  formElement.append('hello');
};

export const renderMain = () => {
  let bookList = JSON.parse(localStorage.bookList);
  const listElement = document.getElementById('main');
  bookList.forEach(book => {

    const element = document.createElement('details');
    element.innerHTML = `
      <summary>
        <div>${book.title}</div>
      </summary>
      <div class="book-content">
        <img src="${book.img[0]}" />
        <div class="book-description">
          <span>
            <strong>Автор:</strong> ${book.authors[0]}
          </span>
          <span>
            <strong>Дата издательства:</strong> ${book.publishing_date}
          </span>
          <span>
            <strong>Адрес издательства:</strong> ${book.publishing_address}
          </span>
          <span>
            <strong>Телефон издательства:</strong> ${book.publishing_phone}
          </span>
        </div>
      </div>
    `;

    listElement.append(element);
  })
};
