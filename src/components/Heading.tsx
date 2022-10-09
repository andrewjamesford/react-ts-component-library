import React from "react";
import styles from "./heading.module.css";

interface HeadingProps {
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  label: string;
}

export const Heading = ({ heading = "h1", label, ...props }: HeadingProps) => {
  const anchorId = label.replace(" ", "-").replace("'", "").trim();
  if (heading === "h1") {
    return (
      <h1 id={anchorId} className={[styles.heading, styles.heading1].join(" ")}>
        {label}
      </h1>
    );
  }
  if (heading === "h2") {
    return (
      <h2 id={anchorId} className={[styles.heading, styles.heading2].join(" ")}>
        {label}
      </h2>
    );
  }
  if (heading === "h3") {
    return (
      <h3 id={anchorId} className={[styles.heading, styles.heading3].join(" ")}>
        {label}
      </h3>
    );
  }
  if (heading === "h4") {
    return (
      <h4 id={anchorId} className={[styles.heading, styles.heading4].join(" ")}>
        {label}
      </h4>
    );
  }
  if (heading === "h5") {
    return (
      <h5 id={anchorId} className={[styles.heading, styles.heading5].join(" ")}>
        {label}
      </h5>
    );
  }
  return (
    <h6 id={anchorId} className={[styles.heading, styles.heading6].join(" ")}>
      {label}
    </h6>
  );
};
