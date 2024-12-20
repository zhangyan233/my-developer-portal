import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_i6vbhaq", // Replace with your EmailJS Service ID
        "template_x9y66oa", // Replace with your EmailJS Template ID
        {
          from_email: email,
          subject: subject,
          message: message,
        },
        "ENv-Na_37dDM54jHn" // Replace with your EmailJS User ID
      )
      .then(
        () => {
          setStatus("sent");
          setEmail("");
          setSubject("");
          setMessage("");
          window.alert("Message sent successfully!"); // Show success message in a popup
        },
        () => {
          setStatus("error");
          window.alert("Failed to send message. Please try again."); // Show error message in a popup
        }
      );
  };

  return (
    <div className="w-[80%] mx-auto py-12 px-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
        Get in Touch
      </h2>
      <div className="flex justify-center space-x-12 mb-8">
        <div
          className="cursor-pointer text-blue-600 hover:text-blue-700 transition-colors duration-300"
          onClick={() =>
            window.open("https://www.linkedin.com/in/yan-zhang-8527a9286", "_blank")
          }
        >
          <FaLinkedin size={50} />
        </div>
        <div
          className="cursor-pointer text-gray-800 hover:text-gray-900 transition-colors duration-300"
          onClick={() => window.open("https://github.com/zhangyan233", "_blank")}
        >
          <FaGithub size={50} />
        </div>
      </div>

      <form onSubmit={sendEmail} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-gray-600 mb-2"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-lg font-semibold text-gray-600 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter the subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-lg font-semibold text-gray-600 mb-2"
          >
            Something you want to share with me
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
