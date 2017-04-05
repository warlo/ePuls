import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    marginTop: 15,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  content: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    marginLeft: 20,
  },
  textElement: {
    width: 90,
  },
  text: {
    fontSize: 20,
  },
  input: {
    height: 40,
    width: 60,
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default styles;
