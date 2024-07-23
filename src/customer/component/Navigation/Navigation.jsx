"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import About from "../../../About/About";
import Home from "../../../Home/Home";
import Support from "../../../Support/SupportForBusiness/Support"; // Ensure this path is correct based on your project structure
import SolarPanel from "../../../SolarPanel/SolarPanel"; // Ensure this path is correct based on your project structure
import SolarProductQuery from "../../../Support/SolarProductQuery/SolarProductQuery"; // Ensure this path is correct based on your project structure
import EnquiryForSolarProject from "../../../Support/EnquiryForSolarProject/EnquiryForSolarProject"; // Ensure this path is correct based on your project structure
import ContactUs from "../../../ContactUs/ContactUs"; // Ensure this path is correct based on your project structure

const navigation = {
  pages: [
    { name: "Home", default: true },
    { name: "About Us", href: "#" },
    { name: "Solar Panel", href: "#" },
    { name: "Support", href: "#" },
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
    } else {
      setActiveComponent(pageName);
      setShowSupportOptions(false);
    }
    setOpen(false);
  };

  const handleSupportOptionClick = (option) => {
    if (option.component) {
      setActiveComponent(option.component);
    } else {
      // Handle other options
      setActiveComponent(option.name);
    }
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
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.pages.map((page) => (
                    <Tab
                      key={page.name}
                      className="flex-1 whitespace-nowrap px-1 py-4 text-base font-medium text-black data-[selected]:text-yellow-400 focus:outline-none focus:ring-0 active:outline-none"
                      onClick={() => handleNavigation(page.name)}
                    >
                      {page.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.pages.map((page) => (
                  <TabPanel
                    key={page.name}
                    className="space-y-10 px-4 pb-8 pt-10"
                  >
                    <div className="grid grid-cols-2 gap-x-4">
                      <div key={page.name} className="group relative text-sm">
                        <a
                          href={page.href}
                          className="mt-6 block font-medium text-gray-900"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 z-10"
                          />
                          {page.name}
                        </a>
                        <p aria-hidden="true" className="mt-1">
                          {page.name === "Home"
                            ? "Welcome"
                            : `Learn more about ${page.name}`}
                        </p>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-black">
        <p className="flex h-10 items-center justify-center bg-yellow-400 overflow-hidden relative">
          <span className="absolute whitespace-nowrap animate-marquee">
            SAVE UPTO 100% MONTHLY ON ELECTRICITY BILLS.{" "}
            <span className="italic font-bold ml-1">ENQUIRE NOW!</span>
          </span>
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 "
        >
          <div className="">
            <div className="flex h-24 items-center">
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
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img alt="" src="./images/galo.png" className="h-20 w-auto" />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
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
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <button className="text-sm rounded-lg font-medium bg-yellow-400 text-black px-4 py-2 transition-transform duration-300 ease-in-out transform hover:bg-yellow-400 hover:text-white hover:scale-105 active:scale-95 focus:outline-none ">
                    ENQUIRE NOW !
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {activeComponent === "Home" && <Home />}
        {activeComponent === "About Us" && <About />}
        {activeComponent === "Support" && <Support />}
        {activeComponent === "Solar Panel" && <SolarPanel />}
        {activeComponent === "SolarProductQuery" && <SolarProductQuery />}
        {activeComponent === "EnquiryForSolarProject" && (
          <EnquiryForSolarProject />
        )}
        {activeComponent === "Contact Us" && <ContactUs />}
        {/* Add other components similarly */}
      </main>
    </div>
  );
}
