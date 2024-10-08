import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import backgroundImg from "/images/xyz.png";

const navigation = {
  pages: [
  
    { name: "Homes", href: "/homes" },
    { name: "Residential", href: "/residential" },
    { name: "Commercial/Industrial", href: "/commercial" },
    { name: "PM KUSUM", href: "/pmkusum" },
    { name: "Partner", href: "/distributor" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
  ],
};

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (href) => {
    navigate(href);
    setOpen(false);
  };

  const handleLogoClick = () => {
    window.location.href = "https://www.galosolar.com"; // Replace with your website URL
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-40 lg:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pt-20 shadow-xl transition duration-300 ease-in-out"
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
              <div className="flex justify-center flex-grow object-fill">
                <img
                  alt="Galo Solar"
                  src="./images/galo.png"
                  onClick={handleLogoClick}
                  className="cursor-pointer w-full h-full"
                />
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-2 px-4">
              {navigation.pages.map((page) => (
                <button
                  key={page.name}
                  className="flex items-center justify-between w-full text-left py-4 text-base font-medium text-black focus:outline-none"
                  onClick={() => handleNavigation(page.href)}
                >
                  {page.name}
                </button>
              ))}
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header
  className="bg-cover bg-black bg-center md:bg-[url('/images/xyz.png')] bg-none"
  style={{ 
    backgroundSize: '100%', // Adjusts the width of the background image for larger screens
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center', // Centers the image horizontally
  }}
>

        <nav
          aria-label="Top"
          className="mx-auto max-w-full px-4 sm:px-6 lg:px-8"
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
              <img
                alt="Galo Solar"
                src="./images/galo.png"
                onClick={handleLogoClick}
                className="h-16 w-auto lg:h-20 cursor-pointer"
              />
            </div>

            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {navigation.pages.map((page) => (
                  <Popover key={page.name} className="relative flex">
                    <PopoverButton
                      className="relative z-10 -mb-px flex items-center pt-px text-sm font-medium text-white transition-colors duration-200 ease-out hover:text-yellow-400 focus:outline-none focus:ring-0 active:outline-none"
                      onClick={() => handleNavigation(page.href)}
                    >
                      {page.name}
                    </PopoverButton>
                  </Popover>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
