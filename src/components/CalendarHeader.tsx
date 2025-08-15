import Lucide from '@react-native-vector-icons/lucide';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  year: number;
  month: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function CalendarHeader({ year, month, onPrev, onNext }: Props) {
  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={onPrev} style={styles.navButton}>
        <Lucide name={'chevron-left'} size={24} />
      </TouchableOpacity>
      <Text style={styles.navTitle}>
        {year}년 {month + 1}월
      </Text>
      <TouchableOpacity onPress={onNext} style={styles.navButton}>
        <Lucide name={'chevron-right'} size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  navTitle: { fontSize: 18, fontWeight: 'bold' },
  navButton: { padding: 5 },
});
