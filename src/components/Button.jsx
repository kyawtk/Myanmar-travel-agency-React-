
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./button.scss"; // Correct the import statement for the Button.scss file

const STYLES = ["btn--primary", "btn--outline"]; // Add some example button styles
const SIZES = ["btn--medium", "btn--large"]; // Add some example button sizes

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    
      <button
        className={`btn ${checkButtonSize} ${checkButtonStyle}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    
  );
}

export default Button;

