import { StyleSheet } from 'react-native';
import { lightGrey, darkBlue } from '../../styles/colors';
import { squareSize } from '../../styles/dimensions';

export default StyleSheet.create({
  container: {
    height: squareSize,
    width: squareSize,
    borderRadius: squareSize / 10,
    backgroundColor: darkBlue,
    margin: 2,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  openContainer: {
    backgroundColor: lightGrey
  },
  squareText: {
    fontSize: 20
  }
});
