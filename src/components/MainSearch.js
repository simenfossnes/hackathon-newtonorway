import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';


const styles = theme => ({
    textField: {
        color: 'white',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

const MainSearch = props => {
    const { classes } = props;
    return (
        <TextField
            onChange={props.updateSearchString}
            id="search"
            label="Search field"
            type="search"
            className={classes.textField}
            margin="normal"
        />
    )
};

MainSearch.propTypes = {
    classes: PropTypes.object.isRequired,
    searchString: PropTypes.string,
    updateSearchString: PropTypes.func
};

export default withStyles(styles)(MainSearch);