import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as problemActions from '../actions/problemActions';
import Problem from '../components/Problem';

class ProblemsList extends React.Component {
    renderData() {
        let problemList = this.props.problems.map(p =>
            <Problem problem={p}/>
        );
        return problemList;
    }

    render() {
        return (
            <div className="">
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

function mapStateToProps(state) {
    return {
        problems: state.problems
    };
}

function mapDispatchToProps(dispatch) {
    return {
        problemActions: bindActionCreators(problemActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProblemsList);