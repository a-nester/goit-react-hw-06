import { nanoid } from "nanoid";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors.js";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
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
