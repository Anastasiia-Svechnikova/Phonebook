import { Form } from 'components/Form';
import { Section } from 'shared/Section';
import { ContactsList } from 'components/Contacts-list';
import { Filter } from 'components/Filter';
import { selectError } from 'store/selectors';
import { useSelector } from 'react-redux';

export const ContactsPage = () => {
    const error = useSelector(selectError);

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
