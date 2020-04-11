import {getIsEdit, getBookNumber, setIsEdit, setBookNumber} from "../../../store";
import {getBookList, setBookList} from "../../../services/db";

import './style.scss';
import {goToRoute, HOME} from "../../../services/goToRoute";

const label = {
  name: 'Название',
  imageUrl: 'Ссылка на картинку',
  author: 'Автор(ы)',
  genre: 'Жанр',
  publishingDate: 'Дата издания',
  publishingName: 'Название издательства',
  publishingPhone: 'Контакты издательства',
  publishingAddress: 'Адрес издательства',
};

const createButton = 'Добавить книгу';
const editButton = 'Сохранить изменения';

let Form = {

  render: async () => {
    let isEdit = getIsEdit();
    let bookList = getBookList();
    return `
        <section class="section">
          <form id="main-form"">
            <div class="main-form-input-block">
              <label for="title">${label.name}</label>
              <input id="title" name="title" class="group__input" required/>
            </div>
            <div class="main-form-input-block">
              <label for="img">${label.imageUrl}</label>
              <input id="img" name="img" class="group__input" />
            </div>
            <div class="main-form-input-block">
              <label for="authors">${label.author}</label>
              <input id="authors" name="authors" class="group__input" />
            </div>
            <div class="main-form-input-block">
               <label for="genre">${label.genre}</label>
               <input id="genre" name="genre" class="group__input" />
            </div>
             <div class="main-form-input-block">
               <label for="publishing_date">${label.publishingDate}</label>
               <input id="publishing_date" name="publishing_date" class="group__input" />
            </div>
            <div class="main-form-input-block">
               <label for="publishing_name">${label.publishingName}</label>
               <input id="publishing_name" name="publishing_name" class="group__input" />
            </div>
            <div class="main-form-input-block">
               <label for="publishing_address">${label.publishingAddress}</label>
               <input id="publishing_address" name="publishing_address" class="group__input" />
            </div>
            <div class="main-form-input-block">
               <label for="publishing_phone">${label.publishingPhone}</label>
               <input id="publishing_phone" name="publishing_phone" />
            </div>
            <button type="submit" id="submit_btn">${isEdit ? editButton : createButton}</button>
          </form>
        </section>
    `
  },
  after_render: async () => {
    let isEdit = getIsEdit();
    const bookList = getBookList();
    let bookNumber = getBookNumber();

    document.getElementById("main-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const values = {
        title: document.getElementById('title').value,
        img: document.getElementById('img').value,
        authors: document.getElementById('authors').value,
        genre: document.getElementById('genre').value,
        publishing_name: document.getElementById('publishing_name').value,
        publishing_address: document.getElementById('publishing_address').value,
        publishing_phone: document.getElementById('publishing_phone').value,
        publishing_date: document.getElementById('publishing_date').value,
      };

      if (isEdit) {
        bookList[bookNumber] = values;
        setIsEdit(false);
        setBookNumber(null);
      } else {
        bookList.push({
          ...values,
        });
      }

      for (let item in values) {
        document.getElementById(item).value = '';
      }

      setBookList(bookList);
      goToRoute(HOME);

    });

    if (isEdit) {
      let bookNumber = getBookNumber();
      const book = bookList[bookNumber];

      for (let b in book) {
        document.getElementById(b).value = book[b];
      }
    }
  }
};

export default Form;
