/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Pdf from 'react-native-pdf';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <Text>Hello</Text>
        <Pdf
          style={{width: 500, height: 200}}
          fitPolicy={0}
          source={{
            uri:
              'https://learnpodseditornodeserver.knomadixapp.com/04ae44c1f17b7c1b2a66db013e5adbb0.pdf',
          }}
          onError={(error) => {
            console.log(error);
          }}></Pdf>
      </SafeAreaView>
    </>
  );
};

export default App;
