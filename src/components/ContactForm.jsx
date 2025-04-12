import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const ContactForm = ({ onAddContact }) => {
    const handleSubmit = (values, { resetForm }) => {
        const newContact = {
            id: nanoid(),
            ...values,
        };
        onAddContact(newContact);
        resetForm();
    }
    const initialValues = { name: "", number: "" };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, "Too short")
            .max(50, "Too song")
            .required("Enter Name"),
        number: Yup.string()
            .matches(/^\+?\d{10,14}$/, "Invalid phone number")
            .required("Write a number"),
    })

    return (
        <div>
            <h2>Contact Form</h2>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                <Form>
                    <label>
                        Name
                        <Field name="name" placeholder="name" />
                        <ErrorMessage name="name" component="div" />
                    </label>
                    <label>
                        Number
                        <Field name="number" placeholder="phone number" />
                        <ErrorMessage name="number" component="div" />
                    </label>
                    <button type="submit">click</button>
                </Form>
            </Formik>
        </div>
    )
}

export default ContactForm;