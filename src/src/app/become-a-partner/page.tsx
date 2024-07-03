import Image from "next/image";
import Handshake from "../../../public/images/svgs/Handshake.jpg";
const BecomeAPartner = () => {
  return (
    <section className="overflow-hidden pt-24 md:pt-16 lg:pt-16 px-6 md:px-24 lg:px-24 bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center min-h-screen">
      <div className="container">
        <div className="mx-auto max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Explore Global Opportunities with Tendoni
          </h2>

          <p className=" text-gray-500 md:mt-4 pt-3 md:pt-2 lg:pt-2">
            Unlock the potential for mutual growth and success by becoming a
            valued partner with Tendoni. We believe in fostering strong,
            collaborative relationships that extend beyond transactions. Join
            hands with us and embark on a journey where your success is
            intertwined with ours.
          </p>

          <p className=" m-0 leading-7  text-gray-700 border-0 border-gray-300 sm:pr-12 = ">
            To become a partner or distributor please mail us at: <br></br>{" "}
            <span className="text-[#4a90e2]">partner@tendonigroup.com</span>
          </p>
          {/* <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-accentColor px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div> */}
        </div>
      </div>
      <img
        alt="Violin"
        src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="h-full py-8 w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
};

export default BecomeAPartner;
