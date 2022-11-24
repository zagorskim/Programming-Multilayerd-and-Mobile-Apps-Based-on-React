import { useRecoilState } from "recoil";
import { Box, Stack } from "@mui/material/";
import { stadiumState, scoreState, countryCodeState } from "../atoms/MatchAtom";

const Preview = () => {
  const [countryCode, setCountryCode] = useRecoilState(countryCodeState);
  const [stadium, setStadium] = useRecoilState(stadiumState);
  const [score, setScore] = useRecoilState(scoreState);

  return (
    <>
      <Box style={{ width: "50%", display: "flow" }}>
        <Stack
          style={{
            margin: 30,
            alignItems: "center",
            backgroundColor: "#ff5a5a",
            borderRadius: 20,
            padding: 20,
          }}
          spacing={0.4}
        >
          <Box>
            <h2>Preview</h2>
            <Stack direction="horizontal">
              <Box
                style={{ margin: 20 }}
                component="img"
                sx={{ width: 200, heigth: 70 }}
                src={
                  countryCode[0] != ""
                    ? "https://countryflagsapi.com/png/" + countryCode[0]
                    : "https://sf-administracja.wpcdn.pl/storage2/featured_original/57758197dbda25_54600333.jpg"
                }
              />
              <Box
                style={{ margin: 20 }}
                component="img"
                sx={{ width: 200, heigth: 70 }}
                src={
                  countryCode[0] != ""
                    ? "https://countryflagsapi.com/png/" + countryCode[1]
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_B3EVHRC60FPdCvIWEcnMFmtZskzm8pUb3A&usqp=CAU"
                }
              />
            </Stack>
          </Box>
          <Box>
            <h4>Stadium: {}</h4>
            <label>{stadium !== "" ? stadium : "---"}</label>
          </Box>
          <Box>
            <h4>Score: {}</h4>
            <h1>
              {Number(score[0])}:{Number(score[1])}
            </h1>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Preview;
