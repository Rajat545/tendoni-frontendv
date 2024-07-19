import Image from "next/image";
import Dockyar from "../../../public/images/slider/dockyard.jpg";
const AboutSection = () => {
  return (
    <section className="">
      <div className="py-16">
        <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6 space-y-4">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <Image
                src={Dockyar}
                alt="image"
                className="rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="md:7/12 lg:w-6/12 flex flex-col space-y-6">
              <h2 className="text-2xl text-gray-900 font-medium font-poppins md:text-4xl">
                Welcome to Tendoni –{" "}
                <span className="">
                  Your Trusted Partner in Quality Exports from India!
                </span>
              </h2>
              <p className="mt-6 text-gray-600">
                At Tendoni, we take immense pride in bringing the vibrant and
                rich flavors of India to the global stage. Established with a
                vision to showcase the diversity and excellence of Indian
                produce.
              </p>
              <p className="mt-4 text-gray-600">
                Tendoni has evolved into a leading exporter of spices,
                vegetables, grains, masale, food chemicals, pharmaceuticals, and
                cosmetics.
              </p>
              <button className="md:flex w-fit bg-accentColor px-2 py-1 rounded-md">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
