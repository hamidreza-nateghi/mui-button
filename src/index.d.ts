import React from "react";
import { ButtonProps } from "@material-ui/core";

export interface MuiButtonProps extends ButtonProps {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: "inherit" | "primary" | "secondary" | "error" | "warning" | "success" | "info" | "default";
}

declare const Button: React.FC<MuiButtonProps>;

export default Button;
