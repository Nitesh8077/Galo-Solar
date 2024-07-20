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
import About from "../../../About/About"; // Ensure this path is correct based on your project structure
import Home from "../../../Home/Home"; // Ensure this path is correct based on your project structure

const navigation = {
  pages: [
    { name: "Home", default: true },
    { name: "About Us", href: "#" },
    { name: "Solar Pump", href: "#" },
    { name: "Power Plant", href: "#" },
    { name: "Support", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
};

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Home"); // State to manage active component

  const handleNavigation = (pageName) => {
    setActiveComponent(pageName);
    setOpen(false); // Close the mobile menu if it's open
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
                    <Popover key={page.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton
                          className="relative z-10 -mb-px flex items-center pt-px text-sm font-medium text-white transition-colors duration-200 ease-out hover:text-yellow-400 data-[open]:text-yellow-400 focus:outline-none focus:ring-0 active:outline-none"
                          onClick={() => handleNavigation(page.name)}
                        >
                          {page.name}
                        </PopoverButton>
                      </div>
                    </Popover>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <button className="text-sm rounded-lg font-medium bg-yellow-400 text-black px-4 py-2 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 focus:ring-opacity-50">
                    Enquire Now
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
        {/* Add other components similarly */}
      </main>
    </div>
  );
}
