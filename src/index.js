/* Import statements */
import React from "react";
import { StatusBar } from 'react-native';
import Routes from './routes';

/* App é o ponto de entrada para o código React.*/
const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Routes /> 
  </>
);
export default App;
