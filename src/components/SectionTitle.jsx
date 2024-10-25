// components/SectionTitle.js
import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default SectionTitle;
