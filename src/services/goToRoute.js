
//Routes
export const HOME = '/#/';
export const FORM = '/#/form';

export const FORM_COMPONENT = 'form';
export const HOME_COMPONENT = 'home';

/**
 * move to route
 * @param path
 */
export const goToRoute = (path) => {
  window.location.href = path;
};
