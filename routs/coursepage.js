import { View,Dimensions, Text, FlatList, StyleSheet, Image,ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect, Component } from "react";
import { useNavigation} from '@react-navigation/native';

const Allcourse = () => {
    const navigation = useNavigation();
    const [isLoaded, setIsLoaded] = useState(true);
    const [myData, setMyData] = useState([]);
  
    const getUserData = async () => {
      try {
        const response = await fetch(
          "https://thapatechnical.github.io/userapi/users.json"
          //"https://jsonplaceholder.typicode.com/users"
        )
        // .then(response=>response.json())
        // .then(data=>{
        //   setMyData(data.filter(item=>item.name==='Susbscribe Techical'));
        // });
        const realData = await response.json();
        setMyData(realData);
        setIsLoaded(false);
        // console.log(realData);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {getUserData()}, []);
  
    function moredetail(){
      console.log('see detail')
    }
  
    // render the students cards
    const showUserData = ({ item }) => {
      return (
      <View>
          <TouchableOpacity 
          onPress={()=>{
              navigation.navigate('moredetail',{item : item,})}
              }>
              <View style={styles.card}>
                  <View style={styles.imgContainer}>
                  <Image style={styles.imgStyle} source={{ uri: item.image }} />
                  </View>
                  <View style={styles.bioDataContainer}>
                      <Text style={styles.bioData}> Bio-Data </Text>
                      <Text style={styles.idNumber}>
                          {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
                      </Text>
                  </View>
                  <View style={styles.mainContain}>
                      <Text style={styles.myName}> Platform: {item.name} </Text>
                      <Text style={styles.myName}> email: {item.email} </Text>
                  </View>
              </View>
          </TouchableOpacity>
      </View>
      );
    };
  
    return (
      <View style={styles.container}>  
          <View>
              <FlatList
              keyExtractor={(item) => item.id}
              data={myData}
              renderItem={showUserData}
              ItemSeparatorComponent={() => <View style={{height: 5}} />}
              showsHorizontalScrollIndicator={false}
              />
          </View>
          
      </View>
    );
}



const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#0E1111',
      justifyContent:"center",
      alignItems:"center",
    },
    title:{
      fontSize:25,
      color:"white"
    },
    viewallbuttontext:{
      color:'white',
      fontSize:16,
      marginRight:15
    },
    detailpageroute:{
      justifyContent:"center",
      alignItems:"center"
    },
    card: {
      height: 325,
      backgroundColor: "0E1111",
      margin: 20,
    },
    bioDataContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#353535",
      paddingVertical: 10,
      
    },
    idNumber: {
      fontSize: 20,
      color: "rgba(255, 255, 255, 0.5)",
      paddingRight: 10,
    },
    bioData: {
      fontSize: 30,
      color: "green",
    },
    mainHeader: {
      fontSize: 30,
      color: "#a18ce5",
      marginLeft:20,
      //textAlign: "center",
    },
    imgContainer: {
      padding: 10,
      backgroundColor:'grey',
      borderTopRightRadius:15,
      borderTopLeftRadius:15,
    },
    imgStyle: {
      width: "100%",
      height: 180,
      borderTopRightRadius:10,
      borderTopLeftRadius:10,
    },
    mainContain: {
      padding: 10,
      backgroundColor: "#353535",
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
    myName: {
      fontSize: 14,
      color: "#fff",
      marginBottom: 10,
      alignSelf: "flex-start",
      textTransform: "capitalize",
    },
  });

export default Allcourse