import {getIsEdit, getBookNumber, setIsEdit, setBookNumber} from "../../../store";
import {getBookList} from "../../../services/db";

import './style.scss';

const isEdit = getIsEdit();
const bookList = getBookList();
const bookNumber = getBookNumber();

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
    return `
      <section class="section">
        <form id="main-form"">
          <div>
            <label for="title">${label.name}</label>
            <input id="title" name="title" required/>
          </div>
          <div>
            <label for="img">${label.imageUrl}</label>
            <input id="img" name="img" />
          </div>
          <div>
            <label for="authors">${label.author}</label>
            <input id="authors" name="authors" />
          </div>
          <div>
             <label for="genre">${label.genre}</label>
             <input id="genre" name="genre" />
          </div>
           <div>
             <label for="publishing_date">${label.publishingDate}</label>
             <input id="publishing_date" name="publishing_date" />
          </div>
          <div>
             <label for="publishing_name">${label.publishingName}</label>
             <input id="publishing_name" name="publishing_name" />
          </div>
          <div>
             <label for="publishing_address">${label.publishingAddress}</label>
             <input id="publishing_address" name="publishing_address" />
          </div>
          <div>
             <label for="publishing_phone">${label.publishingPhone}</label>
             <input id="publishing_phone" name="publishing_phone" />
          </div>
          <button type="submit" id="submit_btn">${isEdit ? editButton : createButton}</button>
        </form>
      </section>
    `
  },
  after_render: async () => {
    document.getElementById("submit_btn").addEventListener("click", (e) => {
      e.preventDefault();
      const title = document.getElementById('title');
      const img = document.getElementById('img');
      const authors = document.getElementById('authors');
      const genre = document.getElementById('genre');
      const publishingName = document.getElementById('publishing_name');
      const publishingAddress = document.getElementById('publishing_address');
      const publishingPhone = document.getElementById('publishing_phone');

      const values = {
        title,
        img,
        authors,
        genre,
        publishingName,
        publishingAddress,
        publishingPhone
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

    })
  }
};

export default Form;
