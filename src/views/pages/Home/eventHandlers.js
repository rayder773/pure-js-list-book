import {getAttributeValue, getElementById} from "../../../services/dom-manipulations";
import {filterBookList, getBookList, setBookList} from "../../../services/db";
import {render} from "../../../services/render";
import {FORM, goToRoute, HOME_COMPONENT} from "../../../services/goToRoute";
import {setBookNumber, setIsEdit} from "../../../store";
import image_404 from "../../../assets/images/image_404.jpg";

export const DIRECTION = {
  next: 'next',
  prev: 'prev',
};

/**
 * @description delete book from list and rerender home page
 * @param {Element} btn
 */
export const handleDeleteBook = (btn) => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();

    //get book list from local storage
    const bookList = getBookList();

    //get attribute of button from html which init event
    const index = getAttributeValue(e);

    //remove book from array by found index
    bookList.splice(index, 1);

    //set new book list
    setBookList(bookList);

    //rerender home page
    await render(HOME_COMPONENT);
  })
};

/**
 * @description route to form page with filled fields of current book
 * @param {Element} btn
 */
export const handleEditBook = (btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    //get attribute of button from html which init event
    const index = getAttributeValue(e);

    //set global variable bookNumber from store.js for we know which book we should edit
    setBookNumber(index);

    //set global variable isEdit fro store.js for let inputs be filled with needed info
    setIsEdit(true);

    //redirect to form page
    goToRoute(FORM);
  })
};

/**
 * @description handle change of image according to direction variable
 * @param {Element} btn
 * @param {String} direction
 */
export const handleChangeImage = (btn, direction) => {
  let lastImageIndex = 0;
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const bookList = getBookList();

    const index = getAttributeValue(e);
    const bookImageElement = getElementById(`book-img-${index}`);
    const bookImageUrls = bookList[index].img;

    let indexOfBook = bookImageUrls.indexOf(bookImageElement.src);
    if(indexOfBook === -1) {
      indexOfBook = lastImageIndex + 1;
    }
    lastImageIndex++;
    if (lastImageIndex > bookImageUrls.length - 1) {
      lastImageIndex = 0
    }

    switch (direction) {
      case DIRECTION.next:
        if(bookImageUrls.length - 1 > indexOfBook) {
          console.log(lastImageIndex, indexOfBook)
          bookImageElement.src = setImage(bookImageUrls[indexOfBook + 1])
        } else {
          bookImageElement.src = setImage(bookImageUrls[0]);
        }
        break;

      case DIRECTION.prev:
        if(indexOfBook > 0) {
          bookImageElement.src = setImage(bookImageUrls[indexOfBook - 1]);
        } else {
          bookImageElement.src = setImage(bookImageUrls[bookImageUrls.length - 1])
        }
        break;
    }
  })
};

export const handleCheckboxClick = async (e) => {
  const isChecked = e.target.checked;
  const bookList = getBookList();

  if (isChecked) {
    bookList.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    bookList.sort((a, b) => b.title.localeCompare(a.title));
  }
  filterBookList(bookList);
  await render(HOME_COMPONENT);
};


/**
 * @description check if url of image contain http in the beginning of string
 * @param {String} img
 */
export const setImage = (img) => {
  return (/^http/).test(img) ? img : image_404;
};
