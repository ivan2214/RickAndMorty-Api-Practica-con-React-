import { Box } from "@chakra-ui/react";

import Api from "./api/Api";
import { Nav } from "./components/Nav";

function App() {
  return (
    <Box bg="gray.900" display="flex" width="}100%" py="10" minH="100vh">
      <Api />
    </Box>
  );
}

export default App;
