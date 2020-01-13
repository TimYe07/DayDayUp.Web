import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles : any = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content',
        marginTop: 80
    },
    avatar: {
        width: 60,
        height: 60,
    },
    name: {
        marginTop: 8,
        color: '#fff'
    },
    bio: {
        color: '#fff'
    }
}));

const Profile = props => {
    const { className, ...rest } = props;

    const classes = useStyles();

    const user = {
        name: 'Tim',
        avatar: '/static/avatar.png',
        bio: 'Stay hungry, stay foolish.'
    };

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Avatar
                alt={user.name}
                className={classes.avatar}
                src={user.avatar}
            />
            <Typography
                className={classes.name}
                variant="h5"
            >
                {user.name}
            </Typography>
            <Typography className={classes.bio} variant="body2">{user.bio}</Typography>
        </div>
    );
};

export default Profile;
