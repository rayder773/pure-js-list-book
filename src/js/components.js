'use strict';

import {initDb} from "./db";

initDb();

let bootNumber;
let isEdit = false;

export const renderEdit = () => {
  const formElement = document.getElementById('edit');
  const bookList = JSON.parse(localStorage.getItem('bookList'));


  const mainForm = document.createElement('form');
  mainForm.innerHTML = `
     <form id="main-form"">
      <div>
        <label for="title">Name</label>
        <input id="title" name="title" required/>
      </div>
       <div>
         <label for="img">url for image</label>
         <input id="img" name="img" />
      </div>
      <div>
         <label for="authors">authors</label>
         <input id="authors" name="authors" />
      </div>
      <div>
         <label for="genre">genre</label>
         <input id="genre" name="genre" />
      </div>
       <div>
         <label for="publishing_date">publishing_date</label>
         <input id="publishing_date" name="publishing_date" />
      </div>
      <div>
         <label for="publishing_name">publishing_name</label>
         <input id="publishing_name" name="publishing_name" />
      </div>
      <div>
         <label for="publishing_address">publishing_address</label>
         <input id="publishing_address" name="publishing_address" />
      </div>
      <div>
         <label for="publishing_phone">publishing_phone</label>
         <input id="publishing_phone" name="publishing_phone" />
      </div>
      <button type="submit">Submit</button>
    </form>
  `;

  mainForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const values = {
      title: document.getElementById('title').value,
      img: document.getElementById('img').value,
      authors: document.getElementById('authors').value,
      genre: document.getElementById('genre').value,
      publishing_name: document.getElementById('publishing_name').value,
      publishing_address: document.getElementById('publishing_address').value,
      publishing_phone: document.getElementById('publishing_phone').value,
    };

    if (isEdit) {
      bookList[bootNumber] = values;
      isEdit = false;
      bootNumber = null;
    } else {
      bookList.push({
        ...values,
      });
    }

    localStorage.setItem('bookList', JSON.stringify(bookList));

    for (let item in values) {
      document.getElementById(item).value = '';
    }

    window.location.href = '#main';
  });
  formElement.append(mainForm);

  const book = bookList[bootNumber];

  for (let b in book) {
    document.getElementById(b).value = book[b];
  }

};

export const renderMain = () => {
  let bookList = JSON.parse(localStorage.bookList);
  const listElement = document.getElementById('main');
  bookList.forEach((book, i) => {

    const element = document.createElement('details');
    element.innerHTML = `
      <summary>
        <div>${book.title}</div>
        <div class="close-btn" attr=${i}>X</div>
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
          <span>
            <strong class="edit-btn" attr=${i}>EDIT</strong>
          </span>
        </div>
      </div>
    `;

    listElement.append(element);
  });
  const closeButtons = Array.from(document.getElementsByClassName('close-btn')).forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const index = e.target.attributes.attr.value;
      const bookList = JSON.parse(localStorage.getItem('bookList'));
      bookList.splice(index, 1);
      localStorage.setItem('bookList', JSON.stringify(bookList));
      listElement.innerHTML = '';
      renderMain()
    })
  });

  const editBtn = Array.from(document.getElementsByClassName('edit-btn')).forEach(item => {
    item.addEventListener('click', (e) => {
      const index = e.target.attributes.attr.value;
      bootNumber = index;
      isEdit = true;
      window.location.href = '#edit';
    })
  });
};
