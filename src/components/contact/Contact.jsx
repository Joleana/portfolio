import React from 'react';

import './Contact.scss'

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="">
      <div className="">
        <div className="">
          <a href="mailto:joleanashurley@gmail.com" className="">
            joleanashurley@email.com
          </a>
        </div>
        <form
          netlify
          type="hidden"
          name="contact"
          onSubmit={handleSubmit}
          className="">
          <h2 className="">
            Hire Me
          </h2>
          <p className="">
            Do you have need for full-stack web development services or technical consulting for your product? Let's get in touch!
          </p>
          <div className="">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=""
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="">
            <label
              htmlFor="message"
              className="">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className=""
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
