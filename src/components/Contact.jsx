import React from 'react';

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
          <iframe
            width="100%"
            height="100%"
            title="map"
            className=""
            frameBorder={3}
            marginHeight={200}
            marginWidth={200}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=6+mittenwalder+st+berlin&key=AIzaSyDCxegA2mGEpJEQZnNQAUa8QZggUc4kfW4"
          />
          <div className="">
            <div className="">
              <h2 className="">
                EMAIL
              </h2>
              <a className="">
                joleanashurley@email.com
              </a>
              <h2 className="">
                PHONE
              </h2>
              <p className="">+49 176 851 66567</p>
            </div>
          </div>
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
