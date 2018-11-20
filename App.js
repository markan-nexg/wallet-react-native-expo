import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './routes';

const App = createAppContainer(AppNavigator);

export default App;