import { StyleSheet } from 'react-native';
import { generalBackground } from '../../styles/colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: generalBackground,
    display: 'flex'
  },
  header: {
    marginBottom: 50,
    marginTop: 45,
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  headerText: {
    color: '#ffffff',
    fontSize: 30,
  },
  paragraph: {
    marginHorizontal: 20,
    marginBottom: 15
  },
  paragraphText: {
    color: '#ffffff',
    textAlign: 'justify',
    fontSize: 18
  },
  backButton: {
    marginTop: 30,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ffffff',
    height: 45,
    alignSelf: 'center'
  },
  backButtonText: {
    fontWeight: 'normal',
    fontSize: 20,
  }
});
