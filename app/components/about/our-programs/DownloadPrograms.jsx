import React from "react";
import Image from "next/image";
import Link from "next/link";

const programData = [
  {
    id: 1,
    title: "OXFORD SUMMER PROGRAM",
    description:
      "In 2025, we are proud to present our flagship Oxford Summer Program (with limited seats) at the historic St Anne’s College, University of Oxford, running from 20th July to 1st August, exclusively for participants aged 14–19+.",
    image: '/summer.png',
    downloadLink: "/docs/Oxford Summer Program Information Pack.pdf",
    pageLink:"/oxford-summer-program"
  },
  {
    id: 2,
    title: "EXECUTIVE LEADERSHIP PROGRAM",
    description:
      "For professionals and global leaders, we are delighted to host the Executive Leadership Program at Oxford from 5th to 12th July 2025, offering an intensive experience designed to advance leadership skills and strategic thinking.",
    image: '/exec.png',
    downloadLink: "/docs/Oxford-Executive Information Pack.pdf",
    pageLink:"/executive-leadership-program"
  },
  {
    id: 3,
    title: "OXFORD-CHINA SUMMER",
    description:
      "Our Oxford-China Summer in Chengdu will take place from 2nd to 15th August 2025, bringing the essence of the Oxford Experience to a dynamic and culturally rich setting.",
    image: '/china.png',
    downloadLink: "/docs/Information Pack Oxford China.pdf",
    pageLink:"/oxford-china-summer-program"
  },
  {
    id: 4,
    title: 'CUSTOMISED CAMP',
    description:
      "Reach out if you'd like us to organise a customised or bespoke camp year-round for 25+ participants at the University of Oxford.",
    image: '/custom.png',
    downloadLink: "/docs/Oxford Summer Program Information Pack.pdf",
    pageLink:"/customised-camp"
  },
];

const DownloadPrograms = () => {
  return (

    <div className="max-w-7xl mx-auto px-4 pb-16 grid gap-8 grid-cols-1 md:grid-cols-2">
      {programData.map((program) => (
        <div
          key={program.id}
          className="bg-white CardShadow rounded-[20px] overflow-hidden"
        >
          {/* Image Section */}
          <div className="w-full h-[280px] relative">
            <Image
              src={program.image}
              alt={program.title}
              layout="fill"
              className="object-cover "
            />
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Wrap only the title in a Link */}
            <Link href={program.pageLink}>
              <h3 className="text-lg font-bold text-mainBlue font-roboto mb-2 cursor-pointer">
                {program.title}
              </h3>
            </Link>

            <p className=" text-textColor text-base font-roboto text-justify mb-4">
              {program.description}
            </p>

            {/* Download Information Pack - Now works correctly */}
            <a
              href={program.downloadLink}
              download
              className="flex items-center text-mainBlue font-roboto underline font-bold text-sm"
            >
              <Image
                src="/Our Programs/download.svg"
                alt="Download"
                width={16}
                height={16}
                className="mr-2"
              />
              Download Information Pack
            </a>

            <Link href={program.pageLink}>
              <button className="mt-4 px-4 py-2 bg-mainBlue text-white font-bold rounded">
                Read More
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DownloadPrograms;
