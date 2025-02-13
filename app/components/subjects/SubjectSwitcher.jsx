'use client';

import React, { useState, useEffect } from 'react';
import { urlFor } from '@/sanity/lib/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { client } from '@/sanity/lib/client';

const SubjectSwitcher = () => {
  const [subjects, setSubjects] = useState([]);
  const [activeSubject, setActiveSubject] = useState(null);
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isExpanding, setIsExpanding] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const subjectQuery = `*[_type == "subject"] {
          name,
          description,
          "courses": courses[]-> {
            name,
            description,
            image
          }
        }`;
        const data = await client.fetch(subjectQuery);
        console.log(data);
        setSubjects(data);
        if (data && data.length > 0) {
          setActiveSubject(data[0]);
        }
      } catch (err) {
        console.error("Error fetching subjects:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubjects();
  }, []);

  const handleCourseClick = (course) => {
    setIsExpanding(true);
    if (expandedCourse?.name === course.name) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(course);
      setTimeout(() => {
        const expandedView = document.getElementById('expanded-course');
        expandedView?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const scrollNav = (direction) => {
    const nav = document.querySelector('.subjects-nav');
    const scrollAmount = 200;
    if (nav) {
      const newPosition =
        direction === 'right' ? scrollPosition + scrollAmount : scrollPosition - scrollAmount;
      nav.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const filteredCourses = activeSubject?.courses?.filter(
    (course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div className="p-4 space-y-4 animate-pulse">
        {/* Subject title skeleton */}
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        
        {/* Subject description skeleton */}
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
  
        {/* Courses grid skeleton */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }
  if (error) return <div>Error loading subjects: {error.message}</div>;
  if (!activeSubject) return <div>No subjects available</div>;

  return (
    <div className="w-full">
      <div className=" border-b relative bg-mainBlue ">
        <div className="container mx-auto relative flex justify-center items-center">
          {/* Subject Navigation */}
          <button
            onClick={() => scrollNav('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 rounded-full shadow-md hover:bg-white transition-colors md:hidden"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollNav('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-1 rounded-full shadow-md hover:bg-white transition-colors md:hidden"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <nav className="subjects-nav  flex overflow-x-auto scrollbar-hide relative">
            {subjects.map((subject) => (
              <button
                key={subject.name}
                onClick={() => {
                  setActiveSubject(subject);
                  setExpandedCourse(null);
                  setSearchQuery('');
                }}
                className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm  hover:text-white font-roboto  font-bold  whitespace-nowrap transition-colors flex-shrink-0 ${
                  activeSubject.name === subject.name
                    ? 'text-white underline'
                    : 'text-white'
                }`}
              >
                {subject.name.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Subject Details */}
      <div className="container mx-auto px-4 py-6 sm:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-4xl md:text-[42px] text-mainYellow  font-semibold font-enriqueta mb-4 sm:mb-6 transition-all duration-300">
              {activeSubject.name}
            </h2>
            <p className="text-sm sm:text-base text-textColor font-roboto text-justify leading-relaxed mb-6 transition-all duration-300">
              {activeSubject.description}
            </p>
          </div>



          <div
            id="expanded-course"
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              expandedCourse ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {expandedCourse && (
              <div className="relative bg-white rounded-lg p-4 sm:p-6 mb-8">
                <div className="animate-fadeIn">
                  <img
                    src={urlFor(expandedCourse.image)}
                    alt=""
                    className="w-full rounded-[15px] h-[308px] sm:h-[240px] object-cover shadow-lg mb-4"
                  />
                  <h3 className="text-lg sm:text-xl font-medium text-mainBlue font-enriqueta">
                    {expandedCourse.name}
                  </h3>
                  <p className="text-sm sm:text-base font-roboto text-textColor text-justify mt-2">
                    {expandedCourse.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredCourses?.map((course) => (
              <div
                key={course.name}
                onClick={() => handleCourseClick(course)}
                className={`transform transition-all duration-300 hover:scale-[1.02] ${
                  expandedCourse?.name === course.name ? 'rounded-tr-2xl' : ''
                }`}
              >
                <div className="cursor-pointer">
                  {course.image && (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[15px]">
                      <img
                        src={urlFor(course.image)
                          .width(340)
                          .height(240)
                          .quality(90)
                          .url()}
                        alt={course.name}
                        className={`w-full h-full object-cover shadow-lg transition-transform duration-300 hover:scale-105 ${
                          expandedCourse?.name === course.name ? 'rounded-tr-2xl' : ''
                        }`}
                      />
                    </div>
                  )}
                  <div className="py-3 sm:py-4 bg-white rounded-2xl">
                    <h3 className="text-lg sm:text-xl font-medium text-mainBlue font-enriqueta">{course.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses?.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">No courses found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubjectSwitcher;
