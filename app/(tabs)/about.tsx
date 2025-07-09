// import ErrorPageLayout from "@/constants/ErrorPageLayout";

// const About = () => {
//   const handleReload = () => {
//     console.log("logged");
//   };

//   return (
//     <ErrorPageLayout
//       image={require("../../assets/images/Appcrash.png")}
//       title="Session Expired"
//       description="We’ll be back shortly. Stay tuned."
//       buttonText="Reload"
//       onButtonPress={handleReload}
//       timer={{
//         duration: 180, // 2 minutes
//         onComplete: () => console.log("Timer completed"),
//       }}
//     />
//   );
// };

// export default About;





import React, { useRef, useState } from 'react';
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input.trim()]);
      setInput('');
      setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100);
    }
  };

  return (
    <View style={styles.root}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>ChatBot</Text>
      </View>

      {/* KeyboardAvoidingView wraps scroll + input */}
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={90} // Height of the header
      >
        <ScrollView
          style={styles.chatContainer}
          contentContainerStyle={{ padding: 12 }}
          ref={scrollViewRef}
          keyboardShouldPersistTaps="handled"
        >
          {messages.map((msg, index) => (
            <Text key={index} style={styles.message}>{msg}</Text>
          ))}
        </ScrollView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Type a message"
            returnKeyType="send"
            onSubmitEditing={sendMessage}
          />
          <Button title="Send" onPress={sendMessage} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  flex: {
    flex: 1
  },
  header: {
    height: 64,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  chatContainer: {
    flex: 1
  },
  message: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    maxWidth: '80%'
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10
  }
});
