import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Calendar from '../../components/Calendar';

const CalendarScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calendar />
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
