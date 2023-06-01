import PropTypes from 'prop-types';
import { DeleteButton, Item, ItemStyle, List } from "./ContactList.styled";

export const ContactList = ({ users, onDelete }) => (

  <List>
    {users.map((user) => 
      <Item key={user.id}>
        <ItemStyle />

        {user.name} : {user.number}

        <DeleteButton type="button" onClick={() => onDelete(user.id)}>Delete</DeleteButton>
      </Item>)}
  </List>
)

ContactList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDelete: PropTypes.func.isRequired,
};