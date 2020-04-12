import icon from '../../../assets/images/icon.png';
import { getElementById } from "../../../services/domManipulation";
import { getParsedUrl, handleHomeLinkClick } from "./eventHandlers";

import './style.scss';

const linkNames = {
  main: 'Главная',
  form: 'Добавить новую книгу'
};

const label = {
  filter: 'Фильтровать по названию'
};

const setFilter = () => {
  let parsedURL = getParsedUrl();
  return parsedURL.length !== 0 ? 'display: none' : '';
};

let Navbar = {
  render: async () => {
    let view = `
            <nav class="nav-bar">
              <div>
                <img src=${icon} />
                 <div class="filter" style="${setFilter()}">
                  <input type="checkbox" id="filter-by-name-checkbox"  />
                  <label>${label.filter}</label>
                </div>
              </div>
              <div class="nav-bar-links">
                <a href="/#/" id="home-link">${linkNames.main}</a>
                <a href="/#/form" id="form-link">${linkNames.form}</a>
              </div>
            </nav>
        `
    return view;
  },
  after_render: async () => {
    const homeLink = getElementById('home-link');
    homeLink.addEventListener('click', (e) => handleHomeLinkClick(e));
  }
};

export default Navbar;
