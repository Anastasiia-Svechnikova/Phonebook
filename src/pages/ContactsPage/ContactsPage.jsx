import { Form } from 'components/Form';
import { Section } from 'shared/Section';
import { ContactsList } from 'components/Contacts-list';
import { Filter } from 'components/Filter';

export const ContactsPage = () => {
  return (
    <div>
        <Form />
      <Section>      
        <h1 className="hidden">Contacts</h1>
        <Filter />
        <ContactsList />     
      </Section>
    </div>
  );
};
