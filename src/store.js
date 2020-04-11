let bookNumber = null;
let isEdit = false;

export const setIsEdit = (bool) => {
  isEdit = bool;
};

export const setBookNumber = (num) => {
  bookNumber = num;
};

export const getBookNumber = () => {
  return bookNumber;
};

export const getIsEdit = () => {
  return isEdit;
};

