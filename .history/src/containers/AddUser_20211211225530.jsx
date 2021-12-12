import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AddUser(props) {
 
  return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Stack direction="row" spacing={2}>
        <Item>
          <Typography>LP Family Name</Typography>
          <TextField id="outlined-basic" variant="outlined" />
        </Item>
        <Item>
          <Typography>Types of Hedge supported</Typography>
          <TextField id="outlined-basic" variant="outlined" />
        </Item>
        <Item>
          <Typography>Name</Typography>
          <TextField id="outlined-basic" variant="outlined" />
        </Item>
      </Stack>

          
      </Box>
  );
}
