import { Container, Box, Button, Stack } from "@mui/material/";
import Preview from "./Preview.jsx";
import Editor from "./Editor.jsx";

const Match = () => {
  return (
    <>
      <Stack spacing={2} direction="horizontal">
        <Editor />
        <Preview />
      </Stack>
    </>
  );
};

export default Match;
