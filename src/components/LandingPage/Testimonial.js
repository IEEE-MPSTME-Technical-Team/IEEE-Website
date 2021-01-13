import React from "react";
import { render } from "react-dom";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./Testimonial.css";
import HarinJoshi from "../../img/LandingPage/HarinJoshi.jpg"
import HomiEution from "../../img/LandingPage/HomiEution.jpg"
import Shourya from "../../img/LandingPage/Shourya.PNG"

const content = [
  {
    title: "AI&ML Demystified Workshop",
    description:
      "I am excited to share that today I was Invited by IEEE NMIMS for the session on #machinelearning. I am really grateful to the team working behind this to make this event happen. The next two days are going to be very engaging for sure. I am very honored for the invitation by you guys for the 1st 3-days session on #artificialintelligence and #ml. I gave a brief introduction about Machine Learning and Interacted with this bunch of enthusiasts who are going to be future #engineers. Divy Otawat - You have managed everything very well.Kudos to you! Navin Agarwal- Thank you so much. Angad Singh Kataria and Isha Gupta, Meera Kapade, Shireen Chand, and all those who attended for being a fantastic audience.",
    background: "transparent",
    user: "Harin Joshi",
    userProfile: HarinJoshi
  },
  {
    title: "AI&ML Demystified Workshop",
    description:
      "Congrats to all the candidates and organisers. A job well done! The IEEE NMIMS’s webinar series called AI & ML DeMystified provided a glimpse into the intricate world of AI & ML. The participants could also self assess their acquires knowledge. Session was an easy ride from an overview of core learning. The Kaggle Competition made everyone a keen competitor vying for the first place. Successful and highly decorated speakers like Dr. Shaunak De, Dr. Hemant Palivela and Mr. Ali Mustafa Shaikh took time out from their busy lives to share their knowledge! IEEE* is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. The IEEE committee of MPSTME represents the same.",
    button: "Discover",
    background: "transparent",
    user: "HomiEution",
    userProfile: HomiEution
  },
  {
    title: "AI&ML Demystified Workshop",
    description:
      "Very interactive and hands-on experience. Well done!",
    button: "Buy now",
    background: "transparent",
    user: "Shouryadipta Birabar",
    userProfile: Shourya
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

