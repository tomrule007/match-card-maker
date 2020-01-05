import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

import './CardElement.css';

const CardElement = ({ flip, front, back }) => {
  const image = flip ? front : back;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <SVG src={image} />
      </div>
    </div>
  );
};

CardElement.propTypes = {
  flip: PropTypes.bool.isRequired,
  front: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired,
};

export default CardElement;
