import { View, Text, FlatList,ActivityIndicator, StyleSheet, Image,ScrollView, TouchableOpacity } from "react-native";
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
                    <Text style={styles.myName}> Name: {item.name} </Text>
                    <Text style={styles.myName}> email: {item.email} </Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Jobcontainer}>
          <View style={styles.header}>
            <Text style={styles.title}>New Jobs</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('All Jobs')}}>
              <Text style={styles.viewallbuttontext}>view all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            keyExtractor={(item) => item.id}
            data={myData.slice(0,4)}
            renderItem={showUserData}
            //initialNumToRender={2}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.Coursecontainer}>
          <View style={styles.header}>
            <Text style={styles.title}>Available Courses</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('All course')}}>
              <Text style={styles.viewallbuttontext}>view all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            keyExtractor={(item) => item.id}
            data={myData.slice(0,4)}
            renderItem={showUserData}
            //initialNumToRender={2}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
      backgroundColor: '#0E1111',
  },
  Jobcontainer:{
    marginBottom:20,
    height:460
  },
  Coursecontainer:{
    bottom:20,
    height:460
  },
  header:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:10,
    marginLeft:20,
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
  gotodetailbutton:{
    padding:10,
    margin:10,
    borderRadius:20,
    backgroundColor:'grey',
    elevation:2,
  },
  gotodetailtext:{

  },
  card: {
    width: 250,
    height: 355,
    backgroundColor: "0E1111",
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
    backgroundColor:'grey',
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
  },
  imgStyle: {
    width: "100%",
    height: 180,
    borderTopRightRadius:15,
    borderTopLeftRadius:15,
  },
  mainContain: {
    padding: 10,
    backgroundColor: "#353535",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
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