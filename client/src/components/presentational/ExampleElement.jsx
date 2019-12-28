import React from 'react';
import PropTypes from 'prop-types';

const ExampleElement = ({ text, title }) => (
  <div className="element-wrapper">
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
);

ExampleElement.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ExampleElement;
