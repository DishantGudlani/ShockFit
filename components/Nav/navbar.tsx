"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleKontaktClick = () => {
    const kontaktSection = document.getElementById("form");
    if (kontaktSection) {
      kontaktSection.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  const handleMobileServiceClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    }
  };

  const handleNavLinkClick = (href: string) => {
    closeMenu();
  };

  return (
    <NextUINavbar
      position="sticky"
      className="dark:border-none border z-40 rounded-full max-w-[60%] flex justify-center items-center mx-auto mt-3 bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white/10"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Desktop Navigation */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/" onClick={closeMenu}>
            <img
              src="/images/logo.png"
              alt="ShockFit Logo"
              width={100}
              height={50}
              className="logo rounded-md max-w-none"
            />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2 lg:justify-center lg:items-center lg:mx-auto">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              {item.label === "Usluge" ? (
                <div className="relative">
                  <button
                    onMouseEnter={() => !isMobile && setIsServicesOpen(true)}
                    onMouseLeave={() => !isMobile && setIsServicesOpen(false)}
                    onClick={handleMobileServiceClick}
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium"
                    )}
                  >
                    {item.label}
                  </button>
                  {isServicesOpen && !isMobile && (
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className="absolute left-0 z-10 bg-[#1A1A1A] rounded-lg shadow-lg hover:rounded-md transition-all duration-300"
                    >
                      <ul className="flex flex-col">
                        {['laser', 'massage', 'fitness'].map((service) => (
                          <li key={service}>
                            <NextLink href={`/detail/${service}`} onClick={() => handleNavLinkClick(`/detail/${service}`)}>
                              <button className="block py-2 px-4 text-white hover:bg-gray-800 hover:rounded-lg transition duration-200 w-full text-left">
                                {service === 'laser' ? 'Epilacija Diodnim Laserom' :
                                 service === 'massage' ? 'Massage' : 'Fitness'}
                              </button>
                            </NextLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  href={item.href}
                  onClick={() => handleNavLinkClick(item.href)}
                >
                  {item.label}
                </NextLink>
              )}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Contact Button */}
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden md:flex gap-2">
          <button
            onClick={handleKontaktClick}
            className="py-2 px-4 backdrop-blur-sm border bg-emerald-500/20 border-emerald-300/20 text-white mx-auto text-center rounded-full transition-transform hover:scale-105 hover:bg-emerald-500/30 duration-300"
          >
            <span>Kontakt →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4 z-20" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Navigation Menu */}
      <NavbarMenu className="pt-6">
        <div className="mx-4 mt-4 flex flex-col gap-2 bg-gray-800 p-4 rounded-lg">
          <div className="flex flex-col gap-6">
            {siteConfig.navItems.map((item, index) => (
              <NavbarMenuItem key={`${item.label}-${index}`} className="ml-2">
                {item.label === "Usluge" ? (
                  <div>
                    <button
                      onClick={(e) => handleMobileServiceClick(e)}
                      className="block py-2 px-4 border-b border-white text-white rounded-[20px] transition duration-300 hover:bg-white hover:text-gray-800 w-full text-left"
                    >
                      {item.label}
                    </button>
                    {isServicesOpen && (
                      <ul className="flex flex-col bg-gray-700 rounded-md mt-2 p-2">
                        {[
                          { path: '/detail/laser', label: 'Epilacija Diodnim Laserom' },
                          { path: '/detail/massage', label: 'Massage' },
                          { path: '/detail/fitness', label: 'Fitness' }
                        ].map((service) => (
                          <li key={service.path}>
                            <NextLink href={service.path} onClick={() => handleNavLinkClick(service.path)}>
                              <span className="block py-2 px-4 text-white hover:bg-gray-800 rounded-lg">
                                {service.label}
                              </span>
                            </NextLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NextLink href={item.href} onClick={() => handleNavLinkClick(item.href)}>
                    <span className="block py-2 px-4 text-white hover:bg-gray-800 rounded-lg transition duration-200">
                      {item.label}
                    </span>
                  </NextLink>
                )}
              </NavbarMenuItem>
            ))}
          
          </div>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};