import React, { useState } from "react";

interface Project {
  name: string;
  techStack: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "Cloud Recon",
    techStack: "Software Security, Kali Linux, ARIN WHOIS",
    description: "Performed domain enumeration, DNS resolution, and port scanning on Kali Linux to identify cloud asset vulnerabilities. Analyzed IP addresses via ARIN WHOIS, identified exposed cloud services, and recommended security improvements.",
    link: "https://drive.google.com/file/d/15QQ1tBIo6t3rC__D_hEbAou9UFHp9Yt2/view?usp=sharing",
  },
  {
    name: "Insecure Bank Web Application",
    techStack: "Web development, Software Security,JavaScript, Node.js, React, MongoDB",
    description: "Developed and test the full-stack code for the transaction process.Fixed web vulnerabilities based on security assessment recommendations..",
    link: "https://github.com/zhangyan233/bank-app",
  },
  {
    name: "Mailbox Web page",
    techStack: "Software Development, Node.js, React, HTML/CSS, JavaScript, Webpack",
    description: "Designed and implemented front-end dynamic pages.Developed back-end mailbox, including contacts management, mailboxes administration.",
    link: "https://github.com/zhangyan233/mailbag",
  },
  {
    name: "Android-retrofit-tutorial",
    techStack: "Android Development, Andorid Studio, Java, Retrofit",
    description: "Created a simple Android app,including displaying course content and movie list. Retrieved and displayed data of single movie from the Movie DB",
    link: "https://github.com/zhangyan233/android-retrofit-tutorial",
  },
  {
    name: "Takeout Software",
    techStack: "Web Development, Java, Spring Boot, Maven, MySQL, MybatisPlus, Spring Cache, JWT",
    description: "Established a 3-tier architecture (User interface layer, Business logic layer, Data access layer), and operated the database.Developed back-end modules, implemented functions involving management of employees, users, dishes and set-meal information, sending and receiving verification codes on user mobile phones, etc.Fortified application security via  JWT-based authentication.Optimized and upgraded the project, including realizing cache data based on Spring Cache, achieving the database Read/Write splitting and master-slave synchronization, and using virtual machine (CentOS7) to complete front (NGINX) and backend (Tomcat) project deployment,etc.",
    link: "https://github.com/zhangyan233/reggie_take_out",
  },
  {
    name:"Test Course Project",
    techStack:"Java, Unit Testing, Mockito,Jacoco, Github Action, SonarQube, SpotBug",
    description:"Based on existing open-source E-commerce web application, implemented comprehensive unit testing to ensure functionality and reliability, achieving high code coverage. Configured and optimized CI/CD pipelines for automated builds and deployments. Conducted thorough code reviews to improve code quality and maintainability. Identified and resolved critical bugs to enhance system performance and user experience. Utilized Mockito for effective mocking and testing in Java-based environments.",
    link:"https://github.com/zhangyan233/SWE261P-Shopizer"
  }
];

const Showcase: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
    return (
      <div className="max-w-screen-lg mx-auto py-8 px-4 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-blue-600 text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            >
              <h3
                className="text-xl font-semibold text-blue-700 mb-2 cursor-pointer hover:text-blue-500"
                onClick={() => setSelectedProject(project)}
              >
                {project.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                <strong className="text-blue-600">Tech Stack:</strong> {project.techStack}
              </p>
              <p className="text-gray-700 mb-4 truncate">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
  
        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto relative transform transition-transform duration-500 ease-in-out scale-95 animate-fadeIn"
            >
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors duration-300"
                onClick={() => setSelectedProject(null)}
              >
                X
              </button>
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                {selectedProject.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                <strong className="text-blue-600">Tech Stack:</strong> {selectedProject.techStack}
              </p>
              <p className="text-gray-700 mb-4">{selectedProject.description}</p>
              
            </div>
          </div>
        )}
        
      </div>
    );
  };
  
  export default Showcase;