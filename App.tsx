import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { LogLevel, OneSignal } from 'react-native-onesignal';

export default function App() {
  const [optedIn, setOptedIn] = useState(false);

  useEffect(() => {
    function subsciptionChanged(event) {
      setOptedIn(event.current.optedIn);
    }

    OneSignal.Debug.setLogLevel(LogLevel.Verbose);
    OneSignal.initialize(process.env.EXPO_PUBLIC_ONESIGNAL_APP_ID);

    OneSignal.Location.setShared(false);

    OneSignal.User.pushSubscription.addEventListener(
      'change',
      subsciptionChanged
    );

    return () => {
      OneSignal.User.pushSubscription.removeEventListener(
        'change',
        subsciptionChanged
      );
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>{optedIn ? 'Opted in!' : 'Opted out!'}</Text>

      <Button
        onPress={() => OneSignal.User.pushSubscription.optIn()}
        title="Opt In"
        color="#841584"
      />

      <Button
        onPress={() => OneSignal.User.pushSubscription.optOut()}
        title="Opt Out"
        color="#841584"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
