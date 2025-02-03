'use client'
import React, { useState, useEffect } from 'react'
import FAQAccordion from './FAQAccordion';

const faqSectionsData = [
  {
    sectionTitle: "Program Overview",
    subtitle: "Essential Information",
    description: "Learn about our comprehensive summer program structure and what makes it unique.",
    faqs: [
      {
        question: "What is Oxford Institute Summer Program?",
        answer: "The Oxford Institute Summer Program offers two-week courses for various age groups, providing a blend of academics, extracurricular activities, and social engagement."
      },
    //   {
    //     question: "Is accommodation provided for the duration of the program?",
    //     answer: "Yes, accommodation is provided for all participants throughout the program duration."
    //   },
    //   {
    //     question: "What is your link with Oxford University?",
    //     answer: "We maintain close academic relationships with Oxford University while operating as an independent educational institution."
    //   }
    ],
    order: 1
  },
//   {
//     sectionTitle: "Program Dates",
//     subtitle: "Schedule Information",
//     description: "Find detailed information about our program schedule and timing.",
//     faqs: [
//       {
//         question: "What are the dates for the summer program?",
//         answer: "Please refer to our Schedule section on our website for the specific program dates and other related information."
//       }
//     ],
//     order: 2
//   },
//   {
//     sectionTitle: "Program Duration and Benefits",
//     subtitle: "Program Structure",
//     description: "Understand the timeline and advantages of our program.",
//     faqs: [
//       {
//         question: "What is the duration of the Oxford Summer Program?",
//         answer: "The program runs for two weeks, providing an intensive and enriching experience."
//       },
//       {
//         question: "What can I expect in my two weeks at the Oxford Summer Program?",
//         answer: "You will experience a blend of academic courses, workshops, cultural activities, and social events."
//       },
//       {
//         question: "What are the key benefits of participating in the program?",
//         answer: "Participants gain academic knowledge, cultural exposure, and valuable networking opportunities."
//       }
//     ],
//     order: 3
//   },
//   {
//     sectionTitle: "Expenses",
//     subtitle: "Financial Information",
//     description: "Details about program costs and what's included.",
//     faqs: [
//       {
//         question: "What is covered by the fee?",
//         answer: "The fee covers lectures, tutorials, and academic sessions, debating workshops, career and academic counselling, accommodation in individual rooms, daily meals, and weekend/evening activities."
//       },
//       {
//         question: "Is travel also covered in the fee?",
//         answer: "Travel arrangements to and from Oxford are not included in the program fee."
//       }
//     ],
//     order: 4
//   },
//   {
//     sectionTitle: "International Students",
//     subtitle: "International Participation",
//     description: "Information for students joining us from abroad.",
//     faqs: [
//       {
//         question: "Can I apply as an international student, and are there any visa requirements?",
//         answer: "International students are welcome to apply. Visa requirements vary by country, so it's essential to check the specific visa regulations for your nationality when planning to participate."
//       }
//     ],
//     order: 5
//   },
//   {
//     sectionTitle: "Assessment and Certification",
//     subtitle: "Academic Evaluation",
//     description: "Learn about our assessment methods and certification process.",
//     faqs: [
//       {
//         question: "How is the course assessed, and do we receive a certificate?",
//         answer: "Students are assessed based on a research essay and an oral presentation at the end of the course. Individual guidance is provided, and a certificate is awarded upon completion, along with a detailed course report."
//       }
//     ],
//     order: 6
//   },
//   {
//     sectionTitle: "Teaching and Courses",
//     subtitle: "Academic Structure",
//     description: "Explore our course offerings and teaching methodology.",
//     faqs: [
//       {
//         question: "Which courses do you offer?",
//         answer: "We offer a range of courses in Natural Sciences, Social Sciences, and Humanities. Courses are taught through daily tutorial sessions with a tutor-to-student ratio of 1:3."
//       },
//       {
//         question: "Who are the tutors?",
//         answer: "Our tutors are experienced academics and professionals in their respective fields."
//       }
//     ],
//     order: 7
//   }
];

function FAQ() {
    const [faqSections, setFaqSections] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Simulate data fetch
        const fetchFAQs = async () => {
            try {
                setLoading(true)
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 1000))
                setFaqSections(faqSectionsData)
            } catch (err) {
                console.error('Error fetching FAQs:', err)
                setError('Failed to load FAQs. Please try again later.')
            } finally {
                setLoading(false)
            }
        }

        fetchFAQs()
    }, [])

    if (loading) {
        return (
            <div className="w-full max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row gap-12 animate-pulse">
                    <div className="lg:w-1/3 py-8">
                        <div className="space-y-4">
                            <div className="h-6 bg-gray-200 rounded w-24"></div>
                            <div className="h-10 bg-gray-200 rounded w-3/4"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/3 space-y-4">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="border border-gray-200 rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                    <div className="h-4 bg-gray-200 rounded-full w-4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

   

    return (
        <>
            <div className="w-full max-w-6xl mx-auto px-4 py-2">
                <h1 className="text-center text-4xl font-semibold font-enriqueta md:text-[42px] text-mainYellow my-16">
                    Frequently Asked Questions
                </h1>
                {faqSections && faqSections.map((section, index) => (
                    <div key={index}>
                        <div className={`${index > 0 ? 'mt-2' : ''}`}>
                            <div className="flex flex-col lg:flex-row gap-2">
                                <div className="lg:w-1/3 py-8">
                                    <div>
                                        <h2 className="text-4xl md:text-[32px] text-mainBlue font-enriqueta font-semibold mb-4">
                                            {section.sectionTitle}
                                        </h2>
                                        {/* <h3 className="text-3xl md:text-[40px] font-semibold mb-4">
                                            {section.subtitle}
                                        </h3>
                                        <p className="text-grey text-justify">
                                            {section.description}
                                        </p> */}
                                    </div>
                                </div>
                                <div className="lg:w-2/3">
                                    <FAQAccordion faqs={section.faqs || []} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FAQ