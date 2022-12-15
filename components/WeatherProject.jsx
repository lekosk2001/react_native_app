import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function WeatherProject() {

    const [ zip, setZip ] = useState("zip")

    const _handleTexstChange = (e) =>{
        setZip(e.nativeEvent.text)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.welconme}>You input {zip}.</Text>
            
            <TextInput
                style={styles.input}
                onSubmitEditing={_handleTexstChange}
            ></TextInput>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    welconme:{
        color:"000"
    },

    input:{
        fontSize:20,
        borderWidth:2,
        height:40
    }
    
});
