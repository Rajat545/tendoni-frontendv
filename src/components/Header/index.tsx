"use client";;
import React, { useState, useRef, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import DarkLogo from "@Images/logo/DarkLogo.png";
import AccentLogo from "@Images/logo/AccentLogo.png";
import CloseIcon from "@Images/logo/Close_round.svg";
import ExpandIcon from "@Images/logo/Expand_down.svg";
import Menu from "@Images/svgs/menu.svg";
import AccentMenu from "@Images/logo/accent-menu.png";
import './style.css'
import { menuItems, childMenuData } from "../../Data/home";
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { isAuth } from "../../Context/AuthContext";
import { CartContext } from "../../Context/CartContext";


const Header: React.FC = () => {
  const router = useRouter();
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showChildMenu, setShowChildMenu] = useState(false);
  const [childMenuItems, setChildMenuItems] = useState<any[]>([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [expandedChildMenu, setExpandedChildMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const { setShowCartPopup, cart } = useContext(CartContext)
  
  const handleLogout = () => {
    localStorage.removeItem("user-info");
    localStorage.removeItem("access-token");
    toast.success("Successfully logged out!");
    router.push("/login");
  };
  const handleExpandIconClick = (menuItem: any) => {
    if (expandedChildMenu === menuItem.id) {
      setExpandedChildMenu(null);
    } else {
      setExpandedChildMenu(menuItem.id);
    }
  };
  const handleToggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };
  const handleNavItemClick = () => {
    setShowMobileMenu(false);
  };
  const handleNavItemHover = (item: any) => {
    setActiveNavItem(item.id);
    setShowChildMenu(item.childMenu);
    setChildMenuItems(childMenuData[item.id] || []);
  };
  const handleMouseLeave = () => {
    setShowChildMenu(false);
  };
  const getFirstChildPosition = () => {
    const firstNavItem = document.querySelector(".nav-bar");
    if (firstNavItem) {
      const rect = firstNavItem.clientWidth;
      return `${rect}px`;
    }
    return "480px";
  };
  const handleCartIconClick = () => {
    if (cart.length === 0) {
      toast.error('cart is empty add to cart first!')
    }
    setShowCartPopup(true);
  };
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setShowChildMenu(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  const renderChildMenuIcon = (menuItem: any) => {
    if (menuItem.childMenu) {
      return (
        <div
          className="child-menu-icon"
          onClick={() => handleExpandIconClick(menuItem)}
        >
          <Image src={ExpandIcon} alt="Dropdown Icon" width={16} height={16} />
        </div>
      );
    }
    return null;
  };
  useEffect(() => { }, []);
  const renderChildMenu = (childItems: any[], parentId: string) => {
    if (childItems && childItems.length > 0 && expandedChildMenu === parentId) {
      return (
        <div className="child-menu">
          {childItems.map((childItem, index) => (
            <ul key={index} className="pl-8 pr-4 list-disc mb-2">
              <li className="text-sm text-[#A67A44] font-semibold mb-1">
                {childItem?.header}
              </li>
              <div className="mb-2 flex flex-col items-starts">
                {childItem?.data.map((innerChildData: any) => (
                  <Link
                    href={innerChildData?.url}
                    key={innerChildData?.id}
                    className={`child-menu-item text-[#A67A44] font-semibold mb-2 text-xs`}
                    onClick={handleNavItemClick}
                  >
                    {innerChildData?.label}
                  </Link>
                ))}
              </div>
            </ul>
          ))}
        </div>
      );
    }
    return null;
  };
  useEffect(() => {
    const headerScrolled = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", headerScrolled);
    headerScrolled();
    return () => {
      window.removeEventListener("scroll", headerScrolled);
    };
  }, []);
  const isAuthnticate = isAuth()
  const handleCheckOut = () => {
    if (isAuthnticate) {
      router.push("/my-order")
    } else {
      router.push("/login")
    }
  }
  return (
    <header
      id="header"
      className={`w-full z-10 fixed transition-all header ${isScrolled || showChildMenu
        ? "header-scrolled"
        : "[background:linear-gradient(180deg,rgba(166,122,68,0.7),rgba(166,122,68,0.02))]"
        } `}
    >
      <Toaster />
      {/* <div
        className={`flex flex-row items-center justify-between container mx-auto lg:px-4 px-6 `}
        id='header'
      > */}
      <div className="flex items-center gap-4 text-sm justify-around"
        id="header">
        <Link href="/">
          <div className="flex z-20">
            <Image
              src={showChildMenu || isScrolled ? AccentLogo : DarkLogo}
              alt="Tendoni Logo"
              className="w-[120px] md:w-[140px] lg:w-[120px] xl:w-[150px] lg:h-auto h-auto"
            />
          </div>
        </Link>
        <nav className="hidden lg:flex z-20 flex-row font-oswald items-center text-sm lg:text-md xl:text-xl space-x-2 md:space-x-2 lg:space-x-3 xl:space-x-6 nav-bar">
          {menuItems.map((menuItem) => (
            <Link
              href={menuItem.url}
              key={menuItem.id}
              className={`nav-item ${activeNavItem === menuItem.id ? "active" : ""
                } ${showChildMenu ? "child-visible" : ""} ${showChildMenu && activeNavItem === menuItem.id
                  ? "active-child-visible"
                  : ""
                }`}
              onMouseEnter={() => handleNavItemHover(menuItem)}
            >
              {menuItem.label}
            </Link>
          ))}
        </nav>
        <Link href={"/become-a-partner"}>
          <button
            className={`hidden lg:flex px-4 py-1 items-center border-2 pb-2 text-sm lg:text-md xl:text-xl font-oswald border-[#A67A44] hover:bg-[#A67A44] hover:text-black ${showChildMenu ? "child-visible" : ""
              } rounded-sm text-center `}
          >
            Become a partner
          </button>
        </Link>
        <div >
          <div className='addToCart'>
            <h1 className="cart" style={{ marginBottom: '-13px', marginLeft: '5px', backgroundColor: '#a67a44' }}> {cart.length > 0 ? cart.length : null}</h1>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={handleCartIconClick} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer size-6 mt-2 text-[#A67A44]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>
        </div>
        <>
          <button
            className={`hidden lg:flex items-center pb-2 text-sm lg:text-md xl:text-xl font-oswald ${showChildMenu ? "child-visible" : ""
              } rounded-sm text-center `}
            style={{ marginTop: '5px' }}
            onMouseOver={() => setOpenProfile((prev) => !prev)}
          >
            {isAuthnticate ? "User" : ''}
          </button>
          <Link href={'/login'}
            className={`hidden lg:flex items-center pb-2 text-sm lg:text-md xl:text-xl font-oswald ${showChildMenu ? "child-visible" : ""
              } rounded-sm text-center `}
            style={{ marginRight: '0px'}}
          >
            {!isAuthnticate ? "Login" : ''}
          </Link>
          {openProfile && (
            <div className="flex flex-col dropDownProfile">
              <ul className="flex flex-col gap-4">
                <div style={{ marginLeft: '20px' }}>
                  <button
                    onClick={handleCheckOut}
                    className={`hidden lg:flex items-center pb-2 text-sm md:text-base lg:text-lg xl:text-xl font-oswald ${showChildMenu ? "child-visible" : ""
                      } rounded-sm text-center `}>
                    My Profile
                  </button>
                  <Link
                    href={'/login'}
                    onClick={handleLogout}
                    className={`hidden lg:flex items-center pb-2 text-sm md:text-base lg:text-lg xl:text-xl font-oswald ${showChildMenu ? "child-visible" : ""
                      } rounded-sm text-center `}>
                    Logout
                  </Link>
                </div>
              </ul>
            </div>
          )}
        </>
        <button className="lg:hidden p-2" onClick={handleToggleMobileMenu}>
          <Image
            src={showChildMenu || isScrolled ? AccentMenu : Menu}
            alt="menu"
            width={28}
            height={28}
          />
        </button>
      </div>
      {showChildMenu && (
        <>
          <div
            className={`top-0 left-0 w-full h-auto bg-darkColor justify-start text-white z-20 px-24 py-12 opacity-0 transition-opacity transform translate-y-2 origin-top ${showChildMenu ? "slide-in" : "slide-out"
              }`}
            onMouseLeave={handleMouseLeave}
            style={{
              position: "relative",
              opacity: 1,
              transform: "translateY(0)",
            }}
          >
            <div
              className="w-full h-auto bg-darkColor"
              style={{
                position: "absolute",
                left: 0,
              }}
            >
              <div
                className="flex flex-col justify-center mb-10 mx-auto space-y-6"
                style={{
                  width: getFirstChildPosition(),
                }}
              >
                {childMenuItems.map((item) => (
                  <div
                    className="font-poppins text-sm md:text-base lg:text-lg xl:text-xl text-white font-semibold fade-in"
                    key={item.id}
                  >
                    <div className="border-b-2 border-gray-500 mb-4">
                      {item.header}
                    </div>
                    <div className="grid grid-cols-2 gap-2 ">
                      {item.data?.map((data: any) => (
                        <div
                          className="grid font-poppins text-white font-extralight hover:text-accentColor"
                          key={data.id}
                        >
                          <Link className="text-base" href={data.url}>
                            {data.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      {showMobileMenu && (
        <div className="lg:hidden flex flex-col fixed top-0 left-0 w-[80%] h-screen bg-darkColor  p-4 z-20 ">
          <div className="flex justify-between mb-4">
            <Link href="/">
              <Image
                src={AccentLogo}
                alt="Tendoni Logo"
                className="lg:w-[150px] lg:h-auto md:w-[110px] w-[90px] h-auto"
                width="150"
                height="100"
              />
            </Link>
            <Image
              src={CloseIcon}
              alt="close"
              width={24}
              height={24}
              onClick={handleNavItemClick}
            />
          </div>
          {menuItems.map((menuItem) => (
            <div key={menuItem.id}>
              <div
                className="nav-item-container flex justify-between"
              >
                <Link
                  href={menuItem.url}
                  className={`nav-item ${activeNavItem === menuItem.id ? "active" : ""
                    } text-sm text-[#A67A44] font-semibold mb-2`}
                  onClick={
                    menuItem.childMenu
                      ? () => handleExpandIconClick(menuItem)
                      : handleNavItemClick
                  }
                >
                  {menuItem.label}
                </Link>
                {renderChildMenuIcon(menuItem)}
              </div>
              {menuItem.childMenu &&
                renderChildMenu(childMenuData[menuItem.id], menuItem.id)}
            </div>
          ))}
          <Link href={"/become-a-partner"}>
            <button
              className={`mt-2 lg:hidden px-2 py-1 border-2 border-[#A67A44] bg-[#A67A44] hover:bg-[#A67A44] hover:text-white rounded-sm text-center text-white w-36 text-xs font-bold`}
            >
              BECOME PARTNER
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};
export default Header;
