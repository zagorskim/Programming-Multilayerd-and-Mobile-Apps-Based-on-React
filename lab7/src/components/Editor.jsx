import { Box, Stack } from "@mui/material/";
import Teams from "./Teams";
import Stadium from "./Stadium";
import Score from "./Score";

const Editor = () => {
  return (
    <>
      <Box style={{ width: "50%", display: "flow" }}>
        <Stack
          style={{
            margin: 30,
            alignItems: "center",
            backgroundColor: "#8cb5d0",
            borderRadius: 20,
            padding: 20,
          }}
          spacing={4.7}
        >
          <h2>Editor</h2>
          <Box>
            <label>Team Names</label>
            <Teams />
          </Box>
          <Box>
            <label>Stadium</label>
            <Stadium />
          </Box>
          <Score />
        </Stack>
      </Box>
    </>
  );
};

export default Editor;
