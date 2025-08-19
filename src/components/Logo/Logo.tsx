import React from "react";
import "./Logo.css";

interface LogoProps {
  width?: string;
  className?: string;
  text?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = "170px",
  className = "",
  text = "Mais que uma marca, um recomeço.",
}) => {
  return (
    <div className="logo-container">
      <img
        src="/img/VIREO-LOGO.png"
        alt="VIREO"
        className={`logo ${className}`}
        style={{ width }}
      />
      {text && <span className="logo-text">{text}</span>}
    </div>
  );
};

export default Logo;
