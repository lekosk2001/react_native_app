import { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Image,FlatList } from 'react-native';
import NYT from './NYT'

function BookItem (props) {
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

const mockBooks = [
    {
        rank:1,
        title:"GATHERING PREY",
        author:"John Sandford",
        book_image:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51Fy1YCpEDL.jpg"
    },
    {
        rank:2,
        title:"MEMORY MAN",
        author:"David Balacci",
        book_image:"https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51809zkrFiL._SY346_.jpg"
    }
]

export default function ListProject() {

    useEffect(() => {
        _refreshData()
    }, [])

    const [data,setData]= useState([])
    
    const _renderItem = ({item}) =>{
        return <BookItem
                coverURL={item.book_image}
                title={item.key}
                author={item.author}
            />
    }

    const _addKeysToBooks = books =>{
        return books.map(book=>{
            return Object.assign(book,{key:book.title})
        })
    }

    const _refreshData = () => {
        NYT.fetchBooks().then(books=>{
            setData(_addKeysToBooks(books))
        })
    }

    return (
        <FlatList data={data} renderItem={_renderItem}/>
        )
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#f5fcff"
    },

    row:{
        fontSize:24, padding:42, borderWidth:1, borderColor:"#dddddd"
    },

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
    }
});
