import React from 'react';

import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useSettings } from '@/src/providers/SettingsProvider';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { nightMode, toggleTheme } = useSettings();

  return (
    <Tabs
      screenOptions={{
        headerRight: () => (
          <MaterialIcons
            style={{ marginRight: 15 }}
            name={nightMode ? 'brightness-3' : 'brightness-7'}
            size={24}
            color="black"
            onPress={toggleTheme}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dropdown',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="single-date-picker"
        options={{
          title: 'Single date picker',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />

      <Tabs.Screen
        name="time-picker"
        options={{
          title: 'Time picker',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
