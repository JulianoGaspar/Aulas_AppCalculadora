import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { styles } from './styles';

export default function Button(props) {
    // o estilos podem ser agrupados, sobrepostos, complementados, 
    // usando array com cada estilo que deseja aplicar
    // criar uma constante para conter todos os estilos que o botão irá ter
    const stylesButton = [styles.button]

    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.operation) stylesButton.push(styles.operationButton)

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );
}
