import { Form } from 'components/Form';
import { Section } from 'shared/Section';
import { ContactsList } from 'components/Contacts-list';
import { Filter } from 'components/Filter';
import { selectAllContacts, selectError, selectIsLoading, } from 'store/selectors';
import {  useDispatch, useSelector } from 'react-redux';
import { Instructions } from 'components/Instructions';
import { useEffect } from 'react';
import { getContactsThunk } from 'store/contacts/thunk.contacts';




export const ContactsPage = () => {
  const dispatch = useDispatch()
useEffect(() => {
  dispatch(getContactsThunk())
  
}, [dispatch])


  const error = useSelector(selectError);
  const contacts = useSelector(selectAllContacts)
  const isLoading = useSelector(selectIsLoading)
  const isEmpty = !isLoading && !contacts.length
  console.log(isEmpty)
  return (
    <div>
      <Form />   
      {error ? <p>Oops, something went wrong, try again later please!</p> :
      <Section>      
          {isEmpty ? <Instructions /> :
            <>
        <h1 className="hidden">Contacts</h1>
        <Filter />
          <ContactsList />
            </>
          }
      </Section>
      }
      
    </div>
  );
};
