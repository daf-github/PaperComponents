import { View, Text, ScrollView } from 'react-native';
import React from 'react';

import { Button, useTheme } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';

const TimePIcker = () => {
  const theme = useTheme();

  const [visible, setVisible] = React.useState(false);
  const onDismiss = React.useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      console.log({ hours, minutes });
    },
    [setVisible]
  );

  console.log('Time picker RE RENDERED!!!');

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Button
          onPress={() => setVisible(true)}
          uppercase={false}
          mode="outlined"
        >
          Pick time
        </Button>
        <TimePickerModal
          visible={visible}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
          hours={12}
          minutes={14}
        />
      </View>
    </ScrollView>
  );
};

export default TimePIcker;
