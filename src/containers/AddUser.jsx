import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Label = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
}));

const CancelButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  BackgroudColor: 'red',
}));


export default function AddUser(props) {
  const [selectedHedge, setSelectedHedge] = React.useState('');

  const handleChange = (event) => {
    setSelectedHedge(event.target.value);
  };

  return (
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Stack direction="row"
        justifyContent="center"
        alignItems="center" spacing={2}>
        <Item>
          <Label>LP Family Name</Label>
          <input className="InputStyles" id="lp-family" variant="outlined" />
        </Item>
        <Item>
        <Label>Types of Hedges supported</Label>
        <Select
          id="demo-simple-select"
          value={selectedHedge}
          label="hedge"
          onChange={handleChange}
          className="InputStyles"
        >
          <MenuItem value={10}>A</MenuItem>
          <MenuItem value={20}>B</MenuItem>
          <MenuItem value={30}>C</MenuItem>
        </Select>
        </Item>
        <Item>
          <Label>Abbreivation</Label>
          <input className="InputStyles" id="Abbreivation" variant="outlined" />
        </Item>
      </Stack>
      <Stack  direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4} my={4}>
          <Item> <Button className="ButtonStyles" variant="contained" size="large">Add</Button></Item>
          <Item>  <CancelButton className="ButtonStyles bg-red" size="large" variant="contained">Cancel</CancelButton></Item> 
      </Stack>       
      </Box>
  );
}
