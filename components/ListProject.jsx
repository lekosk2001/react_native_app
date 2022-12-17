import { useState,useEffect } from 'react';
import { StyleSheet,View, Text, SectionList } from 'react-native';
import NYT from './NYT'
import BookItem from './BookItem'

export default function ListProject() {

    useEffect(() => {
        _refreshData()
    }, [])

    const [sections,setSections] = useState([])
    
    const _renderItem = ({item}) =>{
        return <BookItem
                coverURL={item.book_image}
                title={item.key}
                author={item.author}
            />
    }

    const _renderHeader = ({section}) =>{
        return <Text
            style={styles.headingText}>
            {section.title}
        </Text>
    }

    const _addKeysToBooks = books =>{
        return books.map(book=>{
            return Object.assign(book,{key:book.title})
        })
    }

    const _refreshData = () => {
        Promise.all([NYT.fetchBooks("hardcover-fiction"),NYT.fetchBooks("hardcover-nonfiction")])
        .then(result=>{
            if(result.length!==2){
                console.error("Unexpected results")
            }
            
            setSections([
                {title:"Hardcover Fiction",data:_addKeysToBooks(result[0])},
                {title:"Hardcover NonFiction",data:_addKeysToBooks(result[1])}
            ])
        })
    }

    return (
        <View
            style={styles.container}
        >
            <SectionList
                sections={sections}
                renderItem={_renderItem}
                renderSectionHeader={_renderHeader}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop:40,
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#f5fcff"
    },

    headingText:{
        fontSize:24,
        alignItems:"center",
        backgroundColor:"#fff",
        fontWeight:"bold",
        paddingLeft:20,
        paddingRight:20,
        paddingTop:2,
        paddingBottom:2
    }
});
