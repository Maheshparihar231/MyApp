import * as React from "react";
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, ScrollView,Dimensions } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation} from '@react-navigation/native';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Moredetail = ({route}) => {
  //const navigations = useNavigation();
  console.log(route.params)
  const item = route.params.item;
  //
  return (
    <View>
      <ScrollView>
      <View style={styles.headboxPosition}>
        <ImageBackground
          style={styles.logoIcon}
          resizeMode="cover"
          source={{ uri: item.image }}
        />
      </View>
      <View style={styles.detailcontainer}>
        <Text style={styles.companyName}>{item.name.toUpperCase()}</Text>
        <Text style={styles.role}>
          UI/UX Designer
        </Text>
        <View style={styles.price}>
          <Text style={styles.roleType}>Full Time</Text>
          <Text style={styles.money}>30k/month</Text>
        </View>
        <View style={styles.datepost}>
          <Text style={styles.postedOn}>Posted On</Text>
          <Text style={styles.date}>12 may 2022</Text>
        </View>
        <View style={styles.requirmentbox}>
          <Text style={styles.requirment}>
            Requirment
          </Text>
          <Text style={styles.details}>
            NoSQL, MongoDB, python, react.js, ui, backend joia dpa djai  In case of nested elements, you have to ensure that the parent container has enough height to work with when using flexGrow. Set backgroundColor on parents and child to debug. dnfic scja0 awdj a dja0w ef 90e fjse wef-ewjfwpf
          </Text>
        </View>
        
      </View>
      <View style={styles.applybuttonCONTAINER}>
        <TouchableOpacity style={[styles.applybutton]}>
          <Text style={styles.applybuttontext}>
            Apply
          </Text>
        </TouchableOpacity>
      </View>
      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headboxPosition:{
    width:'100%',
    height:height*0.25,
    backgroundColor:'black'
  },
  logoIcon:{
    width:75,
    height:75,
    marginLeft:20,
    position:"absolute",
    bottom:20,
    //marginTop:50,
  },
  detailcontainer:{
    margin:20
  },
  companyName:{
    fontSize:36,
    marginBottom:5,
  },
  role:{
    fontSize:25,
    marginBottom:5,
  },
  price:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:5,
  },
  roleType:{
    fontSize:25,
  },
  money:{
    fontSize:25,
  },
  datepost:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:15,
  },
  date:{
    fontSize:25,
  },
  postedOn:{
    fontSize:25,
  },
  requirmentbox:{
    marginBottom:20,
  },
  requirment:{
    fontSize:20,
    color:'grey',
  },
  details:{
    flexDirection:"row",
    justifyContent:"center",
    fontSize:20
  },
  applybuttonCONTAINER:{
    justifyContent:"center",
    alignItems:"center",
    bottom:20,
  },
  applybutton:{
    borderRadius:15,
    paddingVertical:10,
    paddingHorizontal:60,
    backgroundColor:'blue'
  },
  applybuttontext:{
    fontSize:20,
    color:'white'
  }
});

export default Moredetail;

Moredetail