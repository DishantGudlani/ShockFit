// "use client";
// import {
//   Navbar as NextUINavbar,
//   NavbarContent,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
//   NavbarMenu,
//   NavbarMenuToggle,
// } from "@nextui-org/navbar";
// import { Kbd } from "@nextui-org/kbd";
// import { Input } from "@nextui-org/input";
// import { link as linkStyles } from "@nextui-org/theme";
// import NextLink from "next/link";
// import clsx from "clsx";
// import { useState } from "react";

// import { siteConfig } from "@/config/site";
// import { SearchIcon } from "@/components/icons";

// export const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
//   const [isServicesOpen, setIsServicesOpen] = useState(false); // Dropdown state

//   const closeMenu = () => setIsMenuOpen(false); // Function to close the menu
//   const toggleServicesDropdown = () => setIsServicesOpen((prev) => !prev); // Toggle services dropdown


//   // Smooth scroll function for the Kontakt section
//   const handleKontaktClick = () => {
//     const kontaktSection = document.getElementById("form");
//     if (kontaktSection) {
//       kontaktSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <NextUINavbar
//         position="sticky"
//         className="dark:border-none border z-40 rounded-full max-w-[60%] flex justify-center items-center mx-auto mt-3 bg-opacity-20 backdrop-filter backdrop-blur-lg bg-white/10"
//       >
//         {/* Desktop Navigation */}
//         <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
//           <NavbarBrand as="li" className="gap-3 max-w-fit">
//             <NextLink className="flex justify-start items-center gap-1" href="/">
//               <img
//                 src="/images/logo.png"
//                 alt="ShockFit Logo"
//                 width={100}
//                 height={50}
//                 className="logo rounded-md max-w-none"
//               />
//             </NextLink>
//           </NavbarBrand>
//           <ul className="hidden lg:flex gap-4 justify-start ml-2 lg:justify-center lg:items-center lg:mx-auto">
//             {siteConfig.navItems.map((item) => (
//               <NavbarItem key={item.href}>
//                 {item.label === "Početna" ? (
//                   <NextLink
//                     className={clsx(
//                       linkStyles({ color: "foreground" }),
//                       "data-[active=true]:text-primary data-[active=true]:font-medium"
//                     )}
//                     href="/"
//                   >
//                     {item.label}
//                   </NextLink>
//                 ) : item.label === "O nama" ? (
//                   <NextLink
//                     className={clsx(
//                       linkStyles({ color: "foreground" }),
//                       "data-[active=true]:text-primary data-[active=true]:font-medium"
//                     )}
//                     href="/about-us"
//                   >
//                     {item.label}
//                   </NextLink>
//                 ) : item.label === "Usluge" ? (
//                   <div className="relative">
//                     <button
//                       onMouseEnter={() => setIsServicesOpen(true)}
//                       onMouseLeave={() => setIsServicesOpen(false)}
//                       className={clsx(
//                         linkStyles({ color: "foreground" }),
//                         "data-[active=true]:text-primary data-[active=true]:font-medium"
//                       )}
//                     >
//                       {item.label}
//                     </button>
//                     {isServicesOpen && (
//                       <div
//                         onMouseEnter={() => setIsServicesOpen(true)}
//                         onMouseLeave={() => setIsServicesOpen(false)}
//                         className="absolute left-0 z-10 bg-[#1A1A1A] rounded-lg shadow-lg hover:rounded-md transition-all duration-300"
//                       >
//                         <ul className="flex flex-col">
//                           <li>
//                             <NextLink href="/detail/laser">
//                               <button className="block py-2 px-4 text-white hover:bg-gray-800 hover:rounded-lg transition duration-200 w-full text-left">
//                                 Epilacija Diodnim Laserom
//                               </button>
//                             </NextLink>
//                           </li>
//                           <li>
//                             <NextLink href="/detail/massage" passHref>
//                               <button className="flex py-2 px-4 text-white hover:bg-gray-800 transition hover:rounded-lg duration-200 w-full text-left">
//                                 Massage
//                               </button>
//                             </NextLink>
//                           </li>
//                           <li>
//                             <NextLink href="/detail/fitness">
//                               <button className="block py-2 px-4 text-white hover:bg-gray-800 transition hover:rounded-lg duration-200 w-full text-left">
//                                 Fitness
//                               </button>
//                             </NextLink>
//                           </li>
//                         </ul>
//                       </div>
//                     )}
//                   </div>
//                 ) : item.label === "Zašto odabrati nas" ? (
//                   <NextLink
//                     className={clsx(
//                       linkStyles({ color: "foreground" }),
//                       "data-[active=true]:text-primary data-[active=true]:font-medium"
//                     )}
//                     href="/why-choose-us"
//                   >
//                     {item.label}
//                   </NextLink>
//                 ) : item.label === "Blog" ? (
//                   <NextLink
//                     className={clsx(
//                       linkStyles({ color: "foreground" }),
//                       "data-[active=true]:text-primary data-[active=true]:font-medium"
//                     )}
//                     href="/blog"
//                   >
//                     {item.label}
//                   </NextLink>
//                 ) :  item.label === "Gallery" ? (
//                   <NextLink
//                     className={clsx(
//                       linkStyles({ color: "foreground" }),
//                       "data-[active=true]:text-primary data-[active=true]:font-medium"
//                     )}
//                     href="/gallery"
//                   >
//                     {item.label}
//                   </NextLink>
//                 ) :  null}
//               </NavbarItem>
//             ))}
//           </ul>
//         </NavbarContent>

//         {/* Contact Button */}
//         <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
//           <NavbarItem className="hidden md:flex gap-2">
//             <button
//               onClick={handleKontaktClick}
//               className="py-2 px-4 backdrop-blur-sm border bg-emerald-500/20 border-emerald-300/20 text-white mx-auto text-center rounded-full transition-transform hover:scale-105 hover:bg-emerald-500/30 duration-300"
//             >
//               <span>Kontakt →</span>
//               <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
//             </button>
//           </NavbarItem>
//         </NavbarContent>

//         {/* Mobile Menu Toggle */}
//         <NavbarContent className="sm:hidden basis-1 pl-4 z-20" justify="end">
//           <NavbarMenuToggle onToggle={() => setIsMenuOpen((prev) => !prev)} />
//         </NavbarContent>

//         {/* Mobile Navigation Menu */}
//         <NavbarMenu>
//           <div className="mx-4 mt-4 flex flex-col gap-2 bg-gray-800 p-4 rounded-lg">
            
//             <div className="flex flex-col gap-6">
//               {siteConfig.navItems.map((item, index) => (
//                 <NavbarMenuItem key={`${item.label}-${index}`} className="ml-2">
//                   {item.label === "Usluge" ? (
//                     <div>
//                       {/* Dropdown Button */}
//                       <button
//                         onClick={toggleServicesDropdown}
//                         className="block py-2 px-4 border-b border-white text-white rounded-[20px] transition duration-300 hover:bg-white hover:text-gray-800 w-full text-left"
//                       >
//                         {item.label}
//                       </button>
//                       {/* Dropdown Menu */}
//                       {isServicesOpen && (
//                         <ul className="flex flex-col bg-gray-700 rounded-md mt-2 p-2">
//                           <li>
//                             <NextLink href="/detail/laser">
//                               <span className="block py-2 px-4 text-white hover:bg-gray-800 rounded-lg">
//                                 Epilacija Diodnim Laserom
//                               </span>
//                             </NextLink>
//                           </li>
//                           <li>
//                             <NextLink href="/detail/massage">
//                               <span className="block py-2 px-4 text-white hover:bg-gray-800 rounded-lg">
//                                 Massage
//                               </span>
//                             </NextLink>
//                           </li>
//                           <li>
//                             <NextLink href="/detail/fitness">
//                               <span className="block py-2 px-4 text-white hover:bg-gray-800 rounded-lg">
//                                 Fitness
//                               </span>
//                             </NextLink>
//                           </li>
//                         </ul>
//                       )}
//                     </div>
//                   ) : (
//                     <NextLink href={item.href}>
//                       <span className="block py-2 px-4 text-white hover:bg-gray-800 rounded-lg transition duration-200">
//                         {item.label}
//                       </span>
//                     </NextLink>
//                   )}
//                 </NavbarMenuItem>
//               ))}
//             </div>
//           </div>
//         </NavbarMenu>
//       </NextUINavbar>
//     </>
//   );
// };
