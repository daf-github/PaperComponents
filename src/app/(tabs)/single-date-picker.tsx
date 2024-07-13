import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Button, useTheme } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { DatePickerModal } from 'react-native-paper-dates';

const SingleDatePicker = () => {
  const theme = useTheme();

  const [date, setDate] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  return (
    <ScrollView
      style={{
        flex: 1,

        backgroundColor: theme.colors.background,
      }}
      contentContainerStyle={{ justifyContent: 'center', padding: 10 }}
    >
      <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
        <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
          Pick single date
        </Button>
        <DatePickerModal
          locale="es"
          mode="single"
          visible={open}
          onDismiss={onDismissSingle}
          date={date}
          onConfirm={onConfirmSingle}
        />
      </View>
    </ScrollView>
  );
};

export default SingleDatePicker;
