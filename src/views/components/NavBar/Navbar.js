import icon from '../../../assets/images/icon.png';
import './style.scss';
import {setIsEdit} from "../../../store";
import Utils from "../../../services/Utils";

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
                <a href="/#/" id="home-link">${linkNames.main}</a>
                <a href="/#/form" id="form-link">${linkNames.form}</a>
              </div>
        
            </nav>
        `
    return view;
  },
  after_render: async () => {
    document.getElementById('home-link').addEventListener('click', (e) => {
      let request = Utils.parseRequestURL();
      if(request.resource === 'form') {
        setIsEdit(false);
      }
    });
  }

};

export default Navbar;
