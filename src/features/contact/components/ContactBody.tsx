"use client";

import facebook from "@/assets/icons/Facebook.png";
import instagram from "@/assets/icons/Instagram.png";
import linkedin from "@/assets/icons/Linkedin.png";
import twitter from "@/assets/icons/Twitter.png";
import github from "@/assets/icons/github.png";
import Image from "next/image";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addContactEnqry } from "../functions/contact";

function ContactBody() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      await addContactEnqry({
        name,
        email,
        subject,
        message,
      });
      // Clear form after successful submission
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-36 px-2 pb-12 md:px-20  flex flex-col md:flex-row items-center md:items-start justify-center gap-12 w-full">
      <ToastContainer />
      {/* Left: Contact Info and Socials */}
      <div className="flex flex-col items-start justify-start gap-6 md:w-1/2 max-w-lg">
        <h1 className="text-TextBlue text-4xl font-bold font-RalewaySemiBold text-[34px]">
          Contact with me
        </h1>
        <p className="text-TextColor font-RalewayRegular text-[20px]">
          For any service and work you can contact with me by send an email or
          by our social media accounts.
        </p>
        <div className="flex flex-row gap-4">
        <a
            href="https://github.com/sayedali-2129"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-flex items-center justify-center md:h-10 md:w-10 h-9 w-9 cursor-pointer">
              <Image
                src={github}
                alt="github"
                className="md:h-7 md:w-7 h-6 w-6 object-contain"
              />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/sayed-ali-mh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-flex items-center justify-center md:h-10 md:w-10 h-9 w-9 cursor-pointer">
              <Image
                src={linkedin}
                alt="linkedin"
                className="md:h-8 md:w-8 h-7 w-7 object-contain"
              />
            </span>
          </a>
         
          <a
            href="https://www.instagram.com/_sayed.ali___?igsh=MXN4dXhtZmJ5ang0Nw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-flex items-center justify-center md:h-10 md:w-10 h-9 w-9 cursor-pointer">
              <Image
                src={instagram}
                alt="instagram"
                className="md:h-9 md:w-9 h-7 w-7 object-contain"
              />
            </span>
          </a>
          <a
            href="https://www.facebook.com/share/12LCrh1Gav3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-flex items-center justify-center md:h-10 md:w-10 h-9 w-9 cursor-pointer">
              <Image
                src={facebook}
                alt="facebook"
                className="md:h-10 md:w-10 h-9 w-9 object-contain"
              />
            </span>
          </a>

          <a
            href="https://x.com/sayedpld?t=IDqNHq5sS5bcq8l2TbZfow&s=08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="inline-flex items-center justify-center md:h-10 md:w-10 h-9 w-9 cursor-pointer">
              <Image
                src={twitter}
                alt="twitter"
                className="md:h-7 md:w-7 h-6 w-6 object-contain"
              />
            </span>
          </a>
        </div>
      </div>
      {/* Right: Contact Form */}
      <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/2 md:max-w-xl">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-TextBlue px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-TextBlue font-RalewayRegular md:text-[16px] text-[14px]"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-TextBlue px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-TextBlue font-RalewayRegular md:text-[16px] text-[14px]"
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border border-TextBlue px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-TextBlue font-RalewayRegular md:text-[16px] text-[14px]"
        />
        <textarea
          placeholder="Type a message here..."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-TextBlue px-4 py-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-TextBlue font-RalewayRegular md:text-[16px] text-[14px]"
        />
        <button
          className="bg-TextBlue text-white px-6 py-3 rounded hover:bg-opacity-50 hover:cursor-pointer transition-all hover:shadow-[0_0_15px_rgba(0,123,255,0.5)] w-full font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
}

export default ContactBody;
