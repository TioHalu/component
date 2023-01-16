import React from "react";
import clsx from "clsx";

import infoIcon from "../../information.svg";
import trashIcon from "../../trash.svg";
import arrowUpIcon from "../../arrowUpIcon.svg";
import arrowDownIcon from "../../arrowDownIcon.svg";

import ProtoTypes from "prop-types";

const TopSection = ({
  label,
  suffixInfo,
  prefixInfo,
  suffixIcon,
  prefixIcon,
}) => {
  return (
    <div className="formControlLabel">
      <div className="prefix">
        <label className="subtitle-2">{label}</label>
        {prefixIcon && <img src={infoIcon} alt="info" className="prefixInfo" />}
        {prefixInfo && <span className="caption-2">{prefixInfo}</span>}
      </div>
    </div>
  );
};

function TextArea(props) {
  const {
    classes,
    className,
    variant,
    placeholder,
    captions,
    hint,
    hintError,
    hintSuccess,
    hintLight,
    hintDark,
    disabled,
    label,
    suffixInfo,
    prefixInfo,
    suffixIcon,
    prefixIcon,
  } = props;
  return (
    <div className={classes.container}>
      {TopSection({
        label,
        prefixInfo,
        prefixIcon,
      })}
      <div
        className={clsx(classes.textWrapper, className, variant, {
          primary: hint,
          error: hintError,
          success: hintSuccess,
          light: hintLight,
          dark: hintDark,
          grey: disabled,
        })}
      >
        <textarea placeholder={placeholder} disabled={disabled} />
      </div>
      {captions && <label className="caption">{captions}</label>}
    </div>
  );
}

TextArea.propTypes = {
  classes: {},
  className: ProtoTypes.string,
  variant: ProtoTypes.oneOf([
    "primary",
    "error",
    "success",
    "light",
    "dark",
    "grey",
  ]),
  prefixIcon: ProtoTypes.object,
  prefixInfo: ProtoTypes.string,

} 

TextArea.defaultProps = {
  className: "",
  value: "",
  variant: "",
  prefixIcon: infoIcon,
  prefixInfo: "Additional Information",
  label: "Form label",
  motive: "submit",
}

export default TextArea;

