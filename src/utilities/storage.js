/* eslint-disable import/no-anonymous-default-export */
const setData = (key, value) => {
    localStorage.setItem(key, value);
};

const getData = (key) => {
    return localStorage.getItem(key);
};

const clearStorage = () => {
    localStorage.clear();
}

export default {
    set: setData,
    get: getData,
    clear: clearStorage
}