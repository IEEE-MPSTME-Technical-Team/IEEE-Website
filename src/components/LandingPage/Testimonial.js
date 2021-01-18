import React from "react";
import { render } from "react-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./Testimonial.css";

const content = [
  {
    title: "AI&ML Demystified Workshop",
    description:
      "I am excited to share that today I was Invited by IEEE NMIMS for the session on #machinelearning. I am really grateful to the team working behind this to make this event happen.",
    background: "transparent",
    user: "Harin Joshi",
    userProfile: "https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FTestimonial%2FHarinJoshi.jpg?alt=media&token=4f7c11b4-0a72-40ad-825f-c75efe195a43"
  },
  {
    title: "AI&ML Demystified Workshop",
    description:
      "Congrats to all the candidates and organisers. A job well done! The IEEE NMIMS’s webinar series called AI & ML DeMystified provided a glimpse into the intricate world of AI & ML.",
    button: "Discover",
    background: "transparent",
    user: "HomiEution",
    userProfile: "https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FTestimonial%2FHomiEution.jpg?alt=media&token=969ce95f-87a1-46cf-a7ab-896a5d5dd990"
  },
  {
    title: "AI&ML Demystified Workshop",
    description:
      "Very interactive and hands-on experience. Well done!",
    button: "Buy now",
    background: "transparent",
    user: "Shouryadipta Birabar",
    userProfile: "https://firebasestorage.googleapis.com/v0/b/ieee-website-f4149.appspot.com/o/Landing%20Page%2FTestimonial%2FShourya.PNG?alt=media&token=6ff296a8-7e91-4771-9dd9-fe6d16795d6a"
  }
];

const App = () => (
  <div>
    <Slider className="slider-wrapper">
      {content.map((item, index) => (
        <div
          key={index}
          className="slider-content"
          style={{ background: "transparen" }}
        >
          <div className="inner">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <section>
            <img src={item.userProfile} alt={item.user} />
            <span>
              Posted by <strong>{item.user}</strong>
            </span>
          </section>
        </div>
      ))}
    </Slider>
  </div>
);

export default App

