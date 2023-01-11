import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Card, List, Title } from "react-native-paper";
import { CardTitle } from "react-native-paper/lib/typescript/components/Card/CardTitle";
import { Key } from "react";
import { Avatar, Text } from "react-native-paper";
import { useState } from "react";

export interface ListItemProps {
  num: number;
  countryName: string;
  flag: string;
  population: number;
  capital: string;
  currency: string;
  currencyCode: string;
  language: string;
  code: string;
  area: number;
}

const SQUARE = "\u00B2";

export default function ListItem(props: ListItemProps) {
  const [details, setDetails] = useState(false);

  let flagAddress: string;
  if (props.code != "" && props.countryName != "Vatican City")
    flagAddress = "https://flagcdn.com/256x192/" + props.code + ".png";
  else {
    flagAddress =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAllBMVEX///////38//8iTG2LnK4fSGuOoK3v9PUAI1b6+/v//fwAL1r///v5+/nz9/qzwMkAAETr7e+Xp7EANV4AJ1Wltb/AytAAAEAAJ1gAAEdFZIDX3eJshZsAPGQAGU2DmKfN1t96jqDP1ddgeY5NaoMADk1xhZZGZnsAF1AdQmk0WXgMQGQ/XXZVcIYAKFGEkZ9hhJdvj58plnNyAAAEP0lEQVRoge2aa3uiPBCGkyCEo2nQpJagHATqK9qu///P7QRtu/XwbhXxy+a+elmEhCcTkslMECGDwWAwGAwGg8FgMBgMBoNhAMjnESYIP1h8nDMRC6aIFn8QPljpyWbuzm3Lmk/bIoeTjzEcbJSJmzglp5TyPLNmS4W8h0iHpHCrMtKWYm0sZVYQP0DXB6mtK/TQ+nrE46xu9s0YlDB6nZUnOuKpGFoYjE1deLL4+Cx7Gr7Phct0r58wWqmBhzn9L0XkjERI1lU0gHR3S49yPkbxRCH/jAvBSE4l8sac87vOM4JInlVtMLHT9sJwIj7abMXWnkzmSZFH6G4OLk+e2kYwFldBfqGIj+L6rYoZE439vJZ3kQWTizr5UCQ4vFSQivFHS6u6Iffw7F41FdfWEUHlXWzjz1kG5bWPjqBysu0pC70mVvKWCSvdGJ+bhT8npO6NLjJzac95PgrobRXHgdNLGGOrOOs3/14TvVv9xrh6lreuhvmz6iXNan5b9IPRuGa9pEVwe6+9Xe0OvhEHt9ed9FvChRv9fwEfowsOJ3L7WZ0/89OTGMVV4nSCJCROksTnhgN/7reI0Ppc05M6bWZWt1pE1qJJV8mZQqK+0SN8sNwcWQTf2KIEoyYWdAhdT+Azh749KkVQsu3pzeTLUbfBNG8SHQyryZpzrQwKVXNSMT+ueCVw19c1PX6SxdrTT1m1SdJqt4HJ5sTR0/Wml7JGBelxvCNXAvkQECvbhjAU+93q9r3FUTPr58s62CI9nmDvK8g/UIh419ugfGy0ly76ubIOgtibpY2CVMffAyviSs8nkCewJnfK+EDXFmlN2R2icri3en3ZMDX+86wDGZ63vxoHIx3AafSVsWKvT6/qtvXuO2BHGMrtdKbT6T1wsG73doWIBXPLtuHvwHw6S2QY3kH5IE+4jJ3RJ85u3h4SHWXPd7HzRcz4oFsctLIOyj5oVz3d1l8gGKK8D+ims9nf726o+YZ+jjJdaMh2rCeqS7GZ0CNb+7Uh1b6A+NjVNsOsWiz0kgzai37r40/xUVPpzkfxwnFAO4SlYrt80B7SCHw42FxDtOvU2rdE6/eHCBPo34xSUWf6m/MiKM9W+UOkkY7YWtvNOkcKWYbdPmTzqiNEKo7zbifL9/TxHRapa1vQfXTj69E7tAaDwWAwGAz/PApyjLxEvEgFwV4os52gIYqcyBsVRaqQvEc+f56yzRGTdEkj5uh9uzzKG0iD0hJ5KvM8L90NJp2zJWWS6RcS6RiSEIiBHYVSukOIQyYiGbvPS6az0jRlUpRammItC5ZLRxWqk25y1fddy0VKgeRG8mWEpX65ECuiGrRkTGRaWhWMFUMlAwr6U+So/LVzdL7H4D/nOr2NORXwAf0+XAakR1G3a/CxFY3/vDBgEqL1PA8ffqMQ6reMZN8Q7Ht6J4MM/6uBr6acHBkMBsM/x2/t6T7fKzU0HgAAAABJRU5ErkJggg==";
  }

  function showHideDetails() {
    setDetails(!details);
  }

  return (
    <View style={styles.container}>
      <Card onPress={(e) => showHideDetails()} style={{ width: "93%" }}>
        <Card.Title
          title={props.countryName}
          subtitle={"Capital: " + props.capital}
          left={(props) => <Avatar.Image {...props} source={{ uri: flagAddress }} />}
        ></Card.Title>
        {details && (
          <Card.Content>
            <Text variant="bodyMedium">Population: {props.population}</Text>
            <Text variant="bodyMedium">
              Main currency: {props.currency} - {props.currencyCode}
            </Text>
            <Text variant="bodyMedium">Main language: {props.language}</Text>
            <Text variant="bodyMedium">
              Country area: {props.area} km{SQUARE}
            </Text>
            <Text variant="bodyMedium">Country code: {props.code}</Text>
            <Card.Cover style={{ marginTop: "2%" }} source={{ uri: flagAddress }} />
          </Card.Content>
        )}
      </Card>
      {/* <List.Item key={props.id} title={props.countryName} description={props.countryDescription} left={props => <List.Icon {...props} icon="folder" />}></List.Item> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: "2%",
    marginBottom: "2%",
    marginRight: "4%",
  },
});
