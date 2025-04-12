import Contact from "./Contact";
import "./ContactList.css";

const ContactList = ({ contacts, onDelete }) => {
    return (
        <div className="contacts-wraper">
            {contacts.map((contact) => (
                <Contact key={contact.id} name={contact.name} number={contact.number} onDelete={onDelete} id={contact.id} />
            ))}
        </div>
    );
};
export default ContactList;