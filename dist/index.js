"use strict";

require("core-js/modules/es.object.assign.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var _capitalize = _interopRequireDefault(require("lodash/capitalize"));

var _clsx = _interopRequireDefault(require("clsx"));

const _excluded = ["children", "color", "variant"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const useStyles = (0, _core.makeStyles)(theme => (0, _core.createStyles)({
  outlinedSuccess: {
    color: theme.palette.success.main,
    borderColor: (0, _styles.alpha)(theme.palette.success.main, 0.5),
    "&:hover": {
      borderColor: theme.palette.success.main,
      backgroundColor: (0, _styles.alpha)(theme.palette.success.main, theme.palette.action.hoverOpacity)
    }
  },
  outlinedError: {
    color: theme.palette.error.main,
    borderColor: (0, _styles.alpha)(theme.palette.error.main, 0.5),
    "&:hover": {
      borderColor: theme.palette.error.main,
      backgroundColor: (0, _styles.alpha)(theme.palette.error.main, theme.palette.action.hoverOpacity)
    }
  },
  outlinedWarning: {
    color: theme.palette.warning.main,
    borderColor: (0, _styles.alpha)(theme.palette.warning.main, 0.5),
    "&:hover": {
      borderColor: theme.palette.warning.main,
      backgroundColor: (0, _styles.alpha)(theme.palette.warning.main, theme.palette.action.hoverOpacity)
    }
  },
  outlinedInfo: {
    color: theme.palette.info.main,
    borderColor: (0, _styles.alpha)(theme.palette.info.main, 0.5),
    "&:hover": {
      borderColor: theme.palette.info.main,
      backgroundColor: (0, _styles.alpha)(theme.palette.info.main, theme.palette.action.hoverOpacity)
    }
  },
  containedSuccess: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.success.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.success.dark
    }
  },
  containedError: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.error.dark
    }
  },
  containedWarning: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.warning.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark
    }
  },
  containedInfo: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.info.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.info.dark
    }
  }
}));

const Button = _ref => {
  let {
    children,
    color = "primary",
    variant = "contained"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const classes = useStyles();
  const className = classes["".concat(variant).concat((0, _capitalize.default)(color))];
  return /*#__PURE__*/React.createElement(_Button.default, _extends({}, props, {
    color: color,
    variant: variant,
    className: (0, _clsx.default)(props.className, className)
  }), children);
};

var _default = Button;
exports.default = _default;