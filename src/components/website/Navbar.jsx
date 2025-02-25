import React from 'react';
import { Menu, X, Home, Info, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">DemoSite</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink icon={<Home className="w-4 h-4" />} text="Home" />
              <NavLink icon={<Info className="w-4 h-4" />} text="About" />
              <NavLink icon={<Phone className="w-4 h-4" />} text="Contact" />
              <NavLink icon={<Mail className="w-4 h-4" />} text="Services" />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-700 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink icon={<Home className="w-4 h-4" />} text="Home" />
            <MobileNavLink icon={<Info className="w-4 h-4" />} text="About" />
            <MobileNavLink icon={<Phone className="w-4 h-4" />} text="Contact" />
            <MobileNavLink icon={<Mail className="w-4 h-4" />} text="Services" />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ icon, text }) => (
  <a
    href="#"
    className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
  >
    {icon}
    {text}
  </a>
);

const MobileNavLink = ({ icon, text }) => (
  <a
    href="#"
    className="text-white hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
  >
    {icon}
    {text}
  </a>
);

export default Navbar;