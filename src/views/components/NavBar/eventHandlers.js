import {setIsEdit} from "../../../store";
import Utils from "../../../services/Utils";

/**
 * @description handle home link click
 * @param {Event} e
 */
export const handleHomeLinkClick = (e) => {
  let parsedURL = getParsedUrl();
  if(parsedURL === 'form') {
    setIsEdit(false);
  }
};

/**
 * return current page name
 * @returns {String}
 */
export const getParsedUrl = () => {
  let request = Utils.parseRequestURL();
  return request.resource;
};
