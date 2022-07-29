import React from "react";
import { HiSearch } from "react-icons/hi";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Search = () => {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="border  border-gray-300 rounded-full shadow-sm px-2 py-1 hover:shadow-md">
        <ul className="flex w-full divide-x  justify-between items-center">
          <li>
            <button
              onClick={openModal}
              className="px-4 font-semibold hover:text-gray-700"
            >
              Anywhere
            </button>
          </li>
          <li>
            <button
              onClick={openModal}
              className="px-4 font-semibold hover:text-gray-700"
            >
              Any week
            </button>
          </li>
          <li>
            <button
              onClick={openModal}
              className="px-4 font-semibold hover:text-gray-700"
            >
              Add guests
            </button>
          </li>
          <li className="pl-4">
            <button
              className="bg-primary rounded-full h-9 w-9 flex items-center justify-center text-white text-xl hover:cursor-pointer"
              onClick={openModal}
            >
              <HiSearch />
            </button>
          </li>
        </ul>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10  " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full transform overflow-hidden  bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Search;
