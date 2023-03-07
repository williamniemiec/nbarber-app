/*
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import { TabNavigationState, ParamListBase, NavigationHelpers } from "@react-navigation/native";


interface TabBarProps {

  state: TabNavigationState<ParamListBase>,
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
}

export default TabBarProps;
