import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CountdownTimer from "./Countdowntimer";
interface TimerProps {
  duration: number; // seconds
  onComplete: () => void;
}

interface ErrorPageLayoutProps {
  image: any;
  title: string;
  description: string;
  buttonText: string;
  onButtonPress: () => void;
  timer?: TimerProps;
}

const ErrorPageLayout: React.FC<ErrorPageLayoutProps> = ({
  image,
  title,
  description,
  buttonText,
  onButtonPress,
  timer,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        {timer && (
          <CountdownTimer
            initialTime={timer.duration}
            onChangeTime={timer.onComplete}
          />
        )}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ErrorPageLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 20,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: { width: 200, height: 200, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#A50000",
    padding: 15,
    borderRadius: 30,
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
