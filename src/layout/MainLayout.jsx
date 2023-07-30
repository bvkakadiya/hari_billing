import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

function MainLayout(props) {
  return (
    <>
    <AppBar position="absolute" color="transparent">
      <Toolbar>
        <Typography variant="h6">
          Hari Billing App
        </Typography>

      </Toolbar>
    </AppBar>
    
    </>
  )
}

MainLayout.propTypes = {}

export default MainLayout
