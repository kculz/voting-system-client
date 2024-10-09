import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import { LiaHourglassStartSolid } from 'react-icons/lia';
import { FaRegEye } from 'react-icons/fa';

const Landing = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
              Welcome to the Student Voting System!
            </h1>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              Thank you for participating in this secure and convenient online
              voting platform. We are excited to provide a seamless and
              user-friendly experience for students to cast their votes and make
              their voices heard.
            </p>
            <a
              href="/candidates"
              className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Start Voting
              <GoArrowRight />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Meet Your Candidates!
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Take a moment to review the profiles of our dedicated
                candidates, each committed to representing your voice and
                shaping our community's future. Get to know their vision,
                values, and goals before casting your vote.
              </p>
              <a
                href="/candidates"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <GoArrowRight />
              </a>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              
              <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Meet the Cabinet Contenders!
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Review the profiles of our talented candidates vying for cabinet
                positions. Learn about their experience, skills, and vision for
                leading our community forward.
              </p>
              <a
                href="/cabinet"
                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
              >
                Read more
                <GoArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landing
