import * as React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
// 付箋のコンポネントに一意なキーを設定するためにuuidを利用する。
// https://www.npmjs.com/package/uuid
import uuidv4 from 'uuid/v4'
import { Button } from 'react-native-elements';
import StickyNote from './StickyNote';

export default class App extends React.Component {
  state = {
    StickyNoteList: [],
  };

  addStickyNote = () => {
    const stickyNoteList = this.state.StickyNoteList;
    const uuid = uuidv4();
    stickyNoteList.push(
      <StickyNote key={uuid} />
    );
    this.setState({ StickyNoteList: stickyNoteList });
  };

  render() {
    return (
      // KeyboardAvoidingView内にテキスト入力が可能なコンポネントがあった場合
      // 入力欄とソフトウェアキーボードが被らないように自動的に避ける
      // https://facebook.github.io/react-native/docs/keyboardavoidingview
      // ScrollViewの縦幅を超えた時に自動的にスクロールする
      // https://facebook.github.io/react-native/docs/scrollview
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        keyboardVerticalOffset={0}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {this.state.StickyNoteList}
        </ScrollView>
        <Button
          title="＋"
          onPress={this.addStickyNote}
          buttonStyle={styles.addButton}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ecf0f1',
  },
  scrollContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  addButton: {
    width: 50,
    height: 50,
    left: 20,
    bottom: 20,
    position: 'absolute',
    borderRadius: 50,
  },
});
