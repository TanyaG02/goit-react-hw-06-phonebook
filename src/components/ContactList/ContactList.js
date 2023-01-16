import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from 'redux/ToolkitSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <Item key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(remove(id))}>
            Delete
          </Button>
        </Item>
      ))}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};
