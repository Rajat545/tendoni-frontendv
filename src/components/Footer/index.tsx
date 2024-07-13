import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo/AccentLogo.png";
const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-darkColor bottom-0 pb-6">
      <div className="w-full container mx-auto px-4 lg:px-6 xl:px-6 py-6 lg:py-6 flex flex-col lg:flex-row items-start justify-between">
        <div className="flex flex-col text-center items-start w-full text-accentColor ">
          <Image
            src={Logo}
            alt="Tendoni Logo"
            className=""
            width="150"
            height="100"
            priority={true}
          />
          <span
            className="p-0 m-0 mt-1  ml-2 ps-2 ms-1"
            style={{ fontSize: "11px" }}
          >
            SUCCESS WITH SYNERGY
          </span>
          <div className="text-left font-poppins font-light mt-1">
            <span className="text-sm">
              At Tendoni Group, we specialize in{" "}
              <br className="hidden lg:block" /> sourcing and distributing
              premium <br className="hidden lg:block" /> quality spices,aromatic
              masalas,
              <br className="hidden lg:block" /> and essential food chemicals
              worldwide.
            </span>
          </div>
          <div className="flex flex-row w-full font-poppins space-x-4 pt-2">
            <Link href={"#"} className=" ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </Link>
            <Link href={"#"} className=" ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </Link>
            <Link href={"#"} className=" ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </Link>
          </div>
        </div>
        <hr className="w-full h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 lg:hidden opacity-50" />
        <div className="flex flex-col text-center items-start w-full text-accentColor space-y-0 lg:space-y-4">
          <h1 className="font-oswald text-lg lg:text-xl">Useful Links</h1>
          <div className="flex flex-wrap lg:flex-nowrap flex-row lg:flex-col font-poppins text-left font-light">
            <Link
              href={"/"}
              className="   w-auto pr-2 lg:pr-0 border-r border-r-gray-200 lg:border-r-0 mt-2 lg:mt-0 text-sm lg:text-base"
            >
              Home
            </Link>
            <Link
              href={"/about-us"}
              className="   w-auto px-2 lg:px-0 border-r border-r-gray-200 lg:border-r-0 mt-2 lg:mt-0 text-sm lg:text-base"
            >
              About Us
            </Link>
            <Link
              href={"/food-division/Spices"}
              className="   w-auto px-2 lg:px-0 border-r border-r-gray-200 lg:border-r-0 mt-2 lg:mt-0 text-sm lg:text-base"
            >
              Food Division
            </Link>
            <Link
              href={"/international-trade"}
              className="   w-auto px-2 lg:px-0 border-r border-r-gray-200 lg:border-r-0 mt-2 lg:mt-0 text-sm lg:text-base"
            >
              International Trade
            </Link>
            <Link
              href={"/become-a-partner"}
              className="   w-auto px-2 lg:px-0 mt-2 lg:mt-0 text-sm lg:text-base"
            >
              Become a Partner
            </Link>
          </div>
        </div>
        <hr className="w-full h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 lg:hidden opacity-50" />
        <div className="flex flex-col text-center items-start w-full text-accentColor  space-y-0 lg:space-y-4">
          <h1 className="font-oswald text-lg lg:text-xl ">
            Business Verticals
          </h1>
          <div className="flex flex-wrap lg:flex-nowrap flex-row lg:flex-col font-poppins text-left font-light">
            <Link
              href={"/food-division/Spices#Turmeric"}
              className="  w-auto pr-2 lg:pr-0 border-r border-r-gray-200 lg:border-r-0 mt-2 lg:mt-0 text-sm lg:text-base"
            >
              Spices
            </Link>
            <Link
              href={"/food-division/vegetable"}
              className="  w-auto px-2 lg:px-0 border-r border-r-gray-200 lg:border-r-0 mt-2 lg:mt-0 text-sm lg:text-base"
            >
              Vegetables
            </Link>
            <Link
              href={"/chemical-Division/foodChemical"}
              className="  w-auto px-2 lg:px-0 border-r border-r-gray-200 lg:border-r-0 mt-2 lg:mt-0 text-sm lg:text-base"
            >
              Food Chemicals
            </Link>
            <Link
              href={"/chemical-Division/pharmaceutical"}
              className="  w-auto px-2 lg:px-0 border-r border-r-gray-200 lg:border-r-0 mt-2 lg:mt-0 text-sm lg:text-base"
            >
              Pharmaceuticals
            </Link>
            <Link
              href={"#"}
              className="  w-auto px-2 lg:px-0 mt-2 lg:mt-0 text-sm lg:text-base"
            >
              Cosmetics
            </Link>
          </div>
        </div>
        <hr className=" w-full h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 lg:hidden opacity-50" />
        <div className="flex flex-col text-start items-start align-top w-full text-accentColor space-y-2 md:space-y-4">
          <h1 className="font-oswald text-lg lg:text-xl">Contact Us</h1>
          <div className="flex flex-col font-poppins items-start">
            <span className="w-full">
              <p className="m-0 font-light  text-sm lg:text-base">
                Plot No. 21,Mahesh Plaza, Sector B,Second Floor Vidya
                Nagar,Hoshangabad Road Bhopal,Madhya Pradesh-462026
              </p>
              <p className="m-0 font-light hidden lg:block">&nbsp;</p>
              <p className="m-0 text-left ">
                <b className="font-poppins  text-sm lg:text-base">Phone</b>
                <span className="font-light  text-sm lg:text-base">
                  : +91-755-3529270
                </span>
              </p>
              <p className="m-0 text-left">
                <b className="font-poppins  text-sm lg:text-base">Email</b>
                <span className="font-light  text-sm lg:text-base">
                  : india@tendonigroup.com
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
      <hr className=" w-full h-px my-4 bg-gray-200 border-0 dark:bg-gray-700 lg:hidden opacity-50" />
      <div className="flex justify-between text-accentColor container mx-auto px-4 lg:px-6 xl:px-6 gap-14">
        <h1 className="font-oswald text-sm lg:text-base">
          © Tendoni Group 2016 |{" "}
          <Link href="/terms"> Terms and Conditions </Link> |{" "}
          <Link href="/return"> Return and Refund Policy </Link>
        </h1>
        <Link href="https://venturingdigitally.com">
          <h1 className="font-oswald text-sm lg:text-base">
            Designed & Developed By: Venturing Digitally
          </h1>
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
