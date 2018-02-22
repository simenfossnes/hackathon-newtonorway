import React from 'react';
import Navigation from '../components/Navigation';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as navigationActions from "../actions/navigationActions";

class NavigationContainer extends React.Component {

    toggleLeftDrawer = () => {
        this.props.navigationActions.toggleShowLeftDrawer();
    };

    toggleBottomDrawer = () => {
        this.props.navigationActions.toggleShowBottomDrawer();
    };

    render() {
        return (
            <Navigation
                showLeftDrawer={this.props.navigation.showLeftDrawer}
                showBottomDrawer={this.props.navigation.showBottomDrawer}
                toggleLeftDrawer={this.toggleLeftDrawer}
                toggleBottomDrawer={this.toggleBottomDrawer}
            >
                {this.props.children}
            </Navigation>
        )
    }
}

function mapStateToProps(state) {
    return {
        navigation: state.navigation
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigationActions: bindActionCreators(navigationActions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(NavigationContainer);
