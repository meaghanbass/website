import React, { useState, useEffect, useRef } from "react";
import ContactFormContainer from "./index.style.js";

const Intro = () => (
  <>
    <fieldset>
      <input type="text" name="_subject" style={{ display: "none" }} value="Form: Portfolio - Conversational Contact Form" />
    </fieldset>

    <fieldset cf-questions="What's your first name?">
      <cf-robot-message cf-questions="Hey! <br />I'm excited to hear more about your project." />
      <label htmlFor="name">What&apos;s your first name?</label>
      <input required type="text" name="Name" id="name" className="outfunnel-input-firstname" />
    </fieldset>
  </>
);

const Email = ({ name }) => (
  <fieldset cf-questions="Thanks, {name}. What is your email?">
    <label htmlFor="email">Thanks, {name}. What&apos;s your email?</label>
    <input required type="email" name="Email" id="email" className="outfunnel-input-email" />
  </fieldset>
);

const ProjectOverview = () => (
  <fieldset cf-questions="Awesome, thanks! Please take a few moments to describe your project.">
    <label htmlFor="overview">Awesome, thanks! Please take a few moments to describe your project.</label>
    <input required type="text" name="Overview" id="overview" className="outfunnel-input-overview" />
  </fieldset>
);

const ThankYou = () => <cf-robot-message cf-questions="Awesome! I can’t wait to meet you and hear more about your project. I'll reach out to you as soon as possible." />;

const ContactForm = ({}) => {
  const form = useRef(null);
  const staticForm = useRef(null);
  const convoForm = useRef(null);

  const [formAction] = useState("https://formspree.io/f/mwkjvkzk");

  function activateForm() {
    const { ConversationalForm } = require("conversational-form");
    const form = staticForm.current;

    const chat = {
      isOpen: true,
    };

    const cfInstance = new ConversationalForm({
      formEl: staticForm.current,
      context: convoForm.current,
      userImage: false,
      preventAutoFocus: false,
      showProgressBar: true,
      options: {
        theme: "dark",
      },
      submitCallback: () => {
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            setTimeout(() => {
              chat.isOpen = false;
            }, 5000);
          } else {
            cfInstance.addRobotChatResponse("Something went wrong! 😭");
          }
        };
        xhr.send(data);
      },
    });
  }

  useEffect(() => {
    activateForm();
  }, []);

  let sharedFormProps = {
    name: "Contact Form",
    method: "POST",
    action: formAction,
    className: "outfunnel-form",
  };

  return (
    <ContactFormContainer>
      <form ref={staticForm} className="convo-form" {...sharedFormProps}>
        {/* Honeypot spam filtering */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        {/* Now we need the form data, which is dynamically driven depending on state selections. */}
        <Intro />
        <Email />
        <ProjectOverview />
        <ThankYou />

        {/* The static form also includes the submit button */}
        <button type="submit">Submit</button>
      </form>

      <form ref={convoForm} {...sharedFormProps}>
        {/* Honeypot spam filtering */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />
      </form>
    </ContactFormContainer>
  );
};

export default ContactForm;
