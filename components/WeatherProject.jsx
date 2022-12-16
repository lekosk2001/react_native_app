import { useState } from 'react';
import { StyleSheet, Text, TextInput, View,ImageBackground,Button,TouchableHighlight } from 'react-native';
import Forecast from './Forecast';
import OpenWeatherMap from './open_weather_map';

export default function WeatherProject() {

    const [forecast,setForecast] = useState(null);
    const [pressing,setPressing] = useState(false);

    const _handleTexstChange = (e) =>{
        let zip = e.nativeEvent.text
        OpenWeatherMap.fetchForecast(zip).then(forecast=>{
            console.log(forecast);
            setForecast(forecast)
        })
    }

    const _onPressIn = () =>{
        setPressing(true)
    }

    const _onPressOut = () =>{
        setPressing(false)
    }

    let content = null;
    if(forecast!==null){
        content=<Forecast
                main={forecast.main}
                description={forecast.description}
                temp={forecast.temp}
            />
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizemode='cover'
                style={styles.backdrop}
                source={ require('../assets/flowers.png') }
            >
                <View style={styles.overlay}>
                    <View style={styles.row}>
                        <Text style={styles.mainText}>
                            Current weather for
                        </Text>
                        <View style={styles.zipContainer}>
                            <TextInput
                                style={[styles.zipCode, styles.mainText]}
                                onSubmitEditing={e=>_handleTexstChange(e)}
                            />
                        </View>
                    </View>
                    {content}
                </View>

                {/* <Button
                    title='Press me'
                    color="#841584"
                    accessibilityLabel='Press this button'
                />

                <TouchableHighlight
                    onPressIn={_onPressIn}
                    onPressOut={_onPressOut}
                    style={styles.touchable}
                >
                    <View style={styles.button} >
                        <Text style={styles.welconme}>
                            {pressing?"EEK!":"PUSH ME"}
                        </Text>
                    </View>
                </TouchableHighlight> */}

            </ImageBackground>
        </View>
    );
}

const baseFontSize = 16;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:30
    },

    overlay:{
        paddingTop:5,
        backgroundColor:"#000000",
        opacity:0.5,
        flexDirection:"column",
        alignItems:"center"
    },

    row:{
        flexDirection:"row",
        flexWrap:"nowrap",
        alignItems:"flex-start",
        padding:30
    },

    zipContainer:{
        height:baseFontSize+10,
        borderBottomColor:"#DDDDDD",
        borderBottomWidth:1,
        marginLeft:5,
        marginTop:3,
    },

    zipCode:{
        flex:1,
        flexBasis:1,
        width:50,
        height:baseFontSize,
    },

    mainText:{
        fontSize:baseFontSize,
        color:"#ffffff"
    },

    welconme:{
        fontSize:20,
        textAlign:"center",
        margin:10,
        color:"#ffffff"
    },

    input:{
        fontSize:20,
        borderWidth:2,
        padding:2,
        height:40,
        width:100,
        textAlign:"center"
    },

    backdrop:{
        flex:1,
        flexDirection:'column'
    },

    touchable:{
        borderRadius:100
    },

    button:{
        backgroundColor:"#ff0000",
        borderRadius:100,
        width:200,
        height:200,
        justifyContent:"center"
    }
    
});
