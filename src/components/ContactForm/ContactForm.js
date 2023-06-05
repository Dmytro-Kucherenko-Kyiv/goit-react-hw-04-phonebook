import PropTypes from 'prop-types';
import { useState } from "react";
import { Form, Input, Label, SubmitButton } from "./ContactForm.styled";

export const ContactForm = ({ onSubmit }) => {

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

    const resetForm = () => {
    setName('');
    setNumber('');
  }

    return (
      <Form onSubmit={(e) => { onSubmit(e); resetForm() }}>

      <Label htmlFor="name"> Name

        <Input
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

      </Label>

      <Label htmlFor="number"> Number

        <Input
          value={number}
          onChange={e => setNumber(e.currentTarget.value)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

      </Label>

      <SubmitButton type="submit">Add contact</SubmitButton>

    </Form>
  )
  }

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};