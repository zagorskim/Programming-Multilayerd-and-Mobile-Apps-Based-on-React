import React from "react";
import { useState } from "react";

type Props = {};
export const MainComponent = (props: Props) => {
  const [canIGoOut, setCanIGoOut] = useState("");

  function getCurrentTime(
    result: string,
    seconds: number,
    shouldFail: boolean
  ) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!shouldFail) {
          console.log("Getting Time");
          resolve(result);
        } else {
          console.log("Failed to retrieve time");
          reject();
        }
      }, seconds);
    });
  }

  function getCurrentLocation(result: string, seconds: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Getting Location");
        resolve(result);
      }, seconds);
    });
  }

  function getWeatherFromMeteo() {
    const time = getCurrentTime("Meteo: time", 1000, false);
    const location = getCurrentLocation("Meteo: location", 4000);

    return Promise.all([time, location]);
  }

  function getWeatherFromOnet() {
    const time = getCurrentTime("Onet: time", 7000, false);
    const location = getCurrentLocation("Onet: location", 3000);

    return Promise.all([time, location]);
  }

  function getWeatherFromGoogle() {
    const time = getCurrentTime("Google: time", 3500, true);
    const location = getCurrentLocation("Google: location", 2000);

    return Promise.all([time, location]);
  }

  function canIGoOutNow() {
    Promise.any([
      getWeatherFromMeteo(),
      getWeatherFromOnet(),
      getWeatherFromGoogle(),
    ]).then((res) => console.log("Can I Go Out?", res)).catch(() => {console.log("Time getting fail catched")});
  }

  return (
    <div>
      <button onClick={canIGoOutNow}>Check Weather</button>
    </div>
  );
};
