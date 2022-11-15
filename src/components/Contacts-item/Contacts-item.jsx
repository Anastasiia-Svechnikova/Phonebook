import React from 'react';
import PropTypes from 'prop-types';
import s from './contacts-item.module.css';
import { Button } from '../../shared/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteContactThunk,
  editContactThunk,
} from 'store/contacts/thunk.contacts';
import { BiPencil } from 'react-icons/bi';
import { TbTrashX } from 'react-icons/tb';
import { BsCheckSquareFill } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import { MobileItem } from 'components/MobileItem/MobileItem';
import { MobileEditItem } from 'components/MobileEditItem';

export const ContactsItem = ({ id, name, number }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [editedContact, setEditedContact] = useState({ name, number });
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const editNumber = () => {
    setOpenEdit(true);
  };
  const onInputChange = e => {
    setEditedContact(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleEditSubmit = e => {
    e.preventDefault();
    dispatch(editContactThunk({ id, editedContact }));
    setOpenEdit(false);
  };
  const handleDelete = () => {
    dispatch(deleteContactThunk(id));
  };

  const onItemMouseOver = e => {
    e.currentTarget.classList.toggle(s.focus);
  };
  const onItemMouseleave = e => {
    e.currentTarget.classList.toggle(s.focus);
  };
  return !openEdit ? (
    isMobile ? (
      <MobileItem
        editNumber={editNumber}
        handleDelete={handleDelete}
        name={name}
        number={number}
      />
    ) : (
      <li
        onMouseOut={onItemMouseleave}
        onMouseOver={onItemMouseOver}
        className={s.item}
      >
        <Button width={40} secondary type="button" onClickHandler={editNumber}>
          <BiPencil className={s.editIcon} />
        </Button>
        <span className={s.name}>{name}</span>
        <span className={s.number}>{number}</span>
        <Button primary type="button" width={40} onClickHandler={handleDelete}>
          <TbTrashX className={s.deleteIcon} />
        </Button>
      </li>
    )
  ) : (
          isMobile ? <MobileEditItem
              handleEditSubmit={handleEditSubmit}
              name={editedContact.name}
              number={editedContact.number}
              onInputChange={onInputChange}
          /> :
    <form className={s.form} onSubmit={handleEditSubmit}>
      <Button type="submit" width={40} secondary>
        {' '}
        <BsCheckSquareFill className={s.done} />
      </Button>
      <label>
        <input
          onChange={onInputChange}
          value={editedContact.name}
          className={s.input}
          type="text"
          name="name"
        />
      </label>
      <label>
        <input
          onChange={onInputChange}
          value={editedContact.number}
          className={s.input}
          type="tel"
          name="number"
        />
      </label>
    </form>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  // deleteHandler: PropTypes.func.isRequired,
};
