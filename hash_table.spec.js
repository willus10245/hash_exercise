import hashTable from './hash_table';

describe('hash table', () => {
  const db = hashTable();

  describe('put method', () => {
    test('should take a sting key and any value and return "Success"', () => {
      expect(db.put('the first entry', 'somewhere')).toBe('Success!');
    });

    test('should throw if key is not a string', () => {
      const notAString = () => db.put(14, 'nowhere');
      expect(notAString).toThrow('Key must be a string');
    });

    test('should throw on key that produces duplicate index', () => {
      const dupIndex = () => db.put('c', false);
      expect(dupIndex).toThrow('There is already a value in that place. Try a different key!');
    });
  });

  describe('get method', () => {
    test('should return value when passed a valid key', () => {
      expect(db.get('the first entry')).toBe('somewhere');
    });

    test('should throw if no value at the index', () => {
      const noValue = () => db.get('nothing');
      expect(noValue).toThrow('There\'s nothing there!');
    });
  });
});