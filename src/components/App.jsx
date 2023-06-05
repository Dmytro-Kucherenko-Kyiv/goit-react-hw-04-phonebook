import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Layout } from "./Layout/Layout";

export const App = (props) => {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts !== null) {
      return JSON.parse(savedContacts)
    } else {
      return []
    }
  });
  const [filter, setFilter] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    const result = contacts.find(({ name }) =>
      name.toLocaleLowerCase() === e.target.name.value.toLocaleLowerCase());
    
    if (result) {
      const message = `${e.target.name.value} is already in contact`;
      alert(message);
    }
    else {
      setContacts([...contacts, {
          id: nanoid(), name: e.target.name.value, number: e.target.number.value
        }]
      );
    }
  }

  const changeFilter = e => {
    setFilter(e.currentTarget.value)
  }

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

    return (
      <Layout>

        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#041934',
            backgroundColor: '#c3f5bf',
          }}
        >

        <h1>Phonebook</h1>

        <ContactForm
          onSubmit={handleSubmit}
        />

        <h2>Contacts</h2>

        <Filter
          value={filter}
          onChange={changeFilter}
        />

        <ContactList
          users={filteredContacts}
          onDelete={deleteContact}
        />

        </div>

      </Layout>
    )
  }