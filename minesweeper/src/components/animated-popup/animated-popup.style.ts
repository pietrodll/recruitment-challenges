import { StyleSheet } from 'react-native';
import { popupBackground, generalBackground } from '../../styles/colors';

export const popupSize = {
    little: {
        height: 40,
        width: '80%'
    },
    medium: {
        height: 80,
        width: '80%'
    },
    big: {
        height: 200,
        width: '80%'
    }
}

export default StyleSheet.create({
    main: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: generalBackground
    },
    container: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    popup: {
        backgroundColor: popupBackground,
        borderRadius: 10,
        padding: 15,
        textAlign: 'center',
        width: '80%'
    }
});
