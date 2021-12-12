import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

export default function AddUser(props) {
 
  return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Typography>Name</Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
  );
}
