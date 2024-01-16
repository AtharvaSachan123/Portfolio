import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demoLink: "https://crypto-hunt1.vercel.app/",
      demoCode:"https://github.com/AtharvaSachan123/Crypto-Hunt.git",
    },
    {
      id: 2,
      src: reactParallax,
      demoLink:"https://atharva1.vercel.app/",
      demoCode:"https://github.com/AtharvaSachan123/Portfolio",
    },
    {
      id: 3,
      src: navbar,
      demoLink:"https://calculator-theta-eight-15.vercel.app/",
      demoCode:"https://github.com/AtharvaSachan123/calculator",
    },
    {
      id: 4,
      src: reactSmooth,
      demoLink:"https://moveitwebsite.vercel.app/",
      demoCode:"https://github.com/AtharvaSachan123/html-moveitwebsite",
    },
    {
      id: 5,
      src: installNode,
      demoLink:"https://temperature-converter-pied.vercel.app/",
      demoCode:"https://github.com/AtharvaSachan123/temperature-converter",

    },
    {
      id: 6,
      src: reactWeather,
      demoLink:"https://weather-app-nine-self.vercel.app/",
      demoCode:"https://github.com/AtharvaSachan123/weather-app",
    },
  ];

  const handleDemoButtonClick = (demoLink) => {
    window.location.href = demoLink;
  };
  const handleCodeButtonClick = (demoCode) => {
    window.location.href = demoCode;
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink,demoCode}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemoButtonClick(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-blue-400"
                >
                  Demo
                </button>
                <button 
                onClick={()=> handleCodeButtonClick(demoCode)}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-blue-400">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
