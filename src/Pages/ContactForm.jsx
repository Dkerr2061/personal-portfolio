import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5mvoz1u", "template_xxrt5y9", form.current, {
        publicKey: "-OBu36vGR835WGotG",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <label className="input input-bordered flex items-center gap-2 input-info w-full max-w-xs my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              name="user_email"
              className="grow"
              placeholder="Email"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 input-info w-full max-w-xs my-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Full Name"
              name="user_name"
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 input-info w-full max-w-xs my-3">
            <input
              type="text"
              className="grow"
              name="subject"
              placeholder="Subject"
              required
            />
          </label>

          <textarea
            placeholder="Message"
            name="message"
            className="textarea textarea-bordered textarea-lg flex items-center gap-2 textarea-info w-full max-w-xs my-3"
          />

          <button
            type="submit"
            className="rounded bg-neutral-900 px-3 py-2 text-2xl font-medium text-cyan-500 hover:bg-transparent hover:border-cyan-500 border-2 border-transparent mt-4 hover:pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
