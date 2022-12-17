import { StyleSheet, Text, View, Image, SectionList } from 'react-native';

export default  function BookItem (props) {
    return (
        <View style={styles.bookItem}>
            <Image style={styles.cover} source={{uri:props.coverURL}}/>
            <View style={styles.info}>
                <Text style={styles.author}>{props.author}</Text>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    bookItem:{
        flexDirection:"row",
        backgroundColor:"#ffffff",
        borderBottomColor:"#aaaaaa",
        borderBottomWidth:2,
        padding:5,
        height:175
    },
    
    cover:{
        flex:1,
        height:150,
        resizeMode:"contain"
    },

    info:{
        flex:3,
        alignItems:"flex-end",
        flexDirection:"column",
        alignSelf:"center",
        padding:20
    },

    author:{
        fontSize:18
    },

    title:{
        fontSize:18,
        fontWeight:"bold"
    },

});
