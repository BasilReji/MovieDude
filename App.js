import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { topRated } from "./api/movies/api";
import { useEffect, useState } from "react";
import { IMAGE_URL } from "./api/constants";
import { TouchableOpacity } from "react-native";

export default function App() {
  const [topRatedMovies, setTopRated] = useState([]);

  const fetchMovies = async () => {
    const result = await topRated();
    setTopRated(result);
  };

  const _renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Top rated movies</Text>
        <View style={styles.cardContainer}>
          {topRatedMovies.map((item) => (
            <TouchableOpacity>
              <Image
                style={{
                  width: Dimensions.get("screen").width / 2 - 10,
                  height: 200,
                  margin: 2,
                  aspectRatio: 3 / 5,
                }}
                source={{
                  uri: IMAGE_URL + item.poster_path,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <StatusBar style="inverted" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    height: 100,
    width: Dimensions.get("screen").width / 2 - 10,
    padding: 10,
    backgroundColor: "red",
    margin: 2,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
    marginTop: 10,
    color: "white",
  },
});
