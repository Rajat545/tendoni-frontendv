import { memo, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import style from "./style.module.css";
import ExportIcon from "@Images/French-Exports.jpg";
import Section from "@/components/Section/Section";
import Export from "@Images/home/image1.jpg";
import InternationTrade from "@Images/home/international trade.....jpg";
import Indenting from "@Images/home/indenting.jpeg";
import Distribution from "@Images/home/distribution.jpg";

interface UnbeatablesItem {
  id: number;
  unbeatables_text: {
    title: string;
    descriptions: string[];
  };
  image_url: string;
}

interface UnbeatablesSlider {
  title: string;
  unbeatables_items: UnbeatablesItem[];
}

const unbeatablesContent: UnbeatablesSlider = {
  title: "Meet our Unbeatables",
  unbeatables_items: [
    {
      id: 1,
      unbeatables_text: {
        title: "Export ",
        descriptions: [
          "Tendoni, a leading company in the export industry, specializes in providing high-quality food chemicals, fresh fruits, and vegetables to customers around the globe. With a commitment to excellence, Tendoni ensures that its products meet the highest standards of quality, safety, and freshness.",
          "At Tendoni, we understand the importance of timely and efficient delivery, and our logistics network ensures that our products reach their destination promptly. With a global reach and a customer-centric approach, Tendoni is your trusted partner for top-notch food chemicals, fresh fruits, and vegetables that meet and exceed international standards.",
          "Our diverse range of food chemicals caters to various industries, offering innovative solutions and ingredients to enhance the quality and flavor of food products. Additionally, our commitment to sustainable and ethical sourcing practices ensures that our customers receive products that are not only exceptional in quality but also environmentally conscious.",
          "In the realm of fresh produce, Tendoni takes pride in delivering a wide array of fruits and vegetables, sourced from trusted farms and growers. Our stringent quality control measures guarantee that only the finest and freshest produce reaches our customers, making Tendoni a reliable partner in the global food supply chain.",
        ],
      },
      image_url: Export.src,
    },
    {
      id: 2,
      unbeatables_text: {
        title: "Import and Distribution ",
        descriptions: [
          "Tendoni stands as a distinguished import and distribution company, specializing in a diverse range of products that include food chemicals, fresh fruits, vegetables, masala, and pharmaceuticals. With a global footprint, Tendoni is dedicated to sourcing and delivering high-quality goods to meet the demands of international markets.",
          "Our commitment to excellence is evident in our meticulous selection of suppliers and producers, ensuring that our customers receive products of the highest standards. Tendoni's comprehensive portfolio encompasses food chemicals for various industries, an array of fresh and nutritious fruits and vegetables, aromatic masalas to enhance culinary experiences, and reliable pharmaceuticals meeting global healthcare standards.",
          "Backed by a robust logistics network, Tendoni ensures efficient and timely delivery to destinations worldwide. Our focus on customer satisfaction, quality assurance, and adherence to international regulations positions us as a trusted partner in the global import and distribution landscape.",
          "Tendoni strives to play a vital role in meeting the diverse needs of our customers, fostering long-term relationships built on trust, reliability, and the assurance of top-notch products across the food, spice, and pharmaceutical sectors.",
        ],
      },
      image_url: Distribution.src,
    },
    {
      id: 3,
      unbeatables_text: {
        title: "International Trade ",
        descriptions: [
          "Tendoni is a dynamic player in international trade, specializing in a wide spectrum of products such as food chemicals, fresh fruits, vegetables, masalas, and pharmaceuticals. Our commitment to facilitating global commerce is reflected in the seamless distribution of high-quality goods to destinations across the world.",
          "With a focus on excellence, Tendoni ensures that every product in our portfolio meets stringent quality standards. From essential food chemicals catering to diverse industries to fresh and flavorful fruits and vegetables, aromatic masalas, and reliable pharmaceuticals, our offerings are designed to meet the varied demands of international markets",
          "Tendoni takes pride in its role as a global trade partner, connecting producers and consumers with efficiency and reliability. Our commitment to ethical business practices, adherence to international regulations, and a robust supply chain make us a trusted choice for international trade in food, spices, and pharmaceuticals. ",
          "As we navigate the complexities of global markets, Tendoni stands as a beacon of quality and integrity in facilitating the seamless exchange of goods worldwide.",
        ],
      },
      image_url: InternationTrade.src,
    },
    {
      id: 4,
      unbeatables_text: {
        title: "Indenting ",
        descriptions: [
          "Tendoni is a dynamic player in international trade, specializing in a wide spectrum of products such as food chemicals, fresh fruits, vegetables, masalas, and pharmaceuticals. Our commitment to facilitating global commerce is reflected in the seamless distribution of high-quality goods to destinations across the world.",
          "With a focus on excellence, Tendoni ensures that every product in our portfolio meets stringent quality standards. From essential food chemicals catering to diverse industries to fresh and flavorful fruits and vegetables, aromatic masalas, and reliable pharmaceuticals, our offerings are designed to meet the varied demands of international markets",
          "Tendoni takes pride in its role as a global trade partner, connecting producers and consumers with efficiency and reliability. Our commitment to ethical business practices, adherence to international regulations, and a robust supply chain make us a trusted choice for international trade in food, spices, and pharmaceuticals. ",
          "As we navigate the complexities of global markets, Tendoni stands as a beacon of quality and integrity in facilitating the seamless exchange of goods worldwide.",
        ],
      },
      image_url: Indenting.src,
    },
  ],
};

interface UnbeatablesProps {
  unbeatablesContent: UnbeatablesSlider;
}

const Unbeatables = () => {
  const totatCarousel = unbeatablesContent.unbeatables_items.length;
  const [sliderProgressPercentage, setSliderProgressPercentage] = useState(
    (1 / totatCarousel) * 100
  );
  const sliderProgressBarRef = useRef<HTMLDivElement>(null);
  const currentCarouselItemIndex = Math.round(
    (sliderProgressPercentage * totatCarousel) / 100
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    lazyLoad: "progressive",
    beforeChange: (current: number, next: number) => {
      let completePercentage = ((next + 1) / totatCarousel) * 100;
      completePercentage = Math.min(completePercentage, 100);
      setSliderProgressPercentage(completePercentage);
    },
  };

  useEffect(() => {
    if (sliderProgressBarRef.current) {
      sliderProgressBarRef.current.style.backgroundSize = `${sliderProgressPercentage}% 100%`;
    }
  }, [sliderProgressPercentage]);

  return (
    <div className="w-full flex items-center justify-center ">
      <Section
        title=" Our Services"
        id="food-division"
        subtitle="The Services Which We Provide Globally"
      >
        <section className={`${style.UnbeatableSection} container `}>
          <Slider {...settings}>
            {unbeatablesContent.unbeatables_items.map((unbeatableItem) => (
              <div
                key={unbeatableItem.id}
                className={`${style.Unbeatables}`}
                style={{ height: "auto" }}
              >
                <div className={style.UnbeatablesLeft}>
                  <h2 className={style.slideTitle}>
                    {unbeatableItem.unbeatables_text.title}
                  </h2>
                  {unbeatableItem.unbeatables_text.descriptions.map(
                    (description, index) => (
                      <p key={index} className={style.slideParagraph}>
                        {description}
                      </p>
                    )
                  )}
                </div>
                <div className={style.UnbeatablesRight}>
                  <Image
                    src={unbeatableItem.image_url}
                    alt="BeatO unbeatable"
                    width={431}
                    height={431}
                    loading="lazy"
                    className={style.sliderImg}
                  />
                </div>
              </div>
            ))}
          </Slider>
          <div className={`flex items-center ${style.sliderProgressWrap}`}>
            <div>
              <div>
                <span className={style.sliderProgressCurrentCount}>
                  {currentCarouselItemIndex < 10
                    ? `0${currentCarouselItemIndex}`
                    : currentCarouselItemIndex}
                </span>
                <span className={style.sliderProgressSlash}> / </span>
                <span className={style.sliderProgressTotalCount}>
                  {totatCarousel < 10 ? `0${totatCarousel}` : totatCarousel}
                </span>
              </div>
            </div>
            <div
              className={style.sliderProgress}
              style={{ width: "130px" }}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              ref={sliderProgressBarRef}
            >
              <span className={style.srOnly}></span>
            </div>
          </div>
        </section>
      </Section>
    </div>
  );
};

export default memo(Unbeatables);
