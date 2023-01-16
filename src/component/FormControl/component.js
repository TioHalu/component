/* eslint-disable no-unreachable */
import React from "react";
import clsx from "clsx";
import ProtoTypes from "prop-types";
import infoIcon from "../../information.svg";
import trashIcon from "../../trash.svg";
import arrowUpIcon from "../../arrowUpIcon.svg";
import arrowDownIcon from "../../arrowDownIcon.svg";

const TopSection = ({
  label,
  suffixInfo,
  prefixInfo,
  suffixIcon,
  prefixIcon, }) => {
  return (
    <div className="formControlLabel">
      <div className="prefix">
        <label className="subtitle-2">{label}</label>
        {prefixIcon && <img src={infoIcon} alt="info" className="prefixInfo" />}
        {prefixInfo && <span className="caption-2">{prefixInfo}</span>}
      </div>
      <div className="suffix">
        {suffixIcon && <img src={trashIcon} alt="trash" className="suffixInfo" />}
        {suffixInfo && <span className="subtitle-3">{suffixInfo}</span>}
      </div>
    </div>
  );
};

const Motive = ({ motive, hint }) => { 
  
  switch (motive) {
    case "select":
      return (
        <div className="arrow">
          <img src={hint ? arrowDownIcon : arrowUpIcon } alt="arrow" />
        </div>
      )
    case "submit":
      return (
        <div className="buttons">
          <button className="button">Buttonssss</button>
        </div>
      )
    case "counter":
      return (
        <div className="counter">
          <button className="button">+</button>
          <button className="button">-</button>
        </div>
      )
    default:
      break;
  }
}
function FormControl(props) {
  const {
    className,
    value,
    classes,
    placeholder,
    onChange,
    variant,
    containerClass,
    label,
    suffixInfo,
    prefixInfo,
    suffixIcon,
    prefixIcon,
    hintError,
    helpers,
    motive,
    hintSuccess,
    hint,
    hintLight,
    hintDark,
    disabled,
  } = props;
  const modifiedProps = Object.assign({}, props);
  return (
    <div className={clsx(classes.container, containerClass, variant)}>
      {TopSection({
        label,
        suffixInfo,
        prefixInfo,
        suffixIcon,
        prefixIcon,
      })}
      <div className={clsx(classes.wrapper, className, variant, motive,{'primary':hint,'error':hintError,'success':hintSuccess,'light':hintLight,'dark':hintDark,'grey':disabled})}>
        <input
          {...modifiedProps}
          className="formControlInput"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {Motive({ motive, hint })}
      </div>
    </div>
  );
}

FormControl.propTypes = {
  className: ProtoTypes.string,
  value: ProtoTypes.string,
  variant: ProtoTypes.oneOf([
    "primary",
    "error",
    "success",
    "light",
    "dark",
    "grey",
  ]),
  motive: ProtoTypes.oneOf(["select", "submit", "counter"]),
  suffixIcon: ProtoTypes.object,
  prefixIcon: ProtoTypes.object,
  suffixInfo: ProtoTypes.string,
  prefixInfo: ProtoTypes.string,
};
FormControl.defaultProps = {
  className: "",
  value: "",
  variant: "",
  suffixIcon: infoIcon,
  prefixIcon: trashIcon,
  suffixInfo: "delete",
  prefixInfo: "Additional Information",
  label: "Form label",
  motive: "submit",
};

export default FormControl;
