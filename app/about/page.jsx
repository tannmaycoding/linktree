import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full">

        <div className="flex flex-col items-center text-center">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="profile"
            className="w-24 h-24 rounded-full mb-4"
          />

          <h1 className="text-3xl font-bold mb-2 text-gray-800">About</h1>

          <h2 className="text-xl font-semibold text-gray-700">
            I am Tannmay Khandelwal
          </h2>

          <p className="text-gray-600 mt-3">
            I am a developer who enjoys building useful web applications using
            modern technologies like Next.js and MongoDB. This project is a
            linktree like app that helps get many links at one shareable place.
          </p>
        </div>

        <div className="mt-6 border-t pt-4">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">My Socials</h2>

          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">Github:</span>{" "}
              <a
                href="https://github.com/tannmaycoding"
                className="text-blue-600 hover:underline"
              >
                tannmaycoding
              </a>
            </li>

            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:tannmaykhandelwal@gmail.com"
                className="text-blue-600 hover:underline"
              >
                tannmaykhandelwal@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;