import { Box } from "@chakra-ui/react";

import Api from "./api/Api";
import { Nav } from "./components/Nav";

function App() {
  return (
    <Box display="flex" widt="90%" my="10"  minH="100vh">
      <Api />
    </Box>
  );
}

export default App;
