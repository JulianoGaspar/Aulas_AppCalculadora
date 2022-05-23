import { Dimensions, StyleSheet } from "react-native";

exports.styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#F0F0F0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#FA8231'
    },
    buttonDouble: {
        width: Dimensions.get('window').width / 2,
    }
});