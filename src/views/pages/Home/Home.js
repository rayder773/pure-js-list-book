import { getBookList } from '../../../services/db';
import {getElementById, getElementsByClassName} from '../../../services/dom-manipulations';
import {
  DIRECTION,
  handleChangeImage,
  handleCheckboxClick,
  handleDeleteBook,
  handleEditBook,
  setImage
} from './eventHandlers';

import './style.scss';

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
  filterByName: 'Фильтровать по имени',
};

const setCheckBox = (i) => {
  return `${i === 0 ? `<div>
  <input type="checkbox" id="filter-by-name-checkbox" />
  <label>${label.filterByName}</label>
</div>` : ''}`
};

let Home = {
  render: async () => {
    let books = getBookList();

    let view = ``;

    books.forEach((book, i) => {
      view += `
        <div class='book-section'>
          <details>
            <summary>
              <div>${book.title}</div>
            </summary>
            <div class='book-content'>
              <div class='prev-img-btn' attr='${i}'></div>
              <img class='book-img' id='book-img-${i}' src='${setImage(book.img[0])}' /> 
              <div class='next-img-btn' attr='${i}'>
              </div>
              <div class='book-description'>
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
                <span class='book-content-buttons'>
                  <div class='edit-btn' attr=${i}>${buttonNames.edit}</div>
                  <div class='delete-btn' attr=${i}>${buttonNames.delete}</div>
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

    const filterByNameCheckboxElement = getElementById('filter-by-name-checkbox');
    filterByNameCheckboxElement.addEventListener('click', (e) => handleCheckboxClick(e))
  }
};

export default Home;
