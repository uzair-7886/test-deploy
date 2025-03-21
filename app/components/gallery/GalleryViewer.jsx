// 'use client'
// import { Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
// import { useState, useCallback, useEffect } from 'react';
// import { urlFor } from '@/sanity/lib/image';
// import { client } from '@/sanity/lib/client';

// const galleryQuery = `*[_type == "gallery"][0] {
//   title,
//   sections[] {
//     name,
//     description,
//     images[] {
//       image,
//       caption,
//       alt
//     }
//   }
// }`;

// export async function fetchGallery() {
//   try {
//     const data = await client.fetch(galleryQuery);
//     return data;
//   } catch (error) {
//     console.error("Error fetching gallery:", error);
//     throw new Error('Failed to fetch gallery data');
//   }
// }

// export default function GalleryViewer() {
//   // 1. All hook calls are declared unconditionally
//   const [galleryData, setGalleryData] = useState(null);
//   const [activeSection, setActiveSection] = useState(null);
//   const [expandedImageIndex, setExpandedImageIndex] = useState(null);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     async function loadData() {
//       try {
//         const data = await fetchGallery();
//         setGalleryData(data);
//         if (data.sections && data.sections.length > 0) {
//           setActiveSection(data.sections[0]);
//         }
//       } catch (error) {
//         console.error("Error fetching gallery data:", error);
//       }
//     }
//     loadData();
//   }, []);

//   // These functions and hooks are defined regardless of the data state.
//   const handleImageClick = (index) => {
//     setExpandedImageIndex(expandedImageIndex === index ? null : index);
//   };

//   const handleClickOutside = (e) => {
//     if (e.target.classList.contains('expanded-overlay')) {
//       setExpandedImageIndex(null);
//     }
//   };

//   const handleKeyDown = useCallback((e) => {
//     if (!activeSection?.images) return;
    
//     const maxIndex = activeSection.images.length - 1;
//     switch (e.key) {
//       case 'Escape':
//         setExpandedImageIndex(null);
//         break;
//       case 'ArrowLeft':
//         if (expandedImageIndex !== null) {
//           setExpandedImageIndex(prev => 
//             prev === 0 ? maxIndex : prev - 1
//           );
//         }
//         break;
//       case 'ArrowRight':
//         if (expandedImageIndex !== null) {
//           setExpandedImageIndex(prev => 
//             prev === maxIndex ? 0 : prev + 1
//           );
//         }
//         break;
//       default:
//         break;
//     }
//   }, [expandedImageIndex, activeSection]);

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [handleKeyDown]);

//   const scrollNav = (direction) => {
//     const nav = document.querySelector('.sections-nav');
//     const scrollAmount = 200;
//     if (nav) {
//       const newPosition = direction === 'right' 
//         ? scrollPosition + scrollAmount 
//         : scrollPosition - scrollAmount;
//       nav.scrollTo({ left: newPosition, behavior: 'smooth' });
//       setScrollPosition(newPosition);
//     }
//   };

//   const navigateImage = (direction) => {
//     if (!activeSection?.images) return;
    
//     const maxIndex = activeSection.images.length - 1;
//     if (direction === 'next') {
//       setExpandedImageIndex(prev => 
//         prev === maxIndex ? 0 : prev + 1
//       );
//     } else {
//       setExpandedImageIndex(prev => 
//         prev === 0 ? maxIndex : prev - 1
//       );
//     }
//   };

//   // 2. Use conditional rendering within the returned JSX
//   if (!galleryData || !activeSection) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="w-full">
//       <div className="relative">
//         <div className="container mx-auto relative flex justify-center items-center">
//           <button 
//             onClick={() => scrollNav('left')}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10  p-1 rounded-full shadow-md hover:bg-white transition-colors md:hidden"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button 
//             onClick={() => scrollNav('right')}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10 \ p-1 rounded-full shadow-md hover:bg-white transition-colors md:hidden"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
          
//           <nav className="sections-nav rounded-b-[30px] flex overflow-x-auto scrollbar-hide relative  bg-mainBlue ">
//             {galleryData.sections.map((section) => (
//               <button
//                 key={section.name}
//                 onClick={() => {
//                   setActiveSection(section);
//                   setExpandedImageIndex(null);
//                 }}
//                 className={`font-roboto sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors text-white flex-shrink-0
//                   ${
//                     activeSection?.name === section.name
//                       ? 'underline'
//                       : ''
//                   }`}
//               >
//                 {section.name.toUpperCase()}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-6 sm:py-12">
//         <div className="max-w-7xl mx-auto">
//           {/* <h2 className="text-xl sm:text-2xl font-semibold text-orange text-center mb-4 sm:mb-6">
//             {activeSection.name}
//           </h2> */}

//           {expandedImageIndex !== null && activeSection.images[expandedImageIndex] && (
//             <div 
//               className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 expanded-overlay"
//               onClick={handleClickOutside}
//             >
//               <button
//                 onClick={() => setExpandedImageIndex(null)}
//                 className="absolute top-4 right-4 text-white hover:text-gray-300"
//               >
//                 <X className="w-6 h-6" />
//               </button>
              
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigateImage('prev');
//                 }}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
//               >
//                 <ChevronLeft className="w-6 h-6 text-white" />
//               </button>
              
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigateImage('next');
//                 }}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
//               >
//                 <ChevronRight className="w-6 h-6 text-white" />
//               </button>

//               <div 
//                 className="max-w-5xl w-full"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <img
//                   src={urlFor(activeSection.images[expandedImageIndex].image)
//                         .width(1200)
//                         .quality(90)
//                         .url()}
//                   alt={activeSection.images[expandedImageIndex].alt}
//                   className="w-full h-auto rounded-lg"
//                 />
//               </div>
//             </div>
//           )}

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {activeSection.images.map((item, index) => (
//               <div
//                 key={index}
//                 onClick={() => handleImageClick(index)}
//                 className="group relative cursor-pointer"
//               >
//                 <div className="aspect-[4/3] overflow-hidden ">
//                   <img
//                     src={urlFor(item.image)
//                       .width(340)
//                       .height(240)
//                       .quality(90)
//                       .url()}
//                     alt={item.alt}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center ">
//                     <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                 </div>   
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

export default function GalleryViewer() {
  const [sections, setSections] = useState([]);
  const [activeSection, setActiveSection] = useState(null);
  const [expandedImageIndex, setExpandedImageIndex] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Fetch the folder-based gallery data
  useEffect(() => {
    async function loadData() {
      try {
        // Fetch from our newly created route
        const res = await fetch("/api/gallery");
        if (!res.ok) {
          throw new Error("Failed to fetch gallery");
        }
        const data = await res.json();
        setSections(data);

        // Default to the first section if available
        if (data && data.length > 0) {
          setActiveSection(data[0]);
        }
      } catch (error) {
        console.error("Error fetching gallery data:", error);
      }
    }
    loadData();
  }, []);

  // Expand or un-expand an image
  const handleImageClick = (index) => {
    setExpandedImageIndex(expandedImageIndex === index ? null : index);
  };

  // Close if clicked outside the expanded image
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("expanded-overlay")) {
      setExpandedImageIndex(null);
    }
  };

  // Keyboard navigation for expanded images
  const handleKeyDown = useCallback(
    (e) => {
      if (!activeSection?.images) return;
      const maxIndex = activeSection.images.length - 1;

      switch (e.key) {
        case "Escape":
          setExpandedImageIndex(null);
          break;
        case "ArrowLeft":
          if (expandedImageIndex !== null) {
            setExpandedImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
          }
          break;
        case "ArrowRight":
          if (expandedImageIndex !== null) {
            setExpandedImageIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
          }
          break;
        default:
          break;
      }
    },
    [expandedImageIndex, activeSection]
  );

  // Attach / detach the keydown listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Scroll the nav left or right
  const scrollNav = (direction) => {
    const nav = document.querySelector(".sections-nav");
    if (!nav) return;

    const scrollAmount = 200;
    const newPosition =
      direction === "right" ? scrollPosition + scrollAmount : scrollPosition - scrollAmount;

    nav.scrollTo({ left: newPosition, behavior: "smooth" });
    setScrollPosition(newPosition);
  };

  // Next / previous image in the expanded view
  const navigateImage = (direction) => {
    if (!activeSection?.images) return;

    const maxIndex = activeSection.images.length - 1;
    if (direction === "next") {
      setExpandedImageIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    } else {
      setExpandedImageIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };

  // If we haven't loaded sections yet, or there's no active section, show a fallback
  if (!sections.length || !activeSection) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      {/* Navigation Tabs */}
      <div className="relative">
        <div className="container mx-auto relative flex justify-center items-center">
          <button
            onClick={() => scrollNav("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full shadow-md hover:bg-white transition-colors md:hidden"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollNav("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full shadow-md hover:bg-white transition-colors md:hidden"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <nav className="sections-nav  flex overflow-x-auto scrollbar-hide relative bg-mainBlue space-x-0">
            {sections.map((section) => (
              <button
                key={section.name}
                onClick={() => {
                  setActiveSection(section);
                  setExpandedImageIndex(null);
                }}
                className={`font-roboto px-3 py-3 sm:py-4 text-xs font-medium whitespace-nowrap transition-colors text-white flex-shrink-0 ${
                  activeSection?.name === section.name ? "underline" : ""
                }`}
              >
                {section.name.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Images Grid */}
      <div className="container mx-auto px-4 py-6 sm:py-12">
        <div className="max-w-7xl mx-auto">
          {/* Expanded Overlay */}
          {expandedImageIndex !== null && activeSection.images[expandedImageIndex] && (
            <div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 expanded-overlay"
              onClick={handleClickOutside}
            >
              <button
                onClick={() => setExpandedImageIndex(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                <img
                  src={activeSection.images[expandedImageIndex].src}
                  alt={activeSection.images[expandedImageIndex].alt}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          )}

          {/* Thumbnails Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeSection.images.map((item, index) => (
              <div
                key={index}
                onClick={() => handleImageClick(index)}
                className="group relative cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
