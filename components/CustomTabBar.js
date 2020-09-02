import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Button from '/Button';
import {useTheme} from '../hooks';

const CustomTabBar = ({state, descriptors, navigation}) => {
  const {currentTheme} = useTheme();
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const s = StyleSheet.create({
    view: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 25,
      backgroundColor: 'transparent',
    },
    text: {
      fontSize: 10,
      color: currentTheme.primary,
    },
  });

  return (
    <View style={s.view}>
      {state.routes.map((route, index) => {
        const {
          tabBarLabel,
          title,
          tabBarAccessibilityLabel,
          tabBarTestID,
          icons,
        } = descriptors[route.key].options;

        const label = tabBarLabel || title || route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Button
            style={s.button}
            {...{onLongPress, onPress}}
            key={index}
            accessibilityRole="button"
            accessibilityLabel={tabBarAccessibilityLabel}
            testID={tabBarTestID}>
            <IonIcons
              name={isFocused ? icons.active : icons.deactive}
              size={20}
              color={currentTheme.primary}
            />
            <Text style={s.text}>{label}</Text>
          </Button>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
