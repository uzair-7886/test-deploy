import React from "react";
import MainContent from "../../shared/MainContent";

const CityOxford = () => {
  const contentData = [
    {
      image: "/Our Organization Page/Parks.jpg", 
      heading: "Parks",
      text: "One of the greenest cities in the UK, Oxford boasts 28 nature reserves and several parks, nature walks, and green spaces within and on the outskirts of the Oxford ring road. University Parks, Port Meadows, Mesopotamia, Lye Valley, and South Parks are just a few examples of the city’s lush, open spaces where you can unwind and enjoy nature.",
    },
    {
        image: "/Our Organization Page/Museum.png",
        heading: "History & Museums",
        text: `Oxford's history stretches back to Saxon times, when it was known as "Oxenaforda" (meaning "Ford of the Oxen"). The city is home to numerous museums, each offering a glimpse into the region’s contribution to world history and culture. Key museums include the Ashmolean Museum, the Museum of the History of Science, the Museum of Natural History, and the Pitt Rivers Museum, all of which house some of the world’s finest collections of art, historical artefacts, and cultural treasures.`,
      },
    {
      image: "/Our Organization Page/Shopping.jpg",
      heading: "Shopping",
      text: "Oxford caters to a wide range of shopping preferences, from popular high-street brands to exclusive designer outlets. The Westgate Centre, a major shopping hub, underwent an extensive renovation in 2016-17, offering a variety of shops, restaurants, and entertainment options. A short 30-minute drive from Oxford will take you to the Bicester Village Shopping Outlet, where you’ll find some of the world’s leading designer labels in a luxury shopping setting.",
    },
    {
      image: "/Our Organization Page/food.jpg",
      heading: "Food",
      text: "Oxford’s food scene is diverse and plentiful, offering everything from local delicacies to international cuisine. The areas around Cornmarket Street, High Street, George Street, Gloucester Green, and the Castle Quarter are home to a variety of restaurants, cafes, and eateries, including chains like Nando’s, Yo! Sushi, and GBK. For a truly local experience, don’t miss the Covered Market, which has been serving delicious food and offering fresh produce since 1774.",
    },{
      image: "/Our Organization Page/Transport.jpg",
      heading: "Transport ",
      text: "Oxford benefits from a well-developed public transport network that connects the city with London and other major UK destinations. Though Oxford has its own domestic airport, Heathrow, the UK’s largest airport, is only an hour’s drive away. Regular trains and buses depart for London every half hour, making travel convenient for students and visitors alike.",
    },{
      image: "/Our Organization Page/safety.jpeg",
      heading: "Safety",
      text: "Oxford is considered one of the safest cities in the UK, with a low crime rate, even when taking into account the occasional bike theft. University buildings are equipped with top-notch security features, including 24-hour security staff, CCTV monitoring, electronic entry and exit systems, and smoke alarms. Additionally, Residential Deans and Campus Heads reside on campus, offering support and ensuring student safety around the clock.",
    }
  ];

  return (
    <div className="bg-offWhite pt-12 pb-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Heading Column */}
        <div className="md:w-1/3 w-full">
          <h1 className="text-mainYellow uppercase text-4xl md:text-[42px] font-enriqueta font-bold">
          THE CITY OF
          OXFORD          </h1>
        </div>
        {/* Text Column */}
        <div className="md:w-2/3 w-full">
          <p className="text-textColor text-lg md:text-[16px] font-roboto leading-relaxed text-justify">
          Oxford, famously known as "the city of dreaming spires," is renowned worldwide as one of the most beautiful and livable cities. With a rich history spanning over 800 years, it has long been home to royalty, scholars, and thinkers. The city offers a perfect blend of ancient charm and modern conveniences, with an array of activities for both tourists and residents to explore in the town centre.          </p>
          <br />
          <p className="text-textColor text-lg md:text-[16px] font-roboto leading-relaxed text-justify">
          Whether you’re visiting the city's many historic buildings, colleges, and museums, enjoying a drink or meal, catching a show, or indulging in some retail therapy, Oxford truly has something for everyone. Here are some glimpses of life in Oxford:          </p>
        </div>
      </div>
      <hr className="border-t-1 border-mainYellow my-10 max-w-7xl mx-auto" />
  
      <MainContent content={contentData} />
    </div>
  );
  
  
};

export default CityOxford;
