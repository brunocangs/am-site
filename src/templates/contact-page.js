import React, { useState, useEffect, useRef } from "react";
import Helmet from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";

import { Contact, ContactContent } from "../components/ContactComponents";
import { Button } from "../components/BlogComponents";
import { Banner } from "../components/Header";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
const getStrings = isEn => {
  return isEn
    ? {
        title: "Contact",
        nameLabel: "Your name",
        messageLabel: "Message",
        sendLabel: "Send",
        successMessage:
          "Your message was sent successfully, thank you for your feedback!"
      }
    : {
        title: "Contato",
        nameLabel: "Seu nome",
        messageLabel: "Mensagem",
        sendLabel: "Enviar",
        successMessage:
          "Recebemos sua mensagem com sucesso, obrigado pelo seu contato!"
      };
};
const getError = (isEn, field) => {
  if (isEn) {
    switch (field) {
      case "captcha":
        return "You must complete the CAPTCHA to submit your message";
      default:
        return "Error on form";
    }
  } else {
    switch (field) {
      case "captcha":
        return "Complete o CAPTCHA para enviar sua mensagem";
      default:
        return "Erro no formulário";
    }
  }
};
export default props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [bot, setBot] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [success, setSuccess] = useState(false);
  const captchaRef = useRef(null);
  const [error, setError] = useState({
    field: "",
    message: ""
  });
  const isEn = props.pageContext.language === "en";
  const {
    title,
    nameLabel,
    messageLabel,
    sendLabel,
    successMessage
  } = getStrings(isEn);

  useEffect(() => {
    if (success) {
      setName("");
      setEmail("");
      setError({
        field: "",
        message: ""
      });
      captchaRef.current.reset();
      setCaptcha("");
      setMessage("");
    }
  }, [success]);

  const handleChange = cb => e => {
    cb(e.target.value);
    setError({ field: "", message: "" });
    setSuccess(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!captcha) {
      return setError({
        field: "captcha",
        message: getError(isEn, "captcha")
      });
    }
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...{
          name,
          email,
          message,
          "bot-field": bot,
          "g-captcha-response": captcha
        }
      })
    })
      .then(() => setSuccess(true))
      .catch(e => {
        setError({
          field: "form",
          message: "Error when submiting"
        });
      });
  };

  return (
    <ContactContent>
      <Banner title={isEn ? "Contact" : "Contato"} />
      <Contact>
        <Helmet>
          <title>{title}</title>
          <meta
            name="description"
            content={
              isEn
                ? `Want to send us a message, discuss an idea or hire us? Get in touch here!`
                : `Quer conversar com a gente, discutir uma ideia ou fazer parte da nossa equipe? Entre em contato por aqui!`
            }
          />
          <link
            rel="canonical"
            href={`https://appmasters.io/${
              isEn ? `en/contact` : `pt/contato`
            }/`}
          />
        </Helmet>
        <div>
          <div>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-recaptcha="true"
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
                <label className="label" htmlFor={"name"} hidden>
                  {nameLabel}
                </label>
                <div className="control">
                  <input
                    className="input"
                    placeholder={nameLabel}
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
                <label className="label" htmlFor={"email"} hidden>
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    placeholder={"Email"}
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
                <label className="label" htmlFor={"message"} hidden>
                  {messageLabel}
                </label>
                <div className="control">
                  <textarea
                    placeholder={messageLabel}
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
              <ReCAPTCHA
                sitekey={"6Ldesr4UAAAAANgIbrtB2Xg06yAs5e9H-PiPgBip"}
                onChange={setCaptcha}
                ref={captchaRef}
              />
              {error.field && error.message && (
                <span id="error">{error.message}</span>
              )}
              {success && <span id="success">{successMessage}</span>}
              <div className="field" style={{ width: "25%", marginTop: 30 }}>
                <Button className="button is-link" type="submit">
                  {sendLabel}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Contact>
    </ContactContent>
  );
};
