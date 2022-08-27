import {REACT_APP_BACKEND} from "./config";

export const getOrder = () => {
  return fetch(`${REACT_APP_BACKEND}/createorder`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export const grabStatus = (paymentId) => {
  return fetch(`${REACT_APP_BACKEND}/payments/${paymentId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
