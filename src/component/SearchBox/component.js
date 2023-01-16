import React from 'react';
import find from '../../search.svg';
import close from '../../close_Icon.svg';
import clsx from 'clsx';
import ProtoTypes from "prop-types";

function SearchBox(props) {
  const { classes, onChange, value, placeholder, hint, onSearch,  closeIcon, size, className } = props;
  const [clearIcon, setClearIcon] = React.useState(false);
  const modifiedProps = Object.assign({}, props)
  const _handleKeyDown = (e) => {
    if (e.key === 'Backspace' && value.length>=2) {
      setClearIcon(true);
      props.closeIcon = true;
    } else if (e.key === 'Enter' && value.length > -1) {
      onSearch();
    }
    else {
      setClearIcon(false);
    }
  }
  const _onClear = () => {
    setClearIcon(false);
    onChange({ target: { value: "" } });
    
  }
  const _handleCloseIcon = () => {
    if (value.length >= 2) {
      setClearIcon(true);
    }
  }
  console.log(size)
  return (
    <div className={clsx(classes.wrapper, { 'hasHint': hint, 'small': size === 'small' },className)}
      onMouseEnter={_handleCloseIcon}
      onMouseLeave={() => setClearIcon(false)}>
      <button onClick={onSearch} className='search'>
        <img src={find} alt="icon" />
      </button>
      <input
        {...modifiedProps}
        onChange={onChange}
        value={value}
        placeholder={hint ? '' : placeholder}
        className="inputSearch"
        onKeyDown={_handleKeyDown}
      />
      {(clearIcon && closeIcon) && <button onClick={_onClear} className='clear'>
        <img src={close} alt="icon" />
      </button>}
      
    </div>
  );
}

SearchBox.propTypes = {
  classes: ProtoTypes.object,
  onChange: ProtoTypes.func,
  value: ProtoTypes.string,
  placeholder: ProtoTypes.string,
  hint: ProtoTypes.bool,
  onSubmit: ProtoTypes.func,
  onClear: ProtoTypes.func,
  clearIcon: ProtoTypes.bool,
  size: ProtoTypes.oneOf(['small', 'large']),
  className: ProtoTypes.string,
};

SearchBox.defaultProps = {
  classes: {},
  onChange: () => { },
  value: '',
  placeholder: '',
  hint: true,
  clearIcon: false,
  onSearch: () => { },
  onClear: () => { },
  size: 'large',
  className: '',
};

export default SearchBox;