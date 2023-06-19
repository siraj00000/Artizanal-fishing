import { Disclosure } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { LogoJoran } from "../../assets";
import { RxHamburgerMenu } from "react-icons/rx";
/**
 * Represents a navbar component.
 *
 * @component
 * @example
 * // Usage:
 * <Navbar />
 */
export default function Navbar() {
  /**
   * Represents the navigation items.
   *
   * @type {Array<object>}
   * @property {string} name - The name of the item.
   * @property {string} href - The link associated with the item.
   * @property {boolean} current - Indicates if the item is the current active page.
   */
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Statistics", href: "#", current: false },
    { name: "Products", href: "#", current: false },
    { name: "Testimonials", href: "#", current: false },
  ];

  /**
   * Combines multiple class names into a single string.
   *
   * @param {...string} classes - The class names to combine.
   * @returns {string} - The combined class names.
   */
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <Disclosure as="nav" className="bg-transparent w-full z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex py-2 items-center justify-between">
              <div className="flex flex-1 items-center sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <LogoJoran />
                </div>
                <div className="hidden sm:ml-6 sm:flex items-center ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={
                          "text-18 leading-21 px-3 py-2 text-white uppercase"
                        }
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button className="md:block hidden bg-secondary text-white text-18 leading-21 uppercase py-2 px-4 rounded">
                  Order Now
                </button>
                {/* Mobile menu button*/}
                <Disclosure.Button className="sm:hidden flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <RxHamburgerMenu
                      className="block px-1 py-2 text-36 text-white bg-secondary rounded-sm"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <button className="md:hidden ml-3 mt-5 bg-secondary text-white text-18 leading-21 uppercase py-2 px-4 rounded">
                Order Now
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
