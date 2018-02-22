import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProblemList from '../components/ProblemsList';
import * as problemActions from '../actions/problemActions';

class ProblemsList extends React.Component {
    render() {
        return (
            <ProblemList
                problemActions={this.props.problemActions}
                problems={this.props.problems}
            >
                {this.props.children}
            </ProblemList>
        )
    }
}

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