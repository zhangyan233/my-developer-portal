import React, { useState } from "react";

const InternDiary: React.FC = () => {
  const [selectedIntern, setSelectedIntern] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const internships = [
    {
      title: "Full Stack Engineer Intern",
      company: "Scrum Adventures",
      url: "https://scrumadventures.com",
      productUrl: "https://www.cadomitools.com",
      companyLogo: "/intern1logo.jpeg", // 公司图片
      description: `
- Enabled seamless Jira login and automated user data import through OAuth 2.0 and API integration.
- Deployed the product as a Forge app on Atlassian Marketplace.
- Designed and developed new features for the SCP webpage, enhancing usability.
- Revamped the company website to showcase the summer internship program.
- Unified data transfer with JSON objects, improving response time by 33% and reducing memory usage by 5%.`,
      skills: `Atlassian, Django, HTML/CSS, JavaScript, PostgreSQL, WordPress, CI/CD, GitHub, Heroku, React, Node.js`,
      images: [
        "/intern13.png",
        "/intern14.png",
        "/intern11.jpg",
        "/intern12.jpg",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "UC Irvine Donald Bren School of Information and Computer Sciences (Eye Gazy Tracking Mobile app)",
      url: "https://ics.uci.edu/",
      productUrl: "https://github.com/zhangyan233/eye-track-front/tree/sophia-branch-new",
      companyLogo: "/intern2logo.jpeg", // 公司图片
      description: `
- Created and optimized the front-end for both iOS and Android.
- Captured 30fps eye-tracking data alongside precise gaze coordinates.
- Solved performance bottlenecks during real-time data transmission.
- Contributed to a CNN model by preprocessing data and integrating eye-only images with coordinate information.`,
      skills: `Android Studio, Gradle, Xcode, WebSocket, Multi-threading, PyTorch, OpenCV`,
      images: [
        "/intern22.png",
        "/intern24.png",
        "/intern23.png",
        "/intern21.png",
        "/intern25.png"
      ],
    },
    {
      title: "Backend Developer Intern",
      company: "Wormhole Technology",
      url: null, // 没有官网
      productUrl: "https://www.yaoyao.cool/",
      companyLogo: null, // 没有公司图片
      description: `
- Built the database structure and implemented robust back-end modules for member management, attendance, and payroll.
- Developed microservices for product traceability and stage monitoring using RabbitMQ.
- Optimized database queries and enhanced system performance.`,
      skills: `Spring Boot, MySQL, Mybatisplus, GitHub, Spring Cloud, Redis, RabbitMQ`,
      images: [
        "intern31.png"
      ],
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-8 px-4 bg-white rounded-lg shadow-lg flex relative">
      {/* Left Column */}
      <div className="w-1/3 border-r border-gray-300 pr-4">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Internships</h2>
        <ul className="space-y-4">
          {internships.map((intern, index) => (
            <li
              key={index}
              className={`p-4 cursor-pointer rounded-lg ${
                selectedIntern === index
                  ? "bg-blue-100 text-blue-600 font-bold"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedIntern(index)}
            >
              {intern.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column */}
      <div className="w-2/3 pl-4">
        <div className="flex items-center mb-4">
          {/* 公司 Logo 或可爱设计 */}
          {internships[selectedIntern].companyLogo ? (
            <img
              src={internships[selectedIntern].companyLogo}
              alt={`${internships[selectedIntern].company} Logo`}
              className="h-16 w-16 object-cover rounded-full mr-4 shadow-md"
            />
          ) : (
            <div className="h-16 w-16 bg-pink-200 rounded-full flex items-center justify-center mr-4 shadow-md text-white font-bold text-xl">
              💼
            </div>
          )}
          <div>
            <h2 className="text-2xl font-bold text-blue-600 mb-1">
              {internships[selectedIntern].title}
            </h2>
            {internships[selectedIntern].url ? (
              <h3 className="text-lg font-semibold text-gray-600">
                <a
                  href={internships[selectedIntern].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-800 no-underline"
                >
                  {internships[selectedIntern].company}
                </a>
              </h3>
            ) : (
              <h3 className="text-lg font-semibold text-gray-600">
                {internships[selectedIntern].company}
              </h3>
            )}
          </div>
        </div>
        <p className="text-gray-700 whitespace-pre-line mb-4">
          {internships[selectedIntern].description}
        </p>
        <div className="text-gray-700 mb-4">
          <strong>Skills:</strong> {internships[selectedIntern].skills}
        </div>

        {/* Button to Product */}
        <a
          href={internships[selectedIntern].productUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Explore the Product 🚀
        </a>

        {/* Image Row */}
        <div className="relative w-full flex items-center overflow-x-auto mt-6">
          {internships[selectedIntern].images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Internship ${index + 1}`}
              className="relative h-40 w-auto object-cover rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
              style={{
                top: `${index % 2 === 0 ? "10px" : "-10px"}`,
                left: `${index * 50}px`,
                zIndex: `${10 - index}`,
              }}
              onClick={() => setModalImage(image)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-screen-sm">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
              onClick={() => setModalImage(null)}
            >
              X
            </button>
            <img
              src={modalImage}
              alt="Modal"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default InternDiary;
