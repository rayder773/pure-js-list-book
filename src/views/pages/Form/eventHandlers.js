import { getBookNumber, getIsEdit, setBookNumber, setIsEdit } from '../../../store';
import { getBookList, setBookList } from '../../../services/db';
import { goToRoute, HOME } from '../../../services/goToRoute';
import {createElement, getElementById, getElementsByClassName} from '../../../services/dom-manipulations';
import {ids} from "./Form";

/**
 * @description handle submit of form
 */
export const handleSubmit = (e) => {
    e.preventDefault();

    let isEdit = getIsEdit();
    const bookList = getBookList();
    let bookNumber = getBookNumber();

    //get input field values
    const values = {};
    Object.keys(bookList[0]).forEach(item => {
      if (item === 'img') {
        values[item] = getElementsByClassName('input-for-image').map(img => img.value);
      } else {
        values[item] = getElementById(item).value
      }
    });

    //check if isEdit === true we change it in book list if not - push it to end of array
    if (isEdit) {
      bookList[bookNumber] = values;
      setIsEdit(false);
      setBookNumber(null);
    } else {
      bookList.push({
        ...values,
      });
    }

    //clean fields after submit
    for (let item in values) {
      getElementById(item).value = '';
    }

    //set book list and redirect to home page
    setBookList(bookList);
    goToRoute(HOME);
};

/**
 * @description add input field for additional image url
 * @param {Event} e
 */
export const handleAddInputButton = (e) => {
  e.preventDefault();
  insertContainerWithInput();
};

/**
 *
 * @param {String} val
 */
export const insertContainerWithInput = (val = null) => {
  const inputForImageElement = getElementById(ids.inputForImage);
  const newInput = createElement('input');
  const newButton = createElement('button');
  const newDiv = createElement('div');
  const isEdit = getIsEdit();

  newInput.className = 'input-for-image';

  if(isEdit) {
    newInput.value = val;
  }

  newButton.className = 'delete-input-btn';
  newButton.type = 'button';
  newButton.addEventListener('click', (e) => {
    const parent = e.target.parentElement;
    parent.remove();
  });

  newDiv.className = 'input-for-image-additional';
  newDiv.append(newInput, newButton);

  inputForImageElement.append(newDiv);
};
