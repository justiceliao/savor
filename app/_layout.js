import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Tabs.Screen 
        name="index"
        options={{ 
          href: null // This hides the index route from tabs
        }} 
      />
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="browse" options={{ title: 'Browse' }} />
      <Tabs.Screen name="favors" options={{ title: 'Favors' }} />
      <Tabs.Screen name="search" options={{ title: 'Search' }} />
      <Tabs.Screen name="me" options={{ title: 'Me' }} />
    </Tabs>
  );
} 