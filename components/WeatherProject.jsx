import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Forecast from './Forecast';
import OpenWeatherMap from './open_weather_map';

export default function WeatherProject() {

    const [ zip, setZip ] = useState("");
    const [forecast,setForecast] = useState(null);

    const _handleTexstChange = (e) =>{
        setZip(e.nativeEvent.text)
        OpenWeatherMap.fetchForecast(zip).then(forecast=>{
            console.log(forecast);
            setForecast({forecast:forecast})
        })
    }

    let content = null;
    if(forecast!==null){
        content=(
            <Forecast
                main={forecast.main}
                description={forecast.description}
                temp={forecast.temp}
            />
        );
    }

    return (
        <View style={styles.container}>
            
            <Text style={styles.welconme}>
                You input {zip}.
            </Text>
            
            {content}

            <TextInput
                style={styles.input}
                onSubmitEditing={_handleTexstChange}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#666666',
        alignItems: 'center',
        justifyContent: 'center',
    },

    welconme:{
        fontSize:20,
        textAlign:"center",
        margin:10
    },

    input:{
        fontSize:20,
        borderWidth:2,
        padding:2,
        height:40,
        width:100,
        textAlign:"center"
    }
    
});
