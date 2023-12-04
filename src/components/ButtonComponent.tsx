// ButtonComponent.tsx
import React from "react";
import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <a href="#">
      <button
        className="email_btn"
        style={{
          position: "fixed",
          bottom: "13px",
          right: "25px",
        }}
        type="submit"
        onClick={onClick}
        title="Submit"
      >
        <FontAwesomeIcon className="i" icon={faEnvelope} />
      </button>
    </a>
  );
};

export default ButtonComponent;
