import { setIsEdit, setBookNumber } from "../../../store";
import {getBookList, setBookList} from "../../../services/db";
import { FORM, goToRoute } from "../../../services/goToRoute";
import image_404 from '../../../assets/images/image_404.jpg';

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
};

const setImage = (img) => {
  if(!img) {
    return image_404;
  }
  return (/^http/).test(img[0]) ? img : '';
};

let Home = {
  render: async () => {
    let books = await getBookList();

    let view = ``;

    books.forEach((book, i) => {
      view += `
        <div class="book-section">
          <details>
            <summary>
              <div>${book.title || '-'}</div>
            </summary>
            <div class="book-content">
              <button class="prev-img-btn" attr="${i}"> < </button>
<!--               //TODO-->
              <img class="book-img" id="book-img-${i}" src="${setImage(book.img) || image_404}" /> 
              <button class="next-img-btn" attr="${i}"> > </button>
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
    const bookList = getBookList();

    const closeButtons = Array.from(document.getElementsByClassName('delete-btn')).forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const index = e.target.attributes.attr.value;
        bookList.splice(index, 1);
        setBookList(bookList);
        document.getElementById('page_container').innerHTML = await Home.render();
        await Home.after_render();
      })
    });

    const editBtn = Array.from(document.getElementsByClassName('edit-btn')).forEach(item => {
      item.addEventListener('click', (e) => {
        const index = e.target.attributes.attr.value;
        setBookNumber(index);
        setIsEdit(true);
        goToRoute(FORM);
      })
    });

    const nextBtn = Array.from(document.getElementsByClassName('next-img-btn')).forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();

        const index = e.target.attributes.attr.value;
        const bookImageElement = document.getElementById(`book-img-${index}`)
        const bookImageUrls = bookList[index].img;

        const indexOfBook = bookImageUrls.indexOf(bookImageElement.src);

        if(bookImageUrls.length - 1 > indexOfBook) {
          bookImageElement.src = bookImageUrls[indexOfBook + 1]
        } else {
          bookImageElement.src = bookImageUrls[0]
        }
      })
    });

    const prevBtn = Array.from(document.getElementsByClassName('prev-img-btn')).forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();

        const index = e.target.attributes.attr.value;
        const bookImageElement = document.getElementById(`book-img-${index}`)
        const bookImageUrls = bookList[index].img;

        const indexOfBook = bookImageUrls.indexOf(bookImageElement.src);

        if(indexOfBook > 0) {
          bookImageElement.src = bookImageUrls[indexOfBook - 1]
        } else {
          bookImageElement.src = bookImageUrls[bookImageUrls.length - 1]
        }
      })
    });
  }

}

export default Home;
