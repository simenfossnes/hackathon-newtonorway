import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'react-icons/lib/md/menu';
import AccountCircle from 'react-icons/lib/md/account-circle';
import FilterForm from "../components/FilterForm";
import AccountForm from "../components/AccountForm";

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

const Navigation = props => {
    const { classes } = props;
    return (
        <div styles={styles.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={props.toggleLeftDrawer} styles={styles.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Hacking Norway / New To Norway
                    </Typography>
                    <IconButton onClick={props.toggleBottomDrawer} className={classes.menuButton} color="inherit" aria-label="Menu">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {/* Filter Options Input*/}
            <Drawer open={props.showLeftDrawer} onClose={() => console.log('closed left drawer')}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={props.toggleLeftDrawer}
                    onKeyDown={props.toggleLeftDrawer}
                >
                    <FilterForm/>
                </div>
            </Drawer>
            {/* Personal Data Input*/}
            <Drawer anchor="bottom" open={props.showBottomDrawer} onClose={() => console.log('closed bottom drawer')}>
                <div
                    tabIndex={0}
                    role="button"
                    onClick={props.toggleLeftDrawer}
                    onKeyDown={props.toggleLeftDrawer}
                >
                    <AccountForm/>
                </div>
            </Drawer>
        </div>
    );
};

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
    showLeftDrawer: PropTypes.bool,
    showBottomDrawer: PropTypes.bool,
    toggleLeftDrawer: PropTypes.func,
    toggleBottomDrawer: PropTypes.func,
};

export default withStyles(styles)(Navigation);