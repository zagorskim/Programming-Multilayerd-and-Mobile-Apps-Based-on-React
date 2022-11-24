import { useRecoilState } from "recoil";
import { Stack, TextField } from "@mui/material/";
import { stadiumState } from "../atoms/MatchAtom";

const Stadium = () => {
  const [stadium, setStadium] = useRecoilState(stadiumState);

  return (
    <>
      <Stack direction="horizontal">
        <TextField
          multiline="true"
          size="small"
          style={{ margin: 20 }}
          variant="outlined"
          type="text"
          onChange={(e) => setStadium([e.target.value])}
        >
          Stadium
        </TextField>
      </Stack>
    </>
  );
};

export default Stadium;
