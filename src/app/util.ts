export const getState = (key) => JSON.parse(localStorage.getItem(key)) || false;
export const setState = (key, obj) => localStorage.setItem(key, JSON.stringify(obj));
