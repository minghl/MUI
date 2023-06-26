import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import {Stack, Button, Typography,Paper} from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {orange} from '@mui/material/colors';

function App() {

  const theme = createTheme({
    status: {
      danger: orange[500],
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
    <Paper elevation={3} >
      <Typography variant="h1" component="h2">
  h1. Heading
</Typography>
<Typography>
normal text
</Typography>
          <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button sx={{color: orange[100]}} size='large' color='error' variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </Paper>
    </ThemeProvider>
  ); 
}

export default App;
