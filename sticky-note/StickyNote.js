import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
// Cardの説明
// https://react-native-training.github.io/react-native-elements/docs/card.html
import { Card } from 'react-native-elements';

export default class StickyNote extends Component {
  render() {
    return (
      <Card
        containerStyle={styles.card}
        title={
          <View style={styles.titleContainer}>
            <TextInput
              placeholder="タイトルを入力"
              placeholderTextColor="#7c7c7c"
              underlineColorAndroid={'rgba(0,0,0,0)'}
              style={styles.titleTextInput}
            />
          </View>
        }>
        <TextInput
          placeholder="内容を入力"
          placeholderTextColor="#7c7c7c"
          multiline
          style={styles.contentTextInput}
          underlineColorAndroid={'rgba(0,0,0,0)'}
        />
        <View style={styles.datetimeContainer}>
          <Text>期限：</Text>
          <Text >
            来世
          </Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f99a',
  },
  titleContainer: {
    height: 30,
    flexDirection: 'row',
    borderBottomColor: '#7c7c7c',
    borderBottomWidth: 1,
  },
  titleTextInput: {
    height: 30,
    flexGrow: 8,
  },
  contentTextInput: {
    marginTop: 10,
    marginBottom: 10,
  },
  datetimeContainer: {
    flexDirection: 'row',
  },
});
