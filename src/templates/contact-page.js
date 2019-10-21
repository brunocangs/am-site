import React, { useState } from "react";

export default ({ pageContext: { language } }) => {
  const [name, setName] = useState("");
  const onChange = cb => ({ target: { value } }) => {
    cb(value);
  };
  return (
    <form
      data-netlify-recaptcha="true"
      data-netlify="true"
      name="contact"
      method="post"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={onChange(setName)}
      />
    </form>
  );
};
