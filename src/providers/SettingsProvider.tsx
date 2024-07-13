import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';

type SettingContext = {
  nightMode: boolean;
  toggleTheme: () => void;
};

export const SettingContext = createContext<SettingContext>({
  nightMode: false,
  toggleTheme: () => {},
});

export default function SettingsProvider({ children }: PropsWithChildren) {
  const [nightMode, setNightMode] = useState(false);

  const toggleTheme = useCallback(() => {
    return setNightMode(!nightMode);
  }, [nightMode]);

  // const toggleTheme = () => {
  //   setNightMode(!nightMode);
  // };

  return (
    <SettingContext.Provider value={{ nightMode, toggleTheme }}>
      {children}
    </SettingContext.Provider>
  );
}

export const useSettings = () => {
  return useContext(SettingContext);
};
