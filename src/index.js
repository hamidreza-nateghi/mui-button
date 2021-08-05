import React from "react";
import MuiButton from "@material-ui/core/Button";
import { createStyles, makeStyles } from "@material-ui/core";
import { alpha } from "@material-ui/core/styles";
import capitalize from "lodash/capitalize";
import clsx from "clsx";

const useStyles = makeStyles((theme) =>
  createStyles({
    textSuccess: {
      color: theme.palette.success.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.success.main, theme.palette.action.hoverOpacity),
      },
    },
    textError: {
      color: theme.palette.error.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.error.main, theme.palette.action.hoverOpacity),
      },
    },
    textWarning: {
      color: theme.palette.warning.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.warning.main, theme.palette.action.hoverOpacity),
      },
    },
    textInfo: {
      color: theme.palette.info.main,
      "&:hover": {
        backgroundColor: alpha(theme.palette.info.main, theme.palette.action.hoverOpacity),
      },
    },
    outlinedSuccess: {
      color: theme.palette.success.main,
      borderColor: alpha(theme.palette.success.main, 0.5),
      "&:hover": {
        borderColor: theme.palette.success.main,
        backgroundColor: alpha(theme.palette.success.main, theme.palette.action.hoverOpacity),
      },
    },
    outlinedError: {
      color: theme.palette.error.main,
      borderColor: alpha(theme.palette.error.main, 0.5),
      "&:hover": {
        borderColor: theme.palette.error.main,
        backgroundColor: alpha(theme.palette.error.main, theme.palette.action.hoverOpacity),
      },
    },
    outlinedWarning: {
      color: theme.palette.warning.main,
      borderColor: alpha(theme.palette.warning.main, 0.5),
      "&:hover": {
        borderColor: theme.palette.warning.main,
        backgroundColor: alpha(theme.palette.warning.main, theme.palette.action.hoverOpacity),
      },
    },
    outlinedInfo: {
      color: theme.palette.info.main,
      borderColor: alpha(theme.palette.info.main, 0.5),
      "&:hover": {
        borderColor: theme.palette.info.main,
        backgroundColor: alpha(theme.palette.info.main, theme.palette.action.hoverOpacity),
      },
    },
    containedSuccess: {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.success.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.success.dark,
      },
    },
    containedError: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.error.dark,
      },
    },
    containedWarning: {
      backgroundColor: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.warning.dark,
      },
    },
    containedInfo: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      "&:hover": {
        backgroundColor: theme.palette.info.dark,
      },
    },
  })
);

const Button = ({ children, color = "primary", variant = "contained", ...props }) => {
  const classes = useStyles();
  const className = classes[`${variant}${capitalize(color)}`];

  return (
    <MuiButton {...props} color={color} variant={variant} className={clsx(props.className, className)}>
      {children}
    </MuiButton>
  );
};

export default Button;
