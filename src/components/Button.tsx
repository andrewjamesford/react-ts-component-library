import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?å
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles.buttonPrimary : styles.buttonSecondary;
  let sizeClass = styles.buttonMedium;
  if (size === "small") {
    sizeClass = styles.buttonSmall;
  }
  if (size === "large") {
    sizeClass = styles.buttonLarge;
  }

  return (
    <button
      type="button"
      className={[`${styles.button}`, `${sizeClass}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
