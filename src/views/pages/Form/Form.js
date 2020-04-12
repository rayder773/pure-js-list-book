import { getBookNumber, getIsEdit } from "../../../store";
import { getBookList } from "../../../services/db";

import './style.scss';
import { handleAddInputButton, handleSubmit, insertContainerWithInput } from "./eventHandlers";
import { getElementById } from "../../../services/domManipulation";

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

export const ids = {
  form: 'main-form',
  addInput: 'add-input-btn',
  deleteInput: 'delete-input-btn',
  inputForImage: 'input-for-image'
};

const createButton = 'Добавить книгу';
const editButton = 'Сохранить изменения';

let Form = {

  render: async () => {
    let isEdit = getIsEdit();
    return `
        <section class="section">
          <form id="main-form">
            <div class="main-form-input-block">
              <label for="title">${label.name}</label>
              <input id="title" name="title" required/>
            </div>
            <div class="main-form-input-block">
              <label for="img">${label.imageUrl}</label>      
              <div id=${ids.inputForImage}>
                <div class="input-for-image-main">
                  <input id="img" name="img" class="input-for-image" />
                  <button id=${ids.addInput} type="button"></button>
                </div>
              </div>         
            </div>
            <div class="main-form-input-block">
              <label for="authors">${label.author}</label>
              <input id="authors" name="authors" />
            </div>
            <div class="main-form-input-block">
               <label for="genre">${label.genre}</label>
               <input id="genre" name="genre" />
            </div>
             <div class="main-form-input-block">
               <label for="publishing_date">${label.publishingDate}</label>
               <input id="publishing_date" name="publishing_date" />
            </div>
            <div class="main-form-input-block">
               <label for="publishing_name">${label.publishingName}</label>
               <input id="publishing_name" name="publishing_name" />
            </div>
            <div class="main-form-input-block">
               <label for="publishing_address">${label.publishingAddress}</label>
               <input id="publishing_address" name="publishing_address" />
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

    //listen form submit
    const form = getElementById('main-form');
    form.addEventListener('submit', (e) => handleSubmit(e));

    //listen add input button
    const addInputButton = getElementById(ids.addInput);
    addInputButton.addEventListener('click', (e) => handleAddInputButton(e));

    //if isEdit === true - create filled inputs with links
    if (isEdit) {
      let bookNumber = getBookNumber();
      const book = bookList[bookNumber];

      for (let b in book) {
        if (b === 'img') {
          getElementById('img').value = book.img[0];
          book.img.shift();
          book[b].forEach(item => {
            insertContainerWithInput(item);
          })
        } else {
          getElementById(b).value = book[b];
        }
      }
    }
  }
};

export default Form;
