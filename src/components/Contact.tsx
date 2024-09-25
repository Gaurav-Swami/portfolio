"use client"; // If using Next.js 13 with App Router
import React from "react";
import { useForm } from "@formspree/react";

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mrbzwwdq"); // Replace with your actual Form ID

  if (state.succeeded) {
    return (
      <div className="grid place-items-center text-background bg-primaryText py-[120px] ">
        <div className="w-[800px] p-10 bg-white mt-24 h-[718px]  rounded relative shadow-xl text-3xl font-bold text-center grid place-items-center">
          Thanks for contacting me!
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-background bg-primaryText py-[120px]">
      <span className=" text-[40px] tracking-widest font-bold">CONTACT ME</span>
      <span className="rounded-full bg-accent w-8 mt-6  h-[5px]"></span>
      <span className="text-xl text-center pt-6">
        Feel free to drop me a message using the form below, and I’ll reply{" "}
        <br /> at my earliest convenience.
      </span>

      <form
        onSubmit={handleSubmit}
        id="contact-form"
        method="POST"
        className="w-[800px] p-10 bg-white mt-24 rounded relative shadow-xl"
        // action={"https://formspree.io/f/mrbzwwdq"}
      >
        <fieldset className="mb-6">
          <label
            htmlFor="full-name"
            className="block py-3  text-background text-sm font-semibold "
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="Enter Your Name"
            required
            className="w-full p-5 border rounded bg-primaryText focus:outline-none"
          />
        </fieldset>
        <fieldset className="mb-6">
          <label
            htmlFor="email-address"
            className="block py-3  text-background text-sm font-semibold "
          >
            Email Address
          </label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="Enter Your Email"
            required
            className="w-full p-5 border rounded bg-primaryText focus:outline-none"
          />
        </fieldset>
        <fieldset className="mb-6 pb-16">
          <label
            htmlFor="message"
            className="block py-3  text-background text-sm font-semibold  "
          >
            Message
          </label>
          <textarea
            rows={8}
            name="message"
            id="message"
            placeholder="Enter Your Message"
            required
            className="w-full  p-5 pb border rounded bg-primaryText focus:outline-none"
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
          className="bg-accent text-white rounded absolute right-10 bottom-10 px-20 py-4 font-bold shadow-lg hover:-translate-y-1 ease-out duration-300"
          disabled={state.submitting}
        >
          SUBMIT
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
