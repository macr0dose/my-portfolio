"use client"

import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";

export function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="flex justify-center">
        <Button
          type="button"
          title="Message Me"
          icon="/mail.svg"
          variant="btn_orange"
          onClick={openModal}
        />
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="max-w-md transform overflow-hidden rounded-2xl text-left align-middle shadow-2xl transition-all bg-white ">
                  <div className="isolate bg-white px-6 py-14 sm:py-12 lg:px-4 rounded-xl">
                    <div className="mx-auto max-w-2xl text-center">
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Contact Me
                      </h2>
                      <p className="mt-2 regular-18 leading-8 text-gray-30">
                        I'll be on the other side waiting to chat!
                      </p>
                    </div>
                    <form
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      onSubmit="submit"
                      action="/thanks" // You can create a thank you page to redirect after form submission.
                      className="mx-auto mt-16 max-w-xl sm:mt-10"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <div className="gap-x-8 gap-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                            Name
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              autoComplete="name"
                              required
                              className="block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                            Email
                          </label>
                          <div className="mt-2.5">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              autoComplete="email"
                              required
                              className="block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                            Message
                          </label>
                          <div className="mt-2.5">
                            <textarea
                              name="message"
                              id="message"
                              rows="4"
                              required
                              className="block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-10">
                        <button
                          type="submit"
                          className="block w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-medium text-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                          Send Message
                        </button>
                      </div>
                    </form>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-white shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                        onClick={closeModal}
                      >
                        Close
                      </button>
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
