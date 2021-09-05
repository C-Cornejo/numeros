import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Result(props) {
const {menor,mayor,menorMod,mayorMod,errorMessage} = props;
return (
<View style={styles.content}>
    
    <View style={styles.boxResult}>
    <Text style={styles.title}>RESUMEN</Text>
    <DataResult title="Resultado"  />
    <DataResult title="El mayor número es: " value={`${mayor}`} />
    <DataResult title="El menor número es: " value={`${menor}`} />

    <DataResult title="El mayor número modificado es: " value={`${mayorMod}`} />
    <DataResult title="El menor número modificado es: " value={`${menorMod}`} />
    </View>
    <View>
    <Text style={styles.error}>{errorMessage}</Text>
    </View>
</View>
);
}
function DataResult(props) {
const {title, value} = props;
return (
    <View style={styles.value}>
        <Text>{title}:{value}</Text>
        {/* <Text></Text> */}
    </View>
);
}
const styles = StyleSheet.create({
content: {
marginHorizontal: 40,
},
boxResult: {
padding: 30,
},
title: {
fontSize: 20,
textAlign: 'center',
fontWeight: 'bold',
marginBottom: 20,
},
value: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom:5
,
},
error: {
textAlign: 'center',
color: '#f00',
fontWeight: 'bold',
fontSize: 20,
},
});