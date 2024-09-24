import { Link } from "react-router-dom";

import Title from "../Title";

import "./style.css";

const Banner = () => {
  return (
    <>
      <Title />
      <Link
        className="to-editor"
        to="/editor"
        aria-label="Get started with the editor"
      >
        Get Started
      </Link>
      <h3>
        Made with{" "}
        <span role="img" aria-label="cheers">
          🍻
        </span>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/jalalbmnf/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jalal Manafi
        </a>
      </h3>
    </>
  );
};

export default Banner;
