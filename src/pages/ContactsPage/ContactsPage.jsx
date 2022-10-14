import { Form } from 'components/Form';
import { Section } from 'shared/Section';
import { ContactsList } from 'components/Contacts-list';
import { Filter } from 'components/Filter';
import { selectError, selectUser } from 'store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUserThunk } from 'store/auth/thunk.auth';

export const ContactsPage = () => {
  const error = useSelector(selectError);
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
   
      console.log(user)
    dispatch(refreshUserThunk())
  

  }, [dispatch])

  return (
    <div>
      <Form />   
      {error ? <p>Oops, something went wrong, try again later please!</p> :
      <Section>      
        <h1 className="hidden">Contacts</h1>
        <Filter />
        <ContactsList />     
      </Section>
      }
    </div>
  );
};
