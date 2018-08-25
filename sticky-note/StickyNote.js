import React, { Component } from 'react';
import moment from 'moment';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class StickyNote extends Component {
  state = {
    isDateTimePickerVisible: false,
    titleText: '',
    contentText: '',
    // 時刻表示用にmomentを使用する
    limitDateTime: moment().format('YYYY年MM月DD日 HH時mm分')
  };

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  setDateTime = dateTime =>
    this.setState({
      limitDateTime: moment(dateTime).format('YYYY年MM月DD日 HH時mm分'),
    });
    
  render() {
    return (
      <Card
        containerStyle={styles.card}
        title={
          <View style={styles.titleContainer}>
            <TextInput
              value={this.state.titleText}
              onChangeText={value => this.setState({ titleText: value })}
              placeholder="タイトルを入力"
              placeholderTextColor="#7c7c7c"
              underlineColorAndroid={'rgba(0,0,0,0)'}
              style={styles.titleTextInput}
            />
          </View>
        }>
        <TextInput
          value={this.state.contentText}
          onChangeText={value => this.setState({ contentText: value })}
          placeholder="内容を入力"
          placeholderTextColor="#7c7c7c"
          multiline
          style={styles.contentTextInput}
          underlineColorAndroid={'rgba(0,0,0,0)'}
        />
        <View style={styles.datetimeContainer}>
          <Text>期限：</Text>
          <Text onPress={this.showDateTimePicker}>
            {this.state.limitDateTime}
          </Text>
        </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          mode={'datetime'}
          onConfirm={dateTime => {
            this.setDateTime(dateTime);
            this.hideDateTimePicker();
          }}
          onCancel={this.hideDateTimePicker}
        />
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
