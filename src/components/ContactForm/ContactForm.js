import PropTypes from 'prop-types';
import { Component } from "react";
import { Form, Input, Label, SubmitButton } from "./ContactForm.styled";

export class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      number: ''
    }
  }

  handleChange = e => {
    this.setState({
    [e.currentTarget.name]: e.currentTarget.value
    })
  }

    resetForm = () => {
    this.setState({
      name: '',
      number: ''
    })
  }

  render() {
    return (
      <Form onSubmit={(e) => { e.preventDefault(); this.props.onSubmit(e); this.resetForm() }}>

      <Label htmlFor="name"> Name

        <Input
          value={this.state.name}
          onChange={this.handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

      </Label>

      <Label htmlFor="number"> Number

        <Input
          value={this.state.number}
          onChange={this.handleChange}
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
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};