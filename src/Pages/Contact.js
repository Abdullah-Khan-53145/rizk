import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";
import "../css/contact.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setOpen] = useState({
    a: false,
    b: false,
    c: false,
  });
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name,
      email,
      message,
    });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <div className="user__page__main main">
        <Fade bottom>
          <div className="user__page__child child">
            <p>Share your story</p>
            <h1 className="heading">CONTACT US</h1>
          </div>
        </Fade>
      </div>
      <div className="contact_body">
        <div className="contact_card">
          <div className="contact_text_info">
            <h2>Send us message</h2>
            <p>
              We would love to hear from you! Whether you have a recipe request,
              a cooking question, or just want to say hello, don't hesitate to
              contact us.
            </p>
            <div className="info_card_contact">
              <svg
                width="32"
                height="40"
                viewBox="0 0 32 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 3.37272L11.8333 8.11809H20.1667L23.5 3.37272M1 5.74537V34.2176C1 36.8384 3.23858 38.963 6 38.963H26C28.7614 38.963 31 36.8384 31 34.2176V5.7454C31 3.1246 28.7614 1.00003 26 1.00003L6.00001 1C3.23858 0.999996 1 3.12457 1 5.74537Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>1(844) 335-3510</span>
            </div>
            <div className="info_card_contact">
              <svg
                width="32"
                height="24"
                viewBox="0 0 32 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.8125 3.95174L14.9327 11.2583C15.5748 11.6802 16.4252 11.6802 17.0673 11.2583L28.1875 3.95174M4.75 22.6366H27.25C29.3211 22.6366 31 21.0432 31 19.0776V4.8415C31 2.8759 29.3211 1.28247 27.25 1.28247H4.75C2.67893 1.28247 1 2.8759 1 4.8415V19.0776C1 21.0432 2.67893 22.6366 4.75 22.6366Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>rizk@info.com</span>
            </div>
            <div className="info_card_contact">
              <svg
                width="32"
                height="40"
                viewBox="0 0 32 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 37.7098C16 37.7098 31 25.0555 31 15.5647C31 7.70234 24.2843 1.32861 16 1.32861C7.71573 1.32861 1 7.70234 1 15.5647C1 25.0555 16 37.7098 16 37.7098Z"
                  stroke="black"
                  stroke-width="2"
                />
                <path
                  d="M20.7923 14.9718C20.7923 17.4834 18.647 19.5195 16.0006 19.5195C13.3542 19.5195 11.2089 17.4834 11.2089 14.9718C11.2089 12.4602 13.3542 10.4242 16.0006 10.4242C18.647 10.4242 20.7923 12.4602 20.7923 14.9718Z"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>

              <span>102 Street 2714 Don</span>
            </div>
            <div className="rigth">
              <div className="facebook-logo">
                <img src="/imgs/fb-logo.png" alt="" />
              </div>
              <div className="facebook-logo">
                <img src="/imgs/insta-logo.png" alt="" />
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact_form">
            <div className="input_card">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input_card">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_card">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="submit_button">
              <button type="sybmit" className="primary-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="contact_faqs">
          <div className="heading">
            <h1>
              Frequently <br />
              Asked <br />
              Questions
            </h1>
          </div>
          <div className="questions">
            <div className="question_card">
              <div className="question">
                <p>What kind of recipes can I find on this website?</p>
                <svg
                  onClick={() => setOpen({ ...isOpen, a: !isOpen.a })}
                  style={{
                    transform: isOpen.a ? " rotate(-180deg)" : " rotate(0deg)",
                  }}
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 8.21079L7 13.018L1 8.21079M13 1L7 5.80719L1 1"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                className="answer"
                style={{ height: isOpen.a ? "8.5rem" : "0" }}
              >
                <p>
                  Our website features a wide range of recipes from different
                  parts of the world, including breakfast, main courses, and
                  desserts.
                </p>
              </div>
            </div>
            <div className="question_card">
              <div className="question">
                <p>
                  Are the recipes authentic, and will I be able to find the
                  ingredients easily?
                </p>
                <svg
                  onClick={() => setOpen({ ...isOpen, b: !isOpen.b })}
                  style={{
                    transform: isOpen.b ? " rotate(-180deg)" : " rotate(0deg)",
                  }}
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 8.21079L7 13.018L1 8.21079M13 1L7 5.80719L1 1"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                className="answer"
                style={{ height: isOpen.b ? "8.5rem" : "0" }}
              >
                <p>
                  Our recipes are sourced from authentic sources and offer
                  practical ingredient substitutes for hard-to-find items.
                </p>
              </div>
            </div>
            <div className="question_card">
              <div className="question">
                <p>
                  Is there a community aspect to the website, and can I share my
                  own recipes and cooking tips?
                </p>
                <svg
                  onClick={() => setOpen({ ...isOpen, c: !isOpen.c })}
                  style={{
                    transform: isOpen.c ? " rotate(-180deg)" : " rotate(0deg)",
                  }}
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 8.21079L7 13.018L1 8.21079M13 1L7 5.80719L1 1"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div
                className="answer"
                style={{ height: isOpen.c ? "8.5rem" : "0" }}
              >
                <p>
                  Yes, our community aspect includes the ability to share
                  recipes, cooking tips, and connect with other food
                  enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
