import { StyleSheet } from 'react-native';
import { generalBackground } from '../../styles/colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: generalBackground,
    justifyContent: 'space-around'
  },
  container: {
    alignItems: 'center'
  },
  grid: {
    marginTop: 10
  },
  header: {
    marginBottom: 30
  },
  headerText: {
    color: '#ffffff',
    fontSize: 30
  },
  backButton: {
    marginTop: 30,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ffffff',
    height: 45
  },
  backButtonText: {
      fontWeight: 'normal',
      fontSize: 20,
  },
  popupContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  popupText: {
    fontSize: 25
  },
  popupButton: {
    height: 45
  },
  popupButtonText: {
    fontSize: 25
  }
});
