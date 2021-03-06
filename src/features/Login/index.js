import React from 'react'
import {
  Avatar,
  Button,
  CssBaseline,
  Paper,
  Typography
} from '@material-ui/core'
import LockIcon from '@material-ui/icons/LockOutlined'
import { withStyles } from '@material-ui/core/styles'

import NavBar from '../NavBar/index'

const styles = theme => ({
  main: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    marginBottom: theme.spacing.unit * 2,
    backgroundColor: theme.palette.primary.light
  }
})

const Login = props => {
  const { classes } = props

  return (
    <div>
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Button variant="contained" color="success">
            <a href={`${process.env.REACT_APP_SERVER_URL}/auth/github`}>
              Sign in with Github
            </a>
          </Button>
        </Paper>
      </main>
    </div>
  )
}

export default withStyles(styles)(Login)
