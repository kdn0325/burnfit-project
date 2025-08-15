import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { CalendarDay } from '../types/Calendar';

type Props = {
  rows: CalendarDay[][];
  selectedDay: Date;
  onSelect: (day: CalendarDay) => void;
};

export default function CalendarGrid({ rows, selectedDay, onSelect }: Props) {
  return (
    <>
      {rows.map((week, i) => (
        <View key={i} style={styles.weekRow}>
          {week.map((dayObj, j) => {
            const isSelected =
              dayObj.currentMonth &&
              selectedDay.toDateString() === dayObj.date.toDateString();
            return (
              <TouchableOpacity
                key={j}
                style={[styles.dayCell, isSelected && styles.selectedDay]}
                onPress={() => onSelect(dayObj)}
              >
                <Text
                  style={
                    !dayObj.currentMonth ? styles.outsideMonthText : undefined
                  }
                >
                  {dayObj.date.getDate()}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  dayCell: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  selectedDay: { borderWidth: 2, borderColor: '#87cefa', borderRadius: 18 },
  outsideMonthText: { color: '#999' },
});
