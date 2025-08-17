import React from "react";
import "./Logo.css";

interface LogoProps {
  width?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ width = "250px", className = "" }) => {
  return (
    <img
      src="/img/VIREO-LOGO.png"
      alt="VIREO"
      className={`logo ${className}`}
      style={{ width }}
    />
  );
};

export default Logo;
