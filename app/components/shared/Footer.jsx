import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-mainBlue text-white font-roboto">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0 md:w-1/4">
            <img 
              src="/logo-footer.png" 
              alt="The Oxford Institute Footer Logo" 
              className="mb-6"
            />
            <div className="flex gap-6">
              <a href="#" aria-label="Facebook">
                <img src="/facebook.png" alt="Facebook icon" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src="/twitter.png" alt="Twitter icon" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="/instagram.png" alt="Instagram icon" />
              </a>
            </div>
          </div>

          <div className="md:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 uppercase">About</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-gray-300">Why Oxford</a></li>
                <li><a href="#" className="hover:text-gray-300">Why Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Testimonials</a></li>
                <li><a href="#" className="hover:text-gray-300">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 uppercase">Facilities</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-gray-300">Accommodation</a></li>
                <li><a href="#" className="hover:text-gray-300">Tutorials</a></li>
                <li><a href="#" className="hover:text-gray-300">Oxford Union</a></li>
                <li><a href="#" className="hover:text-gray-300">Dining</a></li>
                <li><a href="#" className="hover:text-gray-300">Travel</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 uppercase">Programmes</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-gray-300">Overview</a></li>
                <li><a href="#" className="hover:text-gray-300">Education System</a></li>
                <li><a href="#" className="hover:text-gray-300">List of Subjects</a></li>
                <li><a href="#" className="hover:text-gray-300">Locations</a></li>
                <li><a href="#" className="hover:text-gray-300">Customized Camp</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 uppercase">Activities</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-gray-300">Excursion Trips</a></li>
                <li><a href="#" className="hover:text-gray-300">Sports</a></li>
                <li><a href="#" className="hover:text-gray-300">Punting</a></li>
                <li><a href="#" className="hover:text-gray-300">Public Speaking</a></li>
                <li><a href="#" className="hover:text-gray-300">Entertainment</a></li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white/30" />

        <p className="text-center text-sm">
          Copyright © by 2022-2033 The Oxford Institute. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer