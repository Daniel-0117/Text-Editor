import { openDB } from 'idb';

const initdb = async () =>
  openDB('Heretics Codex', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('Heretics Codex')) {
        console.log('Heretics Codex database already exists');
        return;
      }
      db.createObjectStore('Heretics Codex', { keyPath: 'id', autoIncrement: true });
      console.log('Heretics Codex database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  console.log('PUT to the database');
  const todosDb = await openDB('Heretics Codex', 1);
  const tx = todosDb.transaction('Heretics Codex', 'readwrite');
  const store = tx.objectStore('Heretics Codex');
  const request = store.put({ id: id, content: content });
  const result = await request;
  console.log('Data saved to the database', result);
};

// TODO: Add logic for a method that gets all the content from the database

export const getDb = async () => {
  console.log('GET from the database');
  const indexedDb = await openDB('Heretics Codex', 1);
  const tx = indexedDb.transaction('Heretics Codex', 'readonly');
  const store = tx.objectStore('Heretics Codex');
  const request = store.get(1);
  const result = await request;
  console.log(`result.value`, result);
  return result?.value;
}

initdb();