import { StyleSheet } from 'react-native';
import { generalBackground } from '../../styles/colors';

export default StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: generalBackground
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    header: {
        marginBottom: 30
    },
    headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    subHeader: {
        marginBottom: 40
    },
    subTitle: {
        fontSize: 30,
        color: '#ffffff'
    },
    playButton: {
        marginBottom: 20
    },
    helpButton: {
        marginTop: 20,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ffffff',
        height: 45
    },
    helpText: {
        fontSize: 20,
        fontWeight: 'normal'
    }
});
