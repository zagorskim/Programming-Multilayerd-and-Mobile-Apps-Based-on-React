import { useRecoilState } from "recoil";
import { Stack, TextField } from "@mui/material/";
import { countryCodeState } from "../atoms/MatchAtom";
import { useEffect } from "react";

const Teams = () => {
  const [teams, setTeams] = useRecoilState(countryCodeState);
  useEffect(() => {}, [teams]);
  return (
    <>
      <Stack direction="horizontal">
        <TextField
          placeholder="Home team"
          multiline="true"
          size="small"
          style={{ margin: 20 }}
          onChange={(e) => setTeams([e.target.value, teams[1]])}
        >
          First team name
        </TextField>
        <TextField
          placeholder="Guest team"
          multiline="true"
          size="small"
          style={{ margin: 20 }}
          onChange={(e) => setTeams([teams[0], e.target.value])}
        >
          Second team name
        </TextField>
      </Stack>
    </>
  );
};

export default Teams;
