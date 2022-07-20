import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Box from './components/Box';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Slider />
      <Box />
      <ContactUs />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
