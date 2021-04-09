/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import RecordPage  from "./src/components/RecordPage";

AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => RecordPage);
