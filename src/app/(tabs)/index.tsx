import { useSettings } from '@/src/providers/SettingsProvider';
import { useState } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import { Appbar, Surface, useTheme } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

export default function TabOneScreen() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState<string>('');
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);
  const [colors, setColors] = useState<string>('');
  const genderList = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Others',
      value: 'others',
    },
  ];
  const colorList = [
    {
      label: 'White',
      value: 'white',
    },
    {
      label: 'Red',
      value: 'red',
    },
    {
      label: 'Blue',
      value: 'blue',
    },
    {
      label: 'Green',
      value: 'green',
    },
    {
      label: 'Orange',
      value: 'orange',
    },
  ];

  const theme = useTheme();

  const { nightMode, toggleTheme } = useSettings();

  return (
    <>
      <SafeAreaView
        style={[
          styles.safeContainerStyle,
          { backgroundColor: theme.colors.background },
        ]}
      >
        <DropDown
          label={'Gender'}
          mode={'outlined'}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={gender}
          setValue={setGender}
          list={genderList}
        />
        <View style={styles.spacerStyle} />
        <DropDown
          label={'Colors'}
          mode={'outlined'}
          visible={showMultiSelectDropDown}
          showDropDown={() => setShowMultiSelectDropDown(true)}
          onDismiss={() => setShowMultiSelectDropDown(false)}
          value={colors}
          setValue={setColors}
          list={colorList}
          multiSelect
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  containerStyle: { flex: 1 },
  spacerStyle: {
    marginBottom: 15,
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
});
