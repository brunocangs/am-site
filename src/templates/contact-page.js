import React, { useState } from "react";
import { navigate } from "gatsby-link";
import { Contact } from "../components/ContactComponents";
import { Button } from "../components/BlogComponents";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [bot, setBot] = useState("");
  const handleChange = cb => e => {
    cb(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...{ name, email, message, "bot-field": bot }
      })
    });
  };

  return (
    <Contact>
      <div className="container">
        <div className="content">
          <h1>Contact</h1>
          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange(setBot)} />
              </label>
            </div>
            <div className="field">
              <label className="label" htmlFor={"name"}>
                Your name
              </label>
              <div className="control">
                <input
                  className="input"
                  type={"text"}
                  name={"name"}
                  onChange={handleChange(setName)}
                  id={"name"}
                  value={name}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={"email"}>
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  type={"email"}
                  name={"email"}
                  onChange={handleChange(setEmail)}
                  value={email}
                  id={"email"}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <label className="label" htmlFor={"message"}>
                Message
              </label>
              <div className="control">
                <textarea
                  className="textarea"
                  name={"message"}
                  onChange={handleChange(setMessage)}
                  rows={4}
                  value={message}
                  id={"message"}
                  required={true}
                />
              </div>
            </div>
            <div className="field">
              <Button className="button is-link" type="submit">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Contact>
  );
};
