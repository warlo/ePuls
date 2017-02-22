import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    height: 50
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 2,
    borderColor: 'blue'
  },
  selectedIcon: {
    borderTopWidth: 2,
    borderTopColor: 'red'
  }
});

export default styles;
