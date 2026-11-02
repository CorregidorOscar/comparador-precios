import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ComparadorScreen from './src/screens/ComparadorScreen';

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style="auto" />
      <ComparadorScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f7fa',
    paddingTop: 40,
  },
});