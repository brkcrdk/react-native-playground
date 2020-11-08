import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {useDefaultPage} from '../hooks';
import {CustomDrawer} from '../components';
import Home from './pages/Home';
import Button from './pages/Button';
import Ripple from './pages/Ripple';
import AccordionTest from './pages/AccordionTest';
import RipTest from './pages/RipTest';
import Switch from './pages/Switch';
import Shadow from './pages/Shadow';

const Navigation = () => {
  const Drawer = createDrawerNavigator();
  const {defaultPage} = useDefaultPage();
  console.log(defaultPage);
  return (
    <Drawer.Navigator
      initialRouteName={defaultPage}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Button" component={Button} />
      <Drawer.Screen name="Ripple" component={Ripple} />
      <Drawer.Screen name="Custom Ripple" component={RipTest} />
      <Drawer.Screen name="Accordion" component={AccordionTest} />
      <Drawer.Screen name="Switch" component={Switch} />
      <Drawer.Screen name="Shadow" component={Shadow} />
    </Drawer.Navigator>
  );
};

export default Navigation;
