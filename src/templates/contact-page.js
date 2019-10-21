import React from "react";
import { navigate } from "gatsby-link";

export default class Index extends React.Component {
  render() {
    return (
      <form
        name="contact"
        method="POST"
        action="/"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <p hidden>
          <label>
            Email: <input type="hidden" name="form-name" value="contact" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}
