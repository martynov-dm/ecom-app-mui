import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button, useMediaQuery } from '@material-ui/core'

import CurrencySelector from './CurrencySelector'
import CartIconComponent from './CartIconComponent/CartIconComponent'
import Drawer from './Drawer/Drawer'
import HomeIcon from '@material-ui/icons/Home'
import DesktopSorting from './DesktopSorting'
import { useHistory } from 'react-router-dom'
import SignOut from './SignOut'
import { useDispatch } from 'react-redux'
import { toggleProductsLoading } from '../../redux/products/products.actions'
const useStyles = makeStyles((theme) => ({
  Toolbar: {
    alignContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}))

const Header = () => {
  const classes = useStyles()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.Toolbar}>
        {isMobile ? (
          <>
            <Drawer />
            <div style={{ flexGrow: 1 }}></div>
            <SignOut />
            <CartIconComponent />
          </>
        ) : (
          <>
            <Button
              size='large'
              color='inherit'
              startIcon={<HomeIcon fontSize='large' />}
              onClick={() => {
                history.push('/')
              }}
            >
              Home
            </Button>
            <div style={{ flexGrow: 1 }}></div>
            <DesktopSorting />

            <CurrencySelector />
            <div style={{ flexGrow: 1 }}></div>
            <SignOut />
            <CartIconComponent />
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Header
