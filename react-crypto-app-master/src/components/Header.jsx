import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const buttonStyle = {
    textDecoration: "none",
    color: "white",
    padding: "8px 12px",
    borderRadius: "4px",
    marginRight: "8px",
    transition: "background-color 0.3s ease, color 0.3s ease", // Transition for hover effect
  };

  const headerStyle = {
    padding: "16px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  };

  // Hover styles for buttons
  const buttonHoverStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Change background color on hover
    color: "white", // Change text color on hover
  };

  return (
    <HStack style={headerStyle}>
      <Button
        variant={"unstyled"}
        style={buttonStyle}
        _hover={buttonHoverStyle} // Apply hover styles
      >
        <Link to="/" style={buttonStyle}>
          Home
        </Link>
      </Button>
      <Button
        variant={"unstyled"}
        style={buttonStyle}
        _hover={buttonHoverStyle} // Apply hover styles
      >
        <Link to="/exchanges" style={buttonStyle}>
          Exchanges
        </Link>
      </Button>
      <Button
        variant={"unstyled"}
        style={buttonStyle}
        _hover={buttonHoverStyle} // Apply hover styles
      >
        <Link to="/coins" style={buttonStyle}>
          Coins
        </Link>
      </Button>
    </HStack>
  );
};

export default Header;
