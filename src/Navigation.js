import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {CustomDrawer} from '../components';
import Home from './pages/Home';
import Button from './pages/Button';
import Ripple from './pages/Ripple';
import AccordionTest from './pages/AccordionTest';
import RipTest from './pages/RipTest';
const Navigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Custom Ripple"
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Button" component={Button} />
      <Drawer.Screen name="Ripple" component={Ripple} />
      <Drawer.Screen name="Custom Ripple" component={RipTest} />
      <Drawer.Screen name="Accordion" component={AccordionTest} />
    </Drawer.Navigator>
  );
};

export default Navigation;
