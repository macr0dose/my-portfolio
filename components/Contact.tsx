import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id='contact' className="bg-slate-50 rounded-5xl shadow-xl mb-10 mt-6 mx-auto p-8 max-w-[400px] md:max-w-[500px]">
      <div className="text-center ">
        <h2 className="bold-40 lg:bold-64 rounded-5xl">Let's Chat</h2>
      </div>
      <p className="regular-18 text-gray-30 text-center mb-8">
        Get in touch to discuss any project ideas you may have. Drop your
        details in the form below, let's see what we can create together!
      </p>
      <div className="mb-4">
        <ContactForm />
      </div>
      <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    </div>
    
  );
};

export default Contact;
