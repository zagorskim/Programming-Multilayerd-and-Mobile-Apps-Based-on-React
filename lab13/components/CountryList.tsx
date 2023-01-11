import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { StyleSheet, View, ActivityIndicator, RefreshControl } from "react-native";
import { Title, List, Text, Searchbar } from "react-native-paper";
import { useState, useEffect, Key } from "react";
import axios, { Axios } from "axios";
import { json } from "stream/consumers";
import ListItem from "./ListItem";

export interface getResponseObject {
  name: string;
  flag: string;
}

export default function CountryList() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setCountries([]);
    setLoading(true);
    if (search.length < 3)
      axios
        .get("https://restcountries.com/v2/all")
        .then((x) => {
          setCountries(x.data);
        })
        .catch((e) => {})
        .then(() => {
          setLoading(false);
        });
    else
      axios
        .get("https://restcountries.com/v2/name/" + search + "?fullText=false")
        .then((x) => {
          setCountries(x.data);
        })
        .catch((e) => {})
        .then(() => {
          setLoading(false);
        });
    setRefresh(false);
  }, [refresh]);
  let i = 0;

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 10 }} variant="bodyLarge">
        Countries loaded: {countries.length}
      </Text>
      <Searchbar
        style={{ margin: "2%" }}
        value={search}
        onChangeText={(e) => {
          if (e.length > 2 || (e.length <= 2 && search.length > 2)) {
            setCountries([]);
            setRefresh(true);
          }
          setSearch(e);
        }}
        placeholder="Search for a country"
      ></Searchbar>
      {!loading && (
        <ScrollView
          style={{ width: "100%" }}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => setRefresh(true)}
            ></RefreshControl>
          }
        >
          {countries.map((x: any) => {
            i++;
            let currency, language, code;
            if (x.currencies !== undefined) currency = x.currencies[0];
            else currency = { name: "no data", code: "no data" };
            if (x.languages !== undefined) language = x.languages[0];
            else language = { name: "no data" };
            if (x.altSpellings !== undefined) code = (x.altSpellings[0] as string).toLowerCase();
            else code = "";
            return (
              <ListItem
                num={i}
                key={i as Key}
                code={code}
                area={x.area}
                language={x.languages[0].name}
                currency={currency.name}
                currencyCode={currency.code}
                population={x.population}
                capital={x.capital}
                countryName={x.name}
                flag={x.flag}
              />
            );
          })}
        </ScrollView>
      )}
      {loading && <ActivityIndicator style={{ marginTop: 50 }} size="large" color="#ff0000" />}
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
  },
});
