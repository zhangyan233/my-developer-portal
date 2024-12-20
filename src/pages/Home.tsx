import React from "react";
import SkillChart from "../components/SkillChart";
import ProgrammingSkillChart from "../components/ProgrammingSkillChart"; // 引入新组件
import profilePic from "../assets/profile.png";

const Home: React.FC = () => {
  return (
  
    <div className="max-w-screen-lg mx-auto py-8 px-4 bg-gradient-to-b from-pink-100 to-white rounded-lg shadow-md">
      {/* Personal Info */}
      <section className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        <img
          src={profilePic}
          alt="Profile"
          className="h-40 w-40 rounded-full shadow-lg mb-4 md:mb-0 md:mr-6"
        />
        <div className="flex flex-col">
          <div className="flex items-center">
            <h1 className="text-4xl font-bold text-purple-600 mb-2">Hello, I'm Yan!</h1>
          </div>
          <p className="text-lg text-gray-700">
            Driven by <span className="font-semibold text-blue-500">curiosity</span> ✨ and a knack for{" "}
            <span className="font-semibold text-green-500">solving challenges</span> 🧩, I’m a{" "}
            <span className="font-semibold text-purple-500">quick learner</span> 📚 and an enthusiastic{" "}
            <span className="font-semibold text-orange-500">team player</span> 🤝 from China. Graduating this{" "}
            December 2024 with a Master’s in Software Engineering from{" "}
            <span className="font-semibold text-yellow-500">UC Irvine</span> 🎓, I’m passionate about creating{" "}
            delightful <span className="font-semibold text-teal-500">web and mobile experiences</span> 🌐📱 that leave
            a lasting impact.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">My Skills</h2>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          <div className="max-w-sm w-full">
            <SkillChart />
          </div>
          <div className="max-w-sm w-full">
            <ProgrammingSkillChart />
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">More About Me</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-blue-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-2">My Journey</h3>
            <p className="text-gray-700">
              From coding my first "Hello World" to interning at exciting startups, I’ve always been the go-to problem
              solver in my team, whether it’s web or mobile development. Coding fills me with endless energy and the
              courage to keep exploring the unknown, one line of code at a time! 🌟
            </p>
          </div>

          <div className="bg-yellow-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-yellow-600 mb-2">Favorite Quote</h3>
            <blockquote className="text-gray-700 italic">
              "Success is not final, failure is not fatal: It is the courage to continue that counts." <br />
              <span className="font-semibold">– Winston Churchill ✌️</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-700">
          Feel free to{" "}
          <a href="/contact" className="text-blue-500 font-bold hover:underline">
            reach out
          </a>{" "}
          if you’d like to collaborate or just chat!<br />
          And if you're considering me as a potential hire, don’t hesitate to connect—I promise you won’t want to miss
          out on an exceptional employee!
        </p>
      </section>
    </div>
  );
};

export default Home;
