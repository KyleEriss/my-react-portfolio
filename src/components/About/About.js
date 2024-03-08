import { React, Component } from "react";
import OttoPicture from "../../images/otto2.JPG";
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <article id="about">
        <div className="about">
          <div className="itemAbout">
            <div className="title">About Kyle</div>
              I'm driven by the challenge of solving complex technical problems
              and discovering creative solutions. With a background in full stack
              development and data engineering, I thrive in dynamic environments
              where I can apply my skills to drive innovation.
            <p>
              Software development with a customer-centric approach is my focus, and I'm committed to
              leveraging technology to create a positive experience for users.
              I'm excited to collaborate with like-minded developers who
              share a similar drive to innovate and make a meaningful impact in
              the digital space.
            </p>
            <p>
              Aside from that, when I'm not coding I'm typically hiking the White Mountains, exploring new places on my
              motorcycle, or walking on the beach with my dog, Otto.
            </p>
          </div>

          <div className="itemAbout">
            <img src={OttoPicture} className="profilePictures" />
          </div>
        </div>
      </article>
    );
  }
}
