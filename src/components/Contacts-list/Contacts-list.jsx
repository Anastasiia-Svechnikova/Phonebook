import { useMemo, useEffect } from 'react';
import { ContactsItem } from '../Contacts-item';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import s from './contacts-list.module.css';
import { getContactsThunk, deleteContactThunk } from 'store/contacts/thunk.contacts';
import { Loader } from 'shared/Loader';
import classNames from 'classnames';



export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.items, shallowEqual)
  const filter = useSelector(state => state.filter, shallowEqual);
  const isLoading = useSelector(state=> state.contacts.isLoading, shallowEqual)

  const dispatch = useDispatch();


  useEffect(() => {
    
    dispatch(getContactsThunk())
  }, [dispatch])
  

  const filteredContacts = useMemo(() => {
    return contacts.length
    ? contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase())
    } )
    : [];
  }, [contacts, filter])


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
