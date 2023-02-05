import { View, Text, FlatList, StyleSheet, Image,ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect, Component } from "react";
import { useNavigation} from '@react-navigation/native';


const Detail = () => {
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
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{ uri: item.image }} />
        </View>
        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}> Bio-Data </Text>
            <Text style={styles.idNumber}>
              {item.id < 10 ? `#0${item.id}` : `#{item.id}`}
            </Text>
          </View>
          <View style={styles.mainContain}>
            <Text style={styles.myName}> Name: {item.name} </Text>
            <Text style={styles.myName}> email: {item.email} </Text>
          </View>
          <View style={styles.detailpageroute}>
              <TouchableOpacity 
                style={styles.gotodetailbutton} 
                onPress={()=>{
                  navigation.navigate('moredetail',
                  {
                    name : item.name,
                    otherParam: 'anything you want here',
                  })
                  }
                }>
                <Text style={styles.gotodetailtext}>See Detail</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  function viewallbutton(){
    console.log('daba diya')
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>List of Students</Text>
          <TouchableOpacity onPress={()=>{viewallbutton()}}>
            <Text style={styles.viewallbuttontext}>view all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={myData}
          renderItem={showUserData}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:10,
    marginLeft:10,
  },
  title:{
    fontSize:25
  },
  viewallbuttontext:{
    color:'black',
    fontSize:16,
    marginRight:10
  },
  detailpageroute:{
    justifyContent:"center",
    alignItems:"center"
  },
  gotodetailbutton:{
    padding:7,
    margin:10,
    borderRadius:10,
    backgroundColor:'grey',
   // opacity:20,
    TouchableOpacity:20,
    elevation:3,    
  },
  gotodetailtext:{

  },
  mainContainer: {
    width: "100%",
    minHeight: "100%",
    paddingVertical: 50,
    backgroundColor: "#ebedee",
  },
  card: {
    width: 250,
    height: 355,
    backgroundColor: "black",
    borderRadius: 5,
    margin: 20,
    marginBottom:30
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
    backgroundColor:'grey'
  },
  imgStyle: {
    width: "100%",
    height: 180,
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

export default Detail;