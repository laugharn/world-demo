import AppBar from '@material-ui/core/AppBar'
import UserActionIcon from '@material-ui/icons/ExitToApp'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import { useRouter } from 'next/router'
import WorldIcon from '@material-ui/icons/Public'

const useStyles = makeStyles(theme => ({
  account: {
    marginRight: theme.spacing(1),
  },
  logout: {
    transform: 'rotate(180deg)',
  },
  modules: {
    marginRight: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
  },
  world: {
    marginRight: 'auto',
  },
}))

export const AppBarWorld = () => {
  const classes = useStyles()
  const { push } = useRouter()

  const toggleAuth = () => {
    alert('toggle auth')
  }

  return (
    <div className={classes.root}>
      <AppBar color="inherit" elevation={0} position="static">
        <Toolbar>
          <IconButton
            className={classes.world}
            onClick={() => {
              push('/')
            }}
          >
            <WorldIcon />
          </IconButton>
          <IconButton className={classes.logout} onClick={toggleAuth}>
            <UserActionIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
