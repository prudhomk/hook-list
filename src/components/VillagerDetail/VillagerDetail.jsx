/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const VillagerDetail = ({ name, species, phrase, quote, personality, birthday, skill, image }) => {

  return (
    <>
      <p>{ name }</p>
      <img src={ image }></img>
      <p>{ species }</p>
      <p>{ phrase }</p>
      <p>{ quote }</p>
      <p>{ personality }</p>
      <p>{ birthday }</p>
      <p>{ skill }</p>
    </>
  );
};

VillagerDetail.propTypes = {
  _id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  phrase: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default VillagerDetail;
