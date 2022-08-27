import { Box } from "@chakra-ui/react";

import Api from "./api/Api";
import { Nav } from "./components/Nav";

function App() {
  return (
    <Box display="grid" minH="100vh" placeItems="center">
      <Nav />
      <Api />
    </Box>
  );
}

export default App;
