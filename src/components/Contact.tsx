"use client"; // If using Next.js 13 with App Router
import React from "react";
import { useForm } from "@formspree/react";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mrbzwwdq"); // Replace with your actual Form ID

  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }

  return (
    <div className="flex flex-col items-center text-background bg-primaryText py-[120px]">
      <span className=" text-[40px] tracking-widest font-bold">CONTACT ME</span>
      <span className="rounded-full bg-accent w-8 mt-6  h-[5px]"></span>

      <form
        onSubmit={handleSubmit} 
        id="contact-form"
        method="POST"
        className="w-[800px] p-10 bg-white mt-24 rounded relative"
        // action={"https://formspree.io/f/mrbzwwdq"}
      >
        <fieldset className="mb-6">
          <label htmlFor="full-name" className="block py-3  text-background text-sm font-semibold ">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="Enter Your Name"
            required
            className="w-full p-5 border rounded bg-primaryText"
          />
        </fieldset>
        <fieldset className="mb-6">
          <label htmlFor="email-address" className="block py-3  text-background text-sm font-semibold ">
            Email Address
          </label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="Enter Your Email"
            required
            className="w-full p-5 border rounded bg-primaryText"
          />
        </fieldset>
        <fieldset className="mb-6">
          <label htmlFor="message" className="block py-3  text-background text-sm font-semibold ">
            Message
          </label>
          <textarea
            rows={5}
            name="message"
            id="message"
            placeholder="Enter Your Message"
            required
            className="w-full p-5 border rounded bg-primaryText"
          ></textarea>
        </fieldset>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
        <button
          type="submit"
          className="bg-accent text-white p-2 rounded "
          disabled={state.submitting}
        >
          Submit
        </button>
        {state.errors != null && (
          <p className="text-red-600 mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
