let bootNumber;
let isEdit = false;

export default () => {
  const formElement = document.getElementById('edit');
  const bookList = JSON.parse(localStorage.getItem('bookList'));

  const mainForm = document.createElement('form');
  mainForm.innerHTML = `
     <form id="main-form"">
      <div>
        <label for="title">Name</label>
        <input id="title" name="title" required/>
      </div>
       <div>
         <label for="img">url for image</label>
         <input id="img" name="img" />
      </div>
      <div>
         <label for="authors">authors</label>
         <input id="authors" name="authors" />
      </div>
      <div>
         <label for="genre">genre</label>
         <input id="genre" name="genre" />
      </div>
       <div>
         <label for="publishing_date">publishing_date</label>
         <input id="publishing_date" name="publishing_date" />
      </div>
      <div>
         <label for="publishing_name">publishing_name</label>
         <input id="publishing_name" name="publishing_name" />
      </div>
      <div>
         <label for="publishing_address">publishing_address</label>
         <input id="publishing_address" name="publishing_address" />
      </div>
      <div>
         <label for="publishing_phone">publishing_phone</label>
         <input id="publishing_phone" name="publishing_phone" />
      </div>
      <button type="submit">Submit</button>
    </form>
  `;

  mainForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const values = {
      title: document.getElementById('title').value,
      img: document.getElementById('img').value,
      authors: document.getElementById('authors').value,
      genre: document.getElementById('genre').value,
      publishing_name: document.getElementById('publishing_name').value,
      publishing_address: document.getElementById('publishing_address').value,
      publishing_phone: document.getElementById('publishing_phone').value,
    };

    if (isEdit) {
      bookList[bootNumber] = values;
      isEdit = false;
      bootNumber = null;
    } else {
      bookList.push({
        ...values,
      });
    }

    localStorage.setItem('bookList', JSON.stringify(bookList));

    for (let item in values) {
      document.getElementById(item).value = '';
    }

    window.location.href = '#main';
  });
  formElement.append(mainForm);

  const book = bookList[bootNumber];

  for (let b in book) {
    document.getElementById(b).value = book[b];
  }

};
