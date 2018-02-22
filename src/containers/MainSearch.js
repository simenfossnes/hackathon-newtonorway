import React from 'react';
import MainSearch from '../components/MainSearch';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as filterActions from "../actions/filterActions";

class MainSearchContainer extends React.Component {

    updateSearchString = (event) => {
        let searchString = event.target.value;
        this.props.filterActions.updateSearchString(searchString);
    };

    render() {
        return (
            <MainSearch
                searchString={this.props.filters.searchString}
                updateSearchString={this.updateSearchString}
            >
                {this.props.children}
            </MainSearch>
        )
    }
}

function mapStateToProps(state) {
    return {
        filters: state.filters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterActions: bindActionCreators(filterActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MainSearchContainer);
