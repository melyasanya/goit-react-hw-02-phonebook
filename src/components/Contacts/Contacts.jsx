import { Contact } from 'components/Contact/Contact';

export const Contacts = ({ contacts, handleDelete }) => {
  return (
    <ul>
      {contacts.map(el => {
        return (
          <Contact
            name={el.name}
            key={el.id}
            id={el.id}
            number={el.number}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
};
