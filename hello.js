import React from 'react';
import { 
    StyleSheet, Text, View 
} from 'react-native';

export default class Hello extends React.Component {
  render() {
    return (
        <View>
            <Text style={styles.text}>{this.props.intro}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 40,
  }
});
