import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hriday Sehgal </span>
            from <span className="purple"> Gurgaon, India.</span>
            <br /> I am a Third year student pursuing a B.Tech Computer Science (Specialization in Health Informatics)
             at VIT, Bhopal.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Beatboxing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Rap
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
