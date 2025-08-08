import { COLORS } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

type TabBarIconProps = { size: number; color: string };

const HomeTabBarIcon = ({ size, color }: TabBarIconProps) => (
  <Ionicons name="home" size={size} color={color} />
);
const CreateTabBarIcon = ({ size }: { size: number }) => (
  <Ionicons name="add-circle" size={size} color={COLORS.primary} />
);
const NotificationTabBarIcon = ({ size, color }: TabBarIconProps) => (
  <Ionicons name="notifications" size={size} color={color} />
);
const ProfileTabBarIcon = ({ size, color }: TabBarIconProps) => (
  <Ionicons name="person" size={size} color={color} />
);
const BookmarksTabBarIcon = ({ size, color }: TabBarIconProps) => (
  <Ionicons name="bookmark" size={size} color={color} />
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 0,
          position: "absolute",
          elevation: 0,
          height: 40,
          paddingBottom: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: "Home", tabBarIcon: HomeTabBarIcon }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{ title: "Bookmarks", tabBarIcon: BookmarksTabBarIcon }}
      />
      <Tabs.Screen
        name="create"
        options={{ title: "Create", tabBarIcon: CreateTabBarIcon }}
      />
      <Tabs.Screen
        name="notifications"
        options={{ title: "Notifications", tabBarIcon: NotificationTabBarIcon }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", tabBarIcon: ProfileTabBarIcon }}
      />
    </Tabs>
  );
}
