import { useRecoilState, useRecoilValue } from "recoil";
import { Button, Stack } from "@mui/material/";
import {
  countryCodeState,
  countryNameState,
  scoreState,
  teamNameSelector,
} from "../atoms/MatchAtom";
import { useEffect } from "react";

const Score = () => {
  useRecoilValue(teamNameSelector);
  const [countryCode, setCountryCode] = useRecoilState(countryCodeState);
  const [countryName, setCountryNameState] = useRecoilState(countryNameState);
  const [scores, setScores] = useRecoilState(scoreState);
  const promises = useRecoilValue(teamNameSelector);

  useEffect(() => {
    Promise.resolve(promises[0])
      .then((res) => {
        console.log(res);
        setCountryNameState([res.data[0].name.common, countryName[1]]);
      })
      .catch((e) => {
        console.log(e);
        setCountryNameState(["", countryName[1]]);
      });
  }, [countryCode[0]]);

  useEffect(() => {
    Promise.resolve(promises[1])
      .then((res) => {
        console.log(res);
        setCountryNameState([countryName[0], res.data[0].name.common]);
      })
      .catch((e) => {
        console.log(e);
        setCountryNameState([countryName[0], ""]);
      });
  }, [countryCode[1]]);

  return (
    <>
      <Stack spacing={5} direction="horizontal">
        <Button
          style={{ margin: 20 }}
          color="inherit"
          onClick={() => {
            setScores([String(Number(scores[0]) + 1), scores[1]]);
          }}
          variant="contained"
        >
          Goal for {countryName[0]}
        </Button>
        <Button
          style={{ margin: 20 }}
          color="inherit"
          onClick={() => {
            setScores([scores[0], String(Number(scores[1]) + 1)]);
          }}
          variant="contained"
        >
          Goal for {countryName[1]}
        </Button>
      </Stack>
    </>
  );
};

export default Score;
