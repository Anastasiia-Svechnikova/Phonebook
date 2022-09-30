import { useSelector, shallowEqual } from 'react-redux';
import { ContactsList } from './components/Contacts-list';
import { Form } from './components/Form';
import { Filter } from './components/Filter';
import { Section } from './shared/Section';
import { EmptyNotification } from './components/Empty-notification';

export const App = () => {
  const contacts = useSelector(state => state.contacts, shallowEqual);

  return (
    <div>
      <h1>Phone Book</h1>
      <Section>
        <Form />
      </Section>
      <Section>
        <h2>Contacts</h2>
        {contacts.length ? (
          <>
            <Filter />
            <ContactsList />
          </>
        ) : (
          <EmptyNotification />
        )}
      </Section>
    </div>
  );
};

