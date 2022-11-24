import { atom, selector } from "recoil";
import Axios from "axios";

export const countryCodeState = atom({
  key: "countryCodeState",
  default: ["", ""],
});

export const countryNameState = atom({
  key: "countryNameState",
  default: ["", ""],
});

export const stadiumState = atom({
  key: "stadiumState",
  default: "",
});

export const scoreState = atom({
  key: "scoreState",
  default: [0, 0],
});

export const teamNameSelector = selector({
  key: "teamNameSelector",
  get: ({ get }) => {
    return [
      Axios.get(
        "https://restcountries.com/v3.1/alpha/" + get(countryCodeState)[0]
      ),
      Axios.get(
        "https://restcountries.com/v3.1/alpha/" + get(countryCodeState)[1]
      ),
    ];
  },
});
