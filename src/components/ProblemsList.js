import React from 'react';
import PropTypes from 'prop-types';
import Problem from '../components/Problem';
import './ProblemsList.css';

class ProblemsList extends React.Component {
    renderData() {
        let problemList = this.props.problems.map(p =>
            <Problem problem={p}/>
        );
        return problemList;
    }

    render() {
        return (
            <div className="problem-list">
                {this.props.problems.length > 0 ?
                    this.renderData() : <div className="">No Data</div>
                }
            </div>
        )
    }
}

ProblemsList.propTypes = {
    problemActions: PropTypes.object,
    problems: PropTypes.array
};

export default ProblemsList;