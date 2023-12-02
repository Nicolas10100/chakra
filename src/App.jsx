// src/App.js

import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/header';

function App() {
  return (
    <ChakraProvider>
      <div>
        <Header />
        {/* El resto de tu aplicación */}
      </div>
    </ChakraProvider>
  );
}

export default App;
