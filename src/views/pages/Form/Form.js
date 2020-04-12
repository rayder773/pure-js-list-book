import {getBookNumber, getIsEdit, setBookNumber, setIsEdit} from "../../../store";
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

const ids = {
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
    let bookNumber = getBookNumber();

    document.getElementById("main-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const imageValues = Array.from(document.getElementsByClassName('input-for-image')).map(img => img.value);
      const values = {
        title: document.getElementById('title').value,
        img: imageValues,
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

    document.getElementById(ids.addInput).addEventListener('click', (e) => {
      e.preventDefault();

      const inputForImageElement = document.getElementById(ids.inputForImage);
      const newInput = document.createElement('input');
      const newButton = document.createElement('button');
      const newDiv = document.createElement('div');

      newInput.className = 'input-for-image';
      newButton.className = 'delete-input-btn';
      newButton.type = 'button';
      newButton.addEventListener('click', (e) => {
        const parent = e.target.parentElement;
        parent.remove();
      });

      newDiv.className = 'input-for-image-additional';
      newDiv.append(newInput, newButton);

      inputForImageElement.append(newDiv);
    });

    if (isEdit) {
      let bookNumber = getBookNumber();
      const book = bookList[bookNumber];

      for (let b in book) {
        if (b === 'img') {
          document.getElementById('img').value = book.img[0];
          book.img.shift();
          book[b].forEach(item => {
            const inputForImageElement = document.getElementById(ids.inputForImage);
            const newInput = document.createElement('input');
            const newButton = document.createElement('button');
            const newDiv = document.createElement('div');

            newInput.className = 'input-for-image';

            newInput.value = item;

            newButton.textContent = '-';
            newButton.className = 'delete-input-btn';
            newButton.type = 'button';
            newButton.addEventListener('click', (e) => {
              const parent = e.target.parentElement;
              parent.remove();
            });
            newDiv.className = 'input-for-image-additional';
            newDiv.append(newInput, newButton);

            inputForImageElement.append(newDiv);
          })
        } else {
          document.getElementById(b).value = book[b];
        }
      }
    }
  }
};

export default Form;
