import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';

const App = () => {
  useKeepAwake(); // Prevent device from sleeping

  useEffect(() => {
    // Update the time every second
    const timer = setInterval(() => {
      // Get the current time
      const currentTime = new Date().toLocaleTimeString();

      // Update the component state
      setTime(currentTime);
    }, 1000);

    // Clean up the timer
    return () => clearInterval(timer);
  }, []);

  const [time, setTime] = React.useState('');

  return (
    <View style={styles.container}>
    <View style={styles.clockContainer}>
      <Text style={styles.timeText}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2B3035ff'
  },
  clockContainer: {
    backgroundColor: '#212529',
    borderRadius: 5,
    padding: 20,
    borderWidth: 1,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff'
  },
});

export default App;