import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
      <div>
          <h1><u>ADD</u></h1>
          <TextField label="First Name" variant="filled"></TextField><br></br><br></br>
          <TextField label="Age" variant="filled"></TextField><br></br><br></br>
          <TextField label="Dept" variant="filled"></TextField><br></br><br></br>
          <TextField label="Sal" variant="filled"></TextField><br></br><br></br>
          <Button variant="contained">ADD</Button><br></br>
    </div>
  )
}

export default Add