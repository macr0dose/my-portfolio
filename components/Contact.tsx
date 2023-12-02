import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-slate-50 dark:bg-gray-800 rounded-3xl shadow-xl mb-10 mt-6 mx-auto p-8 max-w-[400px] md:max-w-[500px]"
    >
      <div className="text-center ">
        <h2 className="bold-40 lg:bold-64">Hire Me</h2>
      </div>
      <p className="bold-18 text-gray-20 text-center mb-8 dark:text-gray-400">
        Get in touch to discuss any project ideas you may have. Drop your
        details in the form below, let's see what we can create together!
      </p>
      <div className="mb-4">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
