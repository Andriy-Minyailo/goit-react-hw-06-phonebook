// import PropTypes from 'prop-types';
import css from './ListContacts.module.css';
import { ElemListContact } from 'components/ElemListContact/ElemListContact';
import { useSelector } from 'react-redux';

export const ListContacts = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const contactsRender = filter.trim()
    ? contacts.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase().trim());
      })
    : contacts;

  return (
    <>
      <ul className={css.lists}>
        {contactsRender.map(el => {
          return (
            <ElemListContact
              key={el.id}
              id={el.id}
              name={el.name}
              number={el.number}
              // deleteContact={deleteContact}
            />
          );
        })}
      </ul>
    </>
  );
};

// ListContacts.propTypes = {
//   filterRender: PropTypes.array.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };
