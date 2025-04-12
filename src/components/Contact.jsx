import "./Contact.css";

const Contact = ({ name, number, id, onDelete }) => {
    return (

        <div className="contact-card">
            <p>name:{name}</p>
            <p>number:{number}</p>
            <button className="delate-btn" onClick={() => onDelete(id)}>Delete</button>
        </div>

    )
}

export default Contact;