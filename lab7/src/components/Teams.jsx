import { useRecoilState } from "recoil";
import { Stack, TextField } from "@mui/material/";
import { useEffect } from "react";
import { countryCodeState, scoreState } from "../atoms/MatchAtom";

const Teams = () => {
  const [teams, setTeams] = useRecoilState(countryCodeState);
  const [scores, setScores] = useRecoilState(scoreState);
  useEffect(() => {}, [teams]);
  return (
    <>
      <Stack direction="horizontal">
        <TextField
          placeholder="Home team"
          multiline="true"
          size="small"
          style={{ margin: 20 }}
          onChange={
            (e) => {
              setTeams([e.target.value, teams[1]]);
              setScores([0, scores[1]]);
            }
          }
        >
          First team name
        </TextField>
        <TextField
          placeholder="Guest team"
          multiline="true"
          size="small"
          style={{ margin: 20 }}
          onChange= {
            (e) => {
              setTeams([teams[0], e.target.value]);
              setScores([scores[1], 0]);
            }
          }
        >
          Second team name
        </TextField>
      </Stack>
    </>
  );
};

export default Teams;
