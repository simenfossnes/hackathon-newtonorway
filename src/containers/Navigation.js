import React from 'react';
import Navigation from '../components/Navigation';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as navigationActions from "../actions/navigationActions";

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class NavigationContainer extends React.Component {

    toggleLeftDrawer = () => {
        alert('left drawer');
        this.props.navigationActions.toggleShowLeftDrawer();
    };

    toggleBottomDrawer = () => {
        alert('bottom drawer');
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
