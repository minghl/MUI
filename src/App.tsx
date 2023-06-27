import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import {Stack, Button, Typography,Paper} from '@mui/material';
import { createTheme,ThemeProvider } from '@mui/material/styles';
import {orange,teal} from '@mui/material/colors';
import {styled} from '@mui/system';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
    h3: false;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

// style components 类似
const MyButton = styled(Button)({
  border: '6px solid red'
})

function App() {

  const theme = createTheme({
    typography: {
      subtitle3:{
        fontSize: '96px',
        color:'#999',
      }
    },
    palette: {
      primary: {
        main: orange[500],
      }
    },
  });
  

  return (
    <ThemeProvider theme={theme}>
    <Paper elevation={3} >
      <Typography variant="subtitle3" component="h2">
  h1. Heading
</Typography>
<Typography>
normal text
</Typography>
          <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      {/* sx: style extention */}
      <Button sx={{color: teal[600]}} size='large' variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <MyButton variant='contained'>hello</MyButton>
    </Stack>
    </Paper>
    </ThemeProvider>
  ); 
}

export default App;
