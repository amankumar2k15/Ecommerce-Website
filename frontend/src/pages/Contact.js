import React from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ContactForm from "../components/ContactForm/ContactForm";

const Contact = () => {

    return (
        <div className="max-w-container mx-auto px-4">
            <Breadcrumb title="Contact" />
            <ContactForm />
        </div>
    );
};

export default Contact;
