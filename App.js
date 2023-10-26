import { StyleSheet, View } from "react-native";
import Loader from "./components/loader";
import { useEffect, useState } from "react";
import Weather from "./components/weather";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect;
  () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  },
    [];
  return isLoading ? <Loader /> : <Weather />;
}

const styles = StyleSheet.create({});
