"use client";

import React, { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [state, handleSubmit] = useForm("xgejbozl");

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);
      closeModal();
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }
  }, [state.succeeded]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <Button
          type="button"
          title="Let's Chat"
          icon="/mail.svg"
          variant="btn_orange"
          onClick={openModal}
        />
      </div>

      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bold-24 bg-white p-6 rounded-5xl shadow-xl text-center">
            <p>Message Sent! I'll Be in touch soon.</p>
          </div>
        </div>
      )}

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <div className="fixed inset-0 bg-black bg-opacity-80" />
          <div className="fixed inset-0 z-10">
            <div className="flex min-h-full items-center justify-center p-4 sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-md transform overflow-hidden rounded-2xl text-left align-middle shadow-2xl transition-all bg-white">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-3xl font-bold tracking-tight text-gray-900 text-center"
                        >
                          Contact Me
                        </Dialog.Title>
                        <p className="mt-2 regular-18 leading-8 text-gray-20">
                          I'll be on the other side waiting to chat!
                        </p>
                        <div className="mt-2">
                          <form onSubmit={handleSubmit}>
                            <input
                              type="hidden"
                              name="form-name"
                              value="contact"
                            />
                            <div>
                              <label
                                htmlFor="name"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Name
                              </label>
                              <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:ring-orange-50 focus:border-orange-50 sm:text-sm"
                              />
                              <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                              />
                            </div>

                            <div className="mt-4">
                              <label
                                htmlFor="email"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Email Address
                              </label>
                              <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:ring-orange-50 focus:border-orange-50 sm:text-sm"
                              />
                              <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                              />
                            </div>

                            <div className="mt-4">
                              <label
                                htmlFor="message"
                                className="block text-sm font-semibold leading-6 text-gray-900"
                              >
                                Message
                              </label>
                              <textarea
                                id="message"
                                name="message"
                                required
                                className="mt-2.5 block w-full rounded-md border-gray-300 px-3.5 py-2 shadow-sm focus:ring-orange-50 focus:border-orange-50 sm:text-sm"
                              />
                              <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                              />
                            </div>

                            <div className="mt-8">
                              <button
                                type="submit"
                                disabled={state.submitting}
                                className="inline-flex justify-center rounded-5xl border-2 border-orange-50 bg-orange-50 hover:bg-white px-4 py-2 text-sm regular-14 text-white hover:text-orange-50 shadow-md  focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50"
                              >
                                Send Message
                              </button>
                            </div>
                          </form>
                          <div className="mt-10">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-5xl px-4 py-2 regular-14 text-orange-50 hover:underline focus:ring-2 focus:ring-orange-50 focus:ring-opacity-50"
                              onClick={closeModal}
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default ContactForm;
