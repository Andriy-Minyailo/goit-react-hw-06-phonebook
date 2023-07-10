import PropTypes from 'prop-types';
import css from './ListContacts.module.css';
import { ElemListContact } from 'components/ElemListContact/ElemListContact';

export const ListContacts = ({ filterRender, deleteContact }) => {
  return (
    <>
      <ul className={css.lists}>
        {filterRender.map(el => {
          return (
            <ElemListContact
              key={el.id}
              id={el.id}
              name={el.name}
              number={el.number}
              deleteContact={deleteContact}
            />
          );
        })}
      </ul>
    </>
  );
};

ListContacts.propTypes = {
  filterRender: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
