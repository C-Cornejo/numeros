/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import { restElement } from '@babel/types';
 import React,{useEffect, useState} from 'react';
 
 import {
   AppRegistry,
   SafeAreaView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
 } from 'react-native';
 import Footer from './components/Footer';
 import Form from './components/Forms';
 import Result from './components/Result';
 export default function App(){


   const [nombre,setNombre] = useState("");
   const [base,setBase] = useState(100);
   const [neto,setNeto]= useState(0);

   const [n1,setN1] = useState(0);
   const [n2,setN2] = useState(0);
   const [n3,setN3] = useState(0);
   const [n4,setN4] = useState(0);
   const [mayor,setMayor] = useState(0);
   const [menor,setMenor] = useState(0);
   const [mayorMod,setMayorMod] = useState(0);
   const [menorMod,setMenorMod] = useState(0);

   const [errorMessage,setErrorMessage] = useState("");
 
   useEffect( () =>{
       if(n1 && n2 && n3 && n4)
       {
         calculate();
       }
       else
       {
        setErrorMessage("Ingrese un valor para todos los números");
       }},[n1,n2,n3,n4]);

       const calculate = () =>
       {
           reset();
          if(n1 == 0 || n2 == 0 || n3 == 0 || n4 == 0)
          {
            setErrorMessage("No puede ingresar el valor cero");
          }
          else if(n1 < 0 || n2 < 0 || n3 < 0 || n4 < 0)
         {
           setErrorMessage("No se puede ingresar un valor negativo");
         }
         else
         {
            calcularMayor();
            calcularMenor(); 
            
            if(menor > 10)
            {
              let temp = mayor + 10;
              setMayorMod(temp);
            }
            if(mayor < 50)
            {
              let temp1= menor - 5;
               setMenorMod(temp1);
            }
            setErrorMessage("done!");
         }
       }//  -- fin de metodo calculate --

       const calcularMayor = () =>
        {
          let numeros = [n1,n2,n3,n4];
          setMayor(Math.max(...numeros));
         
        }// fin de mayor

        const calcularMenor = () =>
        {
          setMenor(n1);
          let numeros = [n1,n2,n3,n4];
         setMenor(Math.min(...numeros));
        } // fin de menor

       const reset =() =>{
         setErrorMessage("");

         setNombre(null);
         setBase(null);
         setNeto(null);
       }
 
   return(
     <>
     <SafeAreaView style={styles.Header}>
     <Text style={styles.titulo}>Manipulacion de números</Text>
    
     <Form setN1={setN1} setN2={setN2} setN3={setN3} setN4={setN4} />
     </SafeAreaView>
     <Result mayor={mayor} menor={menor} mayorMod={mayorMod} menorMod={menorMod} errorMessage={errorMessage}/>
 
         <Footer calculate={calculate} />
  
     </>
   );
   }
 
   const styles = StyleSheet.create({
     Header:{
     backgroundColor:'#b6b6b6',
     height:'45%',
     borderBottomLeftRadius:15,
     borderBottomRightRadius:15,
     alignItems:'center',
      
   },
   titulo:{
     fontSize:32,
     marginBottom:'5%'
   }
   });
 
   AppRegistry.registerComponent("App",()=> App);