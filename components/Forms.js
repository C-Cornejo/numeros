import React from 'react';
import {StyleSheet, TextInput, View,Text} from 'react-native';
import colors from '../utils/colors';

export default function Form(props) {
const {setN1,setN2,setN3,setN4} = props;
return (
    <View style={styles.viewForm}>
        <Text  style={styles.etiqueta}>Ingrese 4 numeros enteros positivos</Text>
        <View style={styles.viewInputs}>
            <Text>Numero entero</Text>
                <TextInput style={styles.input}
                placeholder="primero"
                keyboardType="numeric"
                onChange={(e) => setN1(e.nativeEvent.text)}/>
                {/* <Text style={styles.textStyle}>x^(2) +</Text> */}
            </View>
        <View style={styles.viewInputs}>
            <Text>Numero entero</Text>
            <TextInput style={styles.input}
            placeholder="segundo"
            keyboardType="numeric"
            onChange={(e) => setN2(e.nativeEvent.text)}/> 
        </View>
        <View style={styles.viewInputs}>
            <Text>Numero entero</Text>
            <TextInput style={styles.input}
            placeholder="tercero"
            keyboardType="numeric"
            onChange={(e) => setN3(e.nativeEvent.text)}/> 
        </View>
        <View style={styles.viewInputs}>
            <Text>Numero entero</Text>
            <TextInput style={styles.input}
            placeholder="cuarto"
            keyboardType="numeric"
            onChange={(e) => setN4(e.nativeEvent.text)}/> 
        </View>
    </View>
);
}


const styles = StyleSheet.create({
    textStyle:{
        fontSize: 26
    },
    etiqueta:
    {
        fontSize:14,
        marginBottom:5
    }
    ,
    viewForm: {
    // position: 'absolute',
    bottom: 0,
    marginTop: 5,
    width: '90%',

    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 20,
    height: '45%',
    justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row'
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginLeft: '3%',

        color: 'green',
        paddingHorizontal: 20,
    },
    });
   