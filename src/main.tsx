import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import router from './routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);
