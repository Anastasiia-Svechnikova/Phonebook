import { useEffect } from 'react';
import { ContactsItem } from '../Contacts-item';
import { useSelector, useDispatch } from 'react-redux';
import s from './contacts-list.module.css';
import { getContactsThunk, deleteContactThunk } from 'store/contacts/thunk.contacts';
import { Loader } from 'shared/Loader';
import classNames from 'classnames';
import { selectFilteredContacts, selectIsLoading } from 'store/selectors';



export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();


  useEffect(() => {   
    dispatch(getContactsThunk())
  }, [dispatch])

  const elements = filteredContacts.map(({ id, name, phone }) => (
    <ContactsItem
      key={id}
      name={name}
      phone={phone}
      deleteHandler={() => dispatch(deleteContactThunk(id))}
    />
  ));
    
  return (

    <>{isLoading && <Loader />}
    <ul className={classNames(s.list, {[s.disabled]: isLoading})}>{elements}</ul>
    </>
    
  ) 
  
}
