let keyId = '';

const getKey = () => keyId.toString();

const setKey = (id) => { keyId = id; };

export { setKey, getKey };