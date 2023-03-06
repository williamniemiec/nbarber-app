import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { TabNavigationState, ParamListBase, NavigationHelpers } from "@react-navigation/native";

interface TabBarProps {

  state: TabNavigationState<ParamListBase>,
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
}

export default TabBarProps;
