import { nanoid } from "nanoid";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map((el) => {
        return (
          <li key={nanoid()}>
            <Contact element={el} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
