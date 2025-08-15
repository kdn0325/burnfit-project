import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CalendarWeekDays() {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  return (
    <View style={styles.weekRow}>
      {daysOfWeek.map(weekday => (
        <Text key={weekday} style={styles.weekDay}>
          {weekday}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  weekDay: { width: 40, textAlign: 'center', fontWeight: 'bold' },
});
