import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import colorSharp from "../assets/img/color-sharp.png";

// A separate component for each skill
const SkillItem = ({ skill, visible }) => {
  // Animate only the width property from 0% to the skill's target percentage
  const spring = useSpring({
    from: { width: "0%" },
    to: { width: visible ? `${skill.level}%` : "0%" },
    config: { duration: 1000 },
  });

  return (
    <div className="skill-item">
      <div className="skill-info">
        <h5>{skill.name}</h5>
        <span>{skill.level}%</span>
      </div>
      <div className="progress-bar">
        <animated.div className="progress-fill" style={spring} />
      </div>
    </div>
  );
};

export const Skills = () => {
  const skills = [
    { name: "Web Development", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Responsive & Adaptive Design", level: 85 },
    { name: "Version Control", level: 80 },
    { name: "Adobe Creative Suite", level: 90 },
    { name: "Branding & Identity", level: 85 },
  ];

  // For debugging purposes, force the animation to run by default:
  // (Change to false or use TrackVisibility as needed after debugging)
  const [visible, setVisible] = useState(true);

  return (
    <section
      className="skill"
      id="skills"
      style={{
        position: "relative",
        backgroundImage: `url(${colorSharp})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Here are some of my technical and creative skills.</p>
              {/* Uncomment the TrackVisibility below when you're ready
                  and remove the forced visible=true if needed.
              
              <TrackVisibility partialVisibility onChange={(isVisible) => setVisible(isVisible)}>
                <div className="skills-container">
                  {skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} visible={visible} />
                  ))}
                </div>
              </TrackVisibility>
              */}
              {/* For debugging, we force the visible state */}
              <div className="skills-container">
                {skills.map((skill, index) => (
                  <SkillItem key={index} skill={skill} visible={visible} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
