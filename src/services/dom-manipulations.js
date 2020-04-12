/**
 *
 * @param {String} id
 * @returns {HTMLElement}
 */
export const getElementById = (id) => {
  return document.getElementById(id);
};

/**
 *
 * @param {String} cl
 * @returns {Element[]}
 */
export const getElementsByClassName = (cl) => {
  return Array.from(document.getElementsByClassName(cl));
};

/**
 *
 * @param {Event} event
 * @returns {*}
 */
export const getAttributeValue = (event) => {
  return event.target.attributes.attr.value;
};
