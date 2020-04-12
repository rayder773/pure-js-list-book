import { setIsEdit, setBookNumber } from "../../../store";
import {getBookList, setBookList} from "../../../services/db";
import {FORM, goToRoute, HOME_COMPONENT} from "../../../services/goToRoute";
import image_404 from '../../../assets/images/image_404.jpg';

import './style.scss';
import {render} from "../../../services/render";
import {getAttributeValue, getElementById, getElementsByClassName} from "../../../services/dom-manipulations";
import {
  DIRECTION, handleChangeImage,
  handleDeleteBook,
  handleEditBook,
  handleNextImageButton,
  handlePrevImageButton,
  setImage
} from "./eventHandlers";

const buttonNames = {
  delete: 'Удалить',
  edit: 'Редактировать'
};

const label = {
  author: 'Автор(ы): ',
  genre: 'Жанр: ',
  publishingDate: 'Дата издания: ',
  publishingName: 'Название издательства: ',
  publishingPhone: 'Контакты издательства: ',
  publishingAddress: 'Адрес издательства: ',
};

let Home = {
  render: async () => {
    let books = getBookList();

    let view = ``;

    books.forEach((book, i) => {
      view += `
        <div class="book-section">
          <details>
            <summary>
              <div>${book.title}</div>
            </summary>
            <div class="book-content">
              <div class="prev-img-btn" attr="${i}"></div>
              <img class="book-img" id="book-img-${i}" src="${setImage(book.img[0])}" /> 
              <div class="next-img-btn" attr="${i}">
              </div>
              <div class="book-description">
                <span>
                  <strong>${label.author}</strong> ${book.authors || '-'}
                </span>
                <span>
                  <strong>${label.publishingName}</strong> ${book.publishing_name || '-'}
                </span>
                <span>
                  <strong>${label.publishingDate}</strong> ${book.publishing_date || '-'}
                </span>
                <span>
                  <strong>${label.publishingAddress}</strong> ${book.publishing_address || '-'}
                </span>
                <span>
                  <strong>${label.publishingPhone}</strong> ${book.publishing_phone || '-'}
                </span>
                <span class="book-content-buttons">
                  <div class="edit-btn" attr=${i}>${buttonNames.edit}</div>
                  <div class="delete-btn" attr=${i}>${buttonNames.delete}</div>
                </span>
              </div>
            </div>
          </details>
        </div>
        `;
    });
    return view;
  },
  after_render: async () => {
    const deleteButtons = getElementsByClassName('delete-btn').forEach(btn => handleDeleteBook(btn));
    const editBtn = getElementsByClassName('edit-btn').forEach(btn => handleEditBook(btn));
    const nextBtn = getElementsByClassName('next-img-btn').forEach(btn => handleChangeImage(btn, DIRECTION.next));
    const prevBtn = getElementsByClassName('prev-img-btn').forEach(btn => handleChangeImage(btn, DIRECTION.prev));
  }
};

export default Home;
