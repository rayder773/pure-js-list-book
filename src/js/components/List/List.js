import './style.scss';
import {initDb} from "../../util/db";

initDb();

export default () => {
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
