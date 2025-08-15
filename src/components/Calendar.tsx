import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import CalendarHeader from './CalendarHeader';
import { generateCalendarRows } from '../util/calendarUtils';
import CalendarWeekDays from './CalendarWeekdays';
import CalendarGrid from './CalendarGrid';
import { CalendarDay } from '../types/Calendar';
import { runOnJS } from 'react-native-worklets';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month');
  const monthRows = generateCalendarRows(currentMonth);
  const firstWeekRows = [monthRows[0]];
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // 월 변경 함수
  const changeMonth = (offset: number) => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1),
    );
  };

  // 선택한 날짜를 설정하는 함수
  const handleSelectDay = (dayObj: CalendarDay) => {
    if (!dayObj.currentMonth) {
      setCurrentMonth(
        new Date(dayObj.date.getFullYear(), dayObj.date.getMonth(), 1),
      );
    }
    setSelectedDay(dayObj.date);
  };

  // 수직 제스처 - 위로 스와이프 시 주 모드, 아래로 스와이프 시 월 모드로 전환
  const verticalPan = Gesture.Pan()
    .activeOffsetY([-20, 20])
    .failOffsetX([-10, 10])
    .onUpdate(event => {
      translateY.value = event.translationY;
    })
    .onEnd(() => {
      if (translateY.value < -50) runOnJS(setViewMode)('week');
      else if (translateY.value > 50) runOnJS(setViewMode)('month');

      translateY.value = withTiming(0);
    });

  // 수평 제스처 - 왼쪽으로 스와이프 시 이전 달, 오른쪽으로 스와이프 시 다음 달로 전환
  const horizontalPan = Gesture.Pan()
    .activeOffsetX([-20, 20])
    .failOffsetY([-10, 10])
    .onUpdate(event => {
      translateX.value = event.translationX;
    })
    .onEnd(() => {
      if (translateX.value > 50) {
        runOnJS(changeMonth)(-1);
      } else if (translateX.value < -50) {
        runOnJS(changeMonth)(1);
      }

      translateX.value = withTiming(0);
    });

  // Gesture.Simultaneous 사용으로 동시 인식 가능하게 설정
  const combinedGesture = Gesture.Simultaneous(verticalPan, horizontalPan);

  // 월 모드에서는 높이 300, 주 모드에서는 60으로 설정
  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(viewMode === 'month' ? 300 : 60),
    overflow: 'hidden',
  }));

  return (
    <GestureHandlerRootView style={styles.container}>
      <CalendarHeader
        year={currentMonth.getFullYear()}
        month={currentMonth.getMonth()}
        onPrev={() => changeMonth(-1)}
        onNext={() => changeMonth(1)}
      />
      <CalendarWeekDays />
      <GestureDetector gesture={combinedGesture}>
        <Animated.View style={[animatedStyle]}>
          <CalendarGrid
            rows={viewMode === 'month' ? monthRows : firstWeekRows}
            selectedDay={selectedDay}
            onSelect={handleSelectDay}
          />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
