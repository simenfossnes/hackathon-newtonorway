import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
});

function Problem(props) {
    const { classes } = props;
    return (
        <div style={{width: '80%'}}>
            <Paper className={classes.root} elevation={4}>
                <Typography variant="headline" component="h3">
                    {props.problem.question}
                </Typography>
                <Typography component="p">
                    {props.problem.question}
                </Typography>
            </Paper>
        </div>
    );
}

Problem.propTypes = {
    classes: PropTypes.object.isRequired,
    problem: PropTypes.object
};

export default withStyles(styles)(Problem);