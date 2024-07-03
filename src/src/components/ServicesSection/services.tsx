import Section from "../Section/Section";


const Services = () => {
  return (
    <Section id="services" title="Services" >
  <div className="container" data-aos="fade-up">
    <div className="row" data-aos="fade-up" data-aos-delay="200">
      <div className="col-md-6">
        <div className="icon-box mb-5 p-7 rounded-md bg-white group">
          <i className="bi bi-laptop float-left text-[#5c8eb0] text-5xl leading-none"></i>
          <h4 className="ml-18 font-bold mb-4 text-lg">
            <a href="#" className="text-[#365870] transition duration-300 group-hover:text-red-600">Lorem Ipsum</a>
          </h4>
          <p className="ml-18 leading-6 text-sm">Voluptatum deleniti atque corrupti quos dolores...</p>
        </div>
      </div>
      
    </div>
    <div className="row" data-aos="fade-up" data-aos-delay="200">
      <div className="col-md-6">
        <div className="icon-box mb-5 p-7 rounded-md bg-white group">
          <i className="bi bi-laptop float-left text-[#5c8eb0] text-5xl leading-none"></i>
          <h4 className="ml-18 font-bold mb-4 text-lg">
            <a href="#" className="text-[#365870] transition duration-300 group-hover:text-red-600">Lorem Ipsum</a>
          </h4>
          <p className="ml-18 leading-6 text-sm">Voluptatum deleniti atque corrupti quos dolores...</p>
        </div>
      </div>
      
    </div>
  </div>

    </Section>
  );
};
export default Services;
