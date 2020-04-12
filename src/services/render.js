import Home from '../views/pages/Home';
import { FORM_COMPONENT, HOME_COMPONENT } from './goToRoute';
import Form from '../views/pages/Form';
import { getElementById } from "./domManipulation";

/**
 * rerender component
 * @param component
 * @returns {Promise<void>}
 */
export const render = async (component) => {
  switch(component) {
    case HOME_COMPONENT:
      getElementById('page_container').innerHTML = await Home.render();
      await Home.after_render();
      break;
    case FORM_COMPONENT:
      getElementById('page_container').innerHTML = await Form.render();
      await Form.after_render();
  }
};
