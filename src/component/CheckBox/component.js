import { useState } from "react";
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain,
} from "react-spring";
import clsx from "clsx";
import ProtoTypes from "prop-types";

function Checkbox(props) {
  const { classes, checked, onChange, disabled, label, id, className } = props;
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: disabled ? "#E0E0E0" : checked ? "#17827B" : "#fff",
    config: config.gentle,
    ref: checkboxAnimationRef,
  });
  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: checked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    checked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  const _handleChange = (e) => {
    if (checked === e.target.checked) return onChange(!e.target.checked);
    else return onChange(e.target.checked);
  };

  return (
    <label className={clsx(classes.wrapper, { disabled: disabled },  className )} htmlFor={id}>
      <input type="checkbox" onChange={_handleChange} disabled={disabled} id={id} className="CheckboxInput"/>
      <animated.svg
        style={checkboxAnimationStyle}
        className={clsx(
          "checkmark",
          { isChecked: checked },
          { disabled: disabled }
        )}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <animated.path
          d="M2.5 5L6 9L12 1"
          strokeWidth="1.5"
          stroke={disabled ? "#9E9E9E" : "#fff"}
          ref={(ref) => {
            if (ref) {
              setCheckmarkLength(ref.getTotalLength());
            }
          }}
          strokeDasharray={checkmarkLength}
          strokeDashoffset={checkmarkAnimationStyle.x}
        />
      </animated.svg>
      <span className="label">{label}</span>
    </label>
  );
}

Checkbox.propTypes = {
  classes: ProtoTypes.object,
  checked: ProtoTypes.bool,
  onChange: ProtoTypes.func,
  disabled: ProtoTypes.bool,
  label: ProtoTypes.string,
  className: ProtoTypes.string,
};

Checkbox.defaultProps = {
  classes: {},
  checked: false,
  onChange: () => {},
  disabled: false,
  className: "",
  label: "Options",
};
export default Checkbox;
