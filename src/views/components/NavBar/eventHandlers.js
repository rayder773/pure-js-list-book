import {setIsEdit} from "../../../store";
import Utils from "../../../services/Utils";

export const handleHomeLinkClick = (e) => {
  let parsedURL = getParsedUrl();
  if(parsedURL === 'form') {
    setIsEdit(false);
  }
};

export const getParsedUrl = () => {
  let request = Utils.parseRequestURL();
  return request.resource;
};
