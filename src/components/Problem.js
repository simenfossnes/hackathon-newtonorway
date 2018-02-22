import React from 'react';
import PropTypes from 'prop-types';

const Problem = props => (
    <div>
        {props.problem.question}
    </div>
);

Problem.propTypes = {
    problem: PropTypes.object
};

export default Problem;