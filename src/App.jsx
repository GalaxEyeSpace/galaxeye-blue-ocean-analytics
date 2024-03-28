import "./App.css";
import Home from "./components/Home";
import { Box, Stack } from "@mui/system";

function App() {
  return (
    <>
      <Stack spacing={0} sx={{ width: "100%" }}>
        <Box sx={{ height: "100%" }}>
          <Home />
        </Box>
      </Stack>
    </>
  );
}

export default App;
