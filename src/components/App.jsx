import { useEffect, useState } from 'react';
import css from './App.module.css';
import { FormAddContacts } from './FormAddContacts/FormAddContacts';
import { Filter } from './Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';
import { getLocalStorage, saveLocalStorage } from 'checkLocalStorage';
const KEY_LOCAL_CONTACTS = 'cotacts';

export const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const stateLocalStorage = getLocalStorage(KEY_LOCAL_CONTACTS);
    if (stateLocalStorage) {
      setContacts(stateLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (contacts.length === 0) {
      localStorage.removeItem(KEY_LOCAL_CONTACTS);
      return;
    } else {
      saveLocalStorage(KEY_LOCAL_CONTACTS, contacts);
    }
  }, [contacts]);

  return (
    <div className={css.container}>
      <h2>Phonebook</h2>
      <FormAddContacts />
      <h2>Contacts</h2>
      <Filter />
      <ListContacts />
    </div>
  );
};
