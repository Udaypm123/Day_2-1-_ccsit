import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  <Typography variant="h6">Welcome</Typography> &nbsp;
                  <Link to='/'>
                      <Button align="left" variant="contained" color="secondary">ADD</Button>&nbsp;
                  </Link>
                  <Link to='/v'>
                      <Button variant="contained" align="left" color="secondary">VIEW</Button>&nbsp;

              </Link>
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar