import { createTheme } from '@nextui-org/react';

export const darkTheme = createTheme({
  type: 'dark', // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#0099ff',
      background: '#121212',
      // you can also create your own color
    }
  }
});

export const lightTheme = createTheme({
  type: 'light', // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#0099ff',
      background: '#fafafa',
      // you can also create your own color
    }
  }
});
