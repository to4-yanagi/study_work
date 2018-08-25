import * as React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native';
import uuidv4 from 'uuid/v4'
import { Button } from 'react-native-elements';
import StickyNote from './StickyNote';

export default class App extends React.Component {
  state = {
    StickyNoteList: [],
  };

  deleteStickyNote = uuid => {
    const stickyNoteList = this.state.StickyNoteList;
    const newList = stickyNoteList.filter(note => note.key != uuid);
    this.setState({ StickyNoteList: newList });
  }

  addStickyNote = () => {
    const stickyNoteList = this.state.StickyNoteList;
    const uuid = uuidv4();
    stickyNoteList.push(
      <StickyNote key={uuid} uuid={uuid} deleteStickyNote={this.deleteStickyNote} />
    );
    this.setState({ StickyNoteList: stickyNoteList });
  };

  render() {
    return (
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
