import React from 'react';
import clsx from 'clsx';
import ProtoTypes from "prop-types";

function Radio(props) {
  const { classes, checked, onChange, disabled, label, id, className } = props;
  return (
    <label className={clsx(classes.wrapper, { disabled: disabled }, className )} htmlFor={id}>
      <input
        type="radio"
        onChange={onChange}
        disabled={disabled}
        id={id}
        checked={checked}
        className="radioInput"
      />
      <span className={clsx('customRadio',{disabled:disabled})}/>
      <p className='label'>{label}</p>
   </label>
  )
}

Radio.propTypes = {
  classes: ProtoTypes.object,
  checked: ProtoTypes.bool,
  onChange: ProtoTypes.func,
  disabled: ProtoTypes.bool,
  label: ProtoTypes.string,
  className: ProtoTypes.string,
};

Radio.defaultProps = {
  classes: {},
  checked: false,
  onChange: () => { },
  disabled: false,
  label: '',
  className: '',
};
export default Radio;