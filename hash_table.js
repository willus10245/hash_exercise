const hashTable = () => {
  const values = [];

  const hashFunction = (key) => {
    let sum = 0;

    for (const letter of key) {
      sum += letter.charCodeAt();
    }

    return Math.floor((sum / key.length) % 13);
  };

  const put = (key, value) => {
    if (typeof key !== 'string') throw new Error('Key must be a string');
    const index = hashFunction(key);

    if (values[index] !== undefined) {
      throw new Error('There is already a value in that place. Try a different key!');
    }
    values[index] = value;
    return 'Success!';
  };

  const get = (key) => {
    const index = hashFunction(key);

    if (values[index] === undefined) {
      throw new Error('There\'s nothing there!');
    }
    return values[hashFunction(key)];
  };

  return { put, get };
};

export default hashTable;