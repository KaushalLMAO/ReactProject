import React from "react";
import { useState } from "react";
import "./Home.css";
const Home = ({ datareq }) => {
  const [course, setCourse] = useState(false);
  const reset = () => {
    location.reload();
  };
  return (
    <>
      <div id="homebody">
        <div className="smallHeader">
          <ul id="smallHeader">
            {!course && (
              <li onClick={() => setCourse(true)} style={{ cursor: "pointer" }}>
                Course
              </li>
            )}
            {course && (
              <li
                onClick={() => setCourse(false)}
                style={{ cursor: "pointer" }}
              >
                Close Course
              </li>
            )}
            <li>About House Master</li>
            <li>About</li>
            <li onClick={reset} style={{ cursor: "pointer" }}>
              Log Out
            </li>
          </ul>
        </div>
        <div className="render">{course && <h1>Day#4</h1>}</div>
      </div>
    </>
  );
};

export default Home;
