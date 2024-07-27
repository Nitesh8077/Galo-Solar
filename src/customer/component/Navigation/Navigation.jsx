"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import About from "../../../About/About";
import Home from "../../../Home/Home";
import Support from "../../../Support/SupportForBusiness/Support";
import SolarPanel from "../../../SolarPanel/SolarPanel";
import SolarProductQuery from "../../../Support/SolarProductQuery/SolarProductQuery";
import EnquiryForSolarProject from "../../../Support/EnquiryForSolarProject/EnquiryForSolarProject";
import ContactUs from "../../../ContactUs/ContactUs";

const navigation = {
  pages: [
    { name: "Home", default: true },
    { name: "About Us", href: "#" },
    { name: "Enquiry", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
};

const supportOptions = [
  { name: "Support For Business", component: "Support" },
  { name: "Solar Product Query", component: "SolarProductQuery" },
  { name: "Enquiry for Solar Project", component: "EnquiryForSolarProject" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Home");
  const [showSupportOptions, setShowSupportOptions] = useState(false);

  const handleNavigation = (pageName) => {
    if (pageName === "Support") {
      setShowSupportOptions(!showSupportOptions);
      return;
    }
    setActiveComponent(pageName);
    setShowSupportOptions(false);
    setOpen(false);
  };

  const handleSupportOptionClick = (option) => {
    setActiveComponent(option.component);
    setShowSupportOptions(false);
    setOpen(false);
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5 justify-between">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="flex justify-center flex-grow">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="./images/galo.png"
                    className="h-12 w-auto md:h-20"
                  />{" "}
                  {/* Updated logo size */}
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-2 px-4">
              {navigation.pages.map((page) => (
                <div key={page.name}>
                  <button
                    className="flex items-center justify-between w-full text-left py-4 text-base font-medium text-black focus:outline-none"
                    onClick={() => handleNavigation(page.name)}
                  >
                    {page.name}
                    {page.name === "Support" && (
                      <ChevronDownIcon
                        className={`h-5 w-5 transition-transform duration-300 ${
                          showSupportOptions ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  {page.name === "Support" && showSupportOptions && (
                    <div className="ml-4 mt-2 flex flex-col space-y-2 border-t border-gray-200 pt-2">
                      {supportOptions.map((option) => (
                        <button
                          key={option.name}
                          className="text-sm text-gray-700 hover:bg-yellow-50 rounded-lg px-4 py-2 transition-colors duration-200"
                          onClick={() => handleSupportOptionClick(option)}
                        >
                          {option.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-black">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="flex h-24 items-center justify-between lg:justify-start">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative rounded-md bg-yellow-400 p-2 lg:hidden"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>

            {/* Logo */}
            <div className="flex-1 flex items-center justify-center lg:justify-start">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="./images/galo.png"
                  className="h-16 w-auto lg:h-20"
                />{" "}
                {/* Updated logo size */}
              </a>
            </div>

            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {navigation.pages.map((page) => (
                  <Popover key={page.name} className="relative flex">
                    <div className="relative flex">
                      <PopoverButton
                        className="relative z-10 -mb-px flex items-center pt-px text-sm font-medium text-white transition-colors duration-200 ease-out hover:text-yellow-400 data-[open]:text-yellow-400 focus:outline-none focus:ring-0 active:outline-none"
                        onClick={() => handleNavigation(page.name)}
                      >
                        {page.name}
                      </PopoverButton>
                      {page.name === "Support" && showSupportOptions && (
                        <PopoverPanel className="absolute z-20 mt-2 w-56 bg-white border border-gray-300 shadow-lg rounded-md top-full left-0">
                          <div className="py-2">
                            {supportOptions.map((option) => (
                              <a
                                key={option.name}
                                href={option.href || "#"}
                                onClick={(e) => {
                                  e.preventDefault();
                                  handleSupportOptionClick(option);
                                }}
                                className="block px-4 py-2 text-gray-900 hover:bg-yellow-50 hover:text-black transition-colors duration-200"
                              >
                                {option.name}
                              </a>
                            ))}
                          </div>
                        </PopoverPanel>
                      )}
                    </div>
                  </Popover>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <button className="text-sm rounded-lg font-medium bg-yellow-400 text-black px-4 py-2 transition-transform duration-300 ease-in-out transform hover:bg-yellow-400 hover:text-white hover:scale-105 active:scale-95 focus:outline-none">
                ENQUIRE NOW
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {activeComponent === "Home" && <Home />}
        {activeComponent === "About Us" && <About />}
        {activeComponent === "Solar Panel" && <SolarPanel />}
        {activeComponent === "Support" && <Support />}
        {activeComponent === "SupportForBusiness" && <Support />}
        {activeComponent === "SolarProductQuery" && <SolarProductQuery />}
        {activeComponent === "EnquiryForSolarProject" && (
          <EnquiryForSolarProject />
        )}
        {activeComponent === "Contact Us" && <ContactUs />}
      </main>
    </div>
  );
}
