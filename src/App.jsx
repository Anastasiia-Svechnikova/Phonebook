import { useSelector, shallowEqual } from 'react-redux';
import { ContactsList } from './components/Contacts-list';
import { Form } from './components/Form';
import { Filter } from './components/Filter';
import { Section } from './shared/Section';
import { ThreeDots } from 'react-loader-spinner';
// import { EmptyNotification } from './components/Empty-notification';

export const App = () => {
    const isLoading = useSelector(state=> state.contacts.isLoading, shallowEqual)
  // const contacts = useSelector(state => state.contacts.items, shallowEqual);
  // const isLoading = useSelector(state => state.contacts.isLoading, shallowEqual);

  return (
    <div>
      <h1>Phone Book</h1>
      <Section>
        <Form />
      </Section>
      <Section>
        <h2>Contacts</h2>
       {isLoading && <ThreeDots wrapperClass='loader' color='black' width="100"/>}
            <Filter />
            <ContactsList />
        {/* {!contacts.length && <EmptyNotification />} */}
      
      </Section>
    </div>
  );
};

