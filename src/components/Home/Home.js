import { React, Component } from "react";
import "./Home.css";
import YosemiteProfile from "../../images/YosemiteProfile.JPG";

export default class Home extends Component {
  render() {
    return (
      <article id="home">
        <div className="home">
          <div className="itemHome">
            <img src={YosemiteProfile} className="profilePictures" />
          </div>

          <div className="itemHome">
            <div className="title">Hi. I'm Kyle!</div>

            <div className="itemText">
                 I'm a full stack developer based in Boston, MA, with a passion for
                 creating innovative digital solutions. My expertise spans front
                 end design, back end development, and data engineering. My
                 interests include:
              <p>My interests include:</p>
              <ul className="bulletpoints">
                <li>Crafting user-friendly interfaces and interactive experiences</li>
                <li>Building scalable and efficient data pipelines</li>
                <li>
                  Exploring emerging technologies and frameworks with other
                  developers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    );
  }
}
