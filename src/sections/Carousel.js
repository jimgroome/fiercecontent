import React, { useEffect } from "react";
import Slider from "react-slick";

const Carousel = () => {
  const afterCarouselLoad = () => {
    let carouselHeight = document.getElementsByClassName("slick-slider");
    // carouselHeight = carouselHeight[0];
    //   .clientHeight;

    console.log(carouselHeight);
    // document.getElementsByClassName("slick-slide").style.height =
    //   carouselHeight + "px";
  };

  useEffect(() => {
    let carouselHeight = document.getElementsByClassName("slick-slider")[0]
      .clientHeight;
    console.log(carouselHeight);

    var slides = document.getElementsByClassName("slick-slide");
    var i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.height = carouselHeight + "px";
    }

    // slides.map(slide => ());
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    slide: ""
    // onInit: afterCarouselLoad()
  };

  const clients = [
    { file: "verifone.png", name: "Verifone" },
    { file: "doddle.png", name: "Doddle" },
    { file: "intel.png", name: "Intel" },
    { file: "microsoft.png", name: "Microsoft" },
    { file: "mercedes.png", name: "Mercedes" },
    { file: "msv.png", name: "MotorSport Vision" },
    { file: "sap.png", name: "SAP" },
    { file: "shoppertrak.png", name: "ShopperTrak" },
    { file: "autosport-international.png", name: "Autosport International" }
  ];

  // Verifone, Doddle, Intel, Microsoft, Mercedes-Benz, MotorSportVision, Autosport International, SAP, ShopperTrak
  // https://react-slick.neostack.com/docs/api/

  return (
    <Slider {...settings} id='logo-carousel'>
      {clients.map(client => (
        <img
          src={process.env.PUBLIC_URL + "/carousel/" + client.file}
          alt={client.name}
          key={client.file}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
