import Home from "../views/pages/Home";
import {FORM_COMPONENT, HOME_COMPONENT} from "./goToRoute";
import Form from "../views/pages/Form";

export const render = async (component) => {
  switch(component) {
    case HOME_COMPONENT:
      document.getElementById('page_container').innerHTML = await Home.render();
      await Home.after_render();
      break;
    case FORM_COMPONENT:
      document.getElementById('page_container').innerHTML = await Form.render();
      await Form.after_render();
  }
};
