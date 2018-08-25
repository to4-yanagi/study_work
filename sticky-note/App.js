import * as React from 'react';
// react-nativeのコンポネントの説明や取りうるプロパティ等は公式のdocs参照
// https://facebook.github.io/react-native/docs/text
import { Text, View, StyleSheet } from 'react-native';

// ↓ReactのComponentの説明
// https://reactjs.org/docs/react-component.html
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>
          Hi.
        </Text>
      </View>
    );
  }
}

// CSS in JSが基本になる。
// https://facebook.github.io/react-native/docs/stylesheet
const styles = StyleSheet.create({
  text: {
    margin: 24,
  }
});
