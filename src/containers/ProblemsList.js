import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProblemList from '../components/ProblemsList';
import * as problemActions from '../actions/problemActions';

class ProblemsList extends React.Component {

    filterProblems = (problems, searchString) => {
        return problems.filter(p => p.question.includes(searchString))
    };

    render() {
        return (
            <ProblemList
                problemActions={this.props.problemActions}
                problems={
                    this.props.searchString ?
                        this.filterProblems(this.props.problems, this.props.searchString) :
                        this.props.problems
                }
            >
                {this.props.children}
            </ProblemList>
        )
    }
}

function mapStateToProps(state) {
    return {
        problems: state.problems,
        searchString: state.filters.searchString
    };
}

function mapDispatchToProps(dispatch) {
    return {
        problemActions: bindActionCreators(problemActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProblemsList);