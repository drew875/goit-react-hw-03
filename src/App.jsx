import { useState } from "react";
import { Formik, Form, Field } from 'formik';
import ContactList from "./components/ContactList";
import contactsData from "./components/contacts.json";
import SearchBox from "./components/SearchBox";
import ContactForm from "./components/ContactForm";

const App = () => {
  const [contacts, setContacts] = useState(contactsData);
  const [searchContact, setSearchContact] = useState("");

  const deleteContact = (id) => {
    setContacts((prew) => prew.filter(contact => contact.id !== id));
  }

  const addContact = (newContact) => {
    setContacts((prew) => [...prew, newContact]);
  }
  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContact.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactList contacts={filterContacts} onDelete={deleteContact} />
      <SearchBox searchContact={searchContact} onSearch={setSearchContact} />
      <ContactForm onAddContact={addContact} />
    </div>
  )
}
export default App;