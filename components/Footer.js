import { RefreshControlBase } from "react-native";
import React from "react";
import
{
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from
'react-native';

import colors from "../utils/colors";

export default function Footer(props)
{
    const {calculate} = props;
 return(
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={calculate}>
                <Text style={styles.text}>CALCULAR</Text>
            </TouchableOpacity>
        </View>
);
}

const styles = StyleSheet.create({
    viewFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.PRIMARY_COLOR,
    height: '15%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR_DARk,
        // padding: '12%',
        height: '90%',
        textAlign: 'center',
        borderRadius: 5,
        width: '100%',
        },
    text: {
        fontWeight: 'bold',
        fontSize:72,
        color: '#fff',
        textAlign: 'center',
        },
        });