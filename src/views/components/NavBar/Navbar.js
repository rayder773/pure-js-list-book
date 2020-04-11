import icon from '../../../assets/images/icon.png';
import './style.scss';

const linkNames = {
  main: 'Главная',
  form: 'Добавить новую книгу'
};

let Navbar = {
  render: async () => {
    let view = `
            <nav class="nav-bar">
              <img src=${icon} />
              <div class="nav-bar-links">
                <a href="/#/">${linkNames.main}</a>
                <a href="/#/form">${linkNames.form}</a>
              </div>
        
            </nav>
        `
    return view;
  },
  after_render: async () => {
  }

};

export default Navbar;
