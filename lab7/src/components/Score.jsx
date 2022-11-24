import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { Container, Box, Button, Stack } from "@mui/material/";
import {
  countryCodeState,
  countryNameState,
  scoreState,
  teamNameSelector,
} from "../atoms/MatchAtom";
import { useEffect } from "react";

const Score = () => {
  // Selector for teams instead
  useRecoilValue(teamNameSelector);
  const [countryCode, setCountryCode] = useRecoilState(countryCodeState);
  const [countryName, setCountryNameState] = useRecoilState(countryNameState);
  const [scores, setScores] = useRecoilState(scoreState);
  const promises = useRecoilValue(teamNameSelector);
  //let names = readPromise(teamNames, setCountryNameState);

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
      <Stack direction="horizontal">
        <Button variant="outlined">Goal for {countryName[0]}</Button>
        <Button variant="outlined">Goal for {countryName[1]}</Button>
      </Stack>
    </>
  );
};

async function readPromise(promise, setter) {
  let names = ["", ""];
  Promise.all(promise).then((res) =>
    setter([res[0].data[0].name.common, res[1].data[0].name.common])
  );
  return names;
}

export default Score;
