import * as React from 'react';
import Box from '@mui/material/Box';

export default function AddUser(props) {
 
  return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <label for="name">Name (4 to 8 characters):</label>
          <input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10"/>
      </Box>
  );
}
