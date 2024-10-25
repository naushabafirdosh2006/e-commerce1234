// components/Button.js
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ label, onClick, type = 'primary' }) => {
  return (
    <button className={`btn ${type}-btn`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  onClick: () => {},
  type: 'primary',
};

export default Button;
