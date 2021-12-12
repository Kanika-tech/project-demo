import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'

export default function AddUser(props) {
 
  return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <label for="name">Name (4 to 8 characters):</label>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
  );
}
