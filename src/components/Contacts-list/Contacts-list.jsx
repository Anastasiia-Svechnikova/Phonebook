import { useEffect } from 'react';
import { ContactsItem } from '../Contacts-item';
import { useSelector, useDispatch } from 'react-redux';
import s from './contacts-list.module.css';
import { getContactsThunk, deleteContactThunk } from 'store/contacts/thunk.contacts';
import { Loader } from 'shared/Loader';
import classNames from 'classnames';
import { selectFilteredContacts, selectIsLoading, selectUser } from 'store/selectors';



export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {   
    if (user) {     
      dispatch(getContactsThunk())
    }
  }, [dispatch, user])

  const elements = filteredContacts.map(({ id, name, number }) => (
    <ContactsItem
      key={id}
      name={name}
      number={number}
      deleteHandler={() => dispatch(deleteContactThunk(id))}
    />
  ));
    
  return (

    <>{isLoading && <Loader />}
    <ul className={classNames(s.list, {[s.disabled]: isLoading})}>{elements}</ul>
    </>
    
  ) 
  
}
