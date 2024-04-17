import React, { useState } from 'react'
import './Footer.css'
import { StudentContact, TeacherContact } from '../../axios/instance';
import RoleField from "../UI/RoleField/RoleField";
import { ToastContainer, toast } from 'react-toastify';

const inputValidator = (field) => {
    let isValid = true;

    field.forEach((item) => {
        if (item.length === 0) {
            isValid = false;
        }
    });

    return isValid;
};

const Footer = () => {

    const [name, setName] = useState("");
    const [role, setRole] = useState("student");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        let isValid = inputValidator([role, email]);
        if (!isValid) {
            toast.error('Please fill all inputs')
        }
        else {
            const body = {
                name: name,
                email: email,
                message: message
            }

            try {

                if (role === 'student') {
                    const res = await StudentContact(body);
                    if (!res.data.error) {
                        toast.success(`${res.data.msg}`);
                    }
                }
                else {
                    const res = await TeacherContact(body);
                    if (!res.data.error) {
                        toast.success(`${res.data.msg}`);
                    }
                }
                clearFields();
            } catch (err) {
                if (err.response) {
                    toast.error(`${err.response.data.error}`);
                }
            }
        }
    };

    const clearFields = () => {
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <div></div>
    )
}

export default Footer