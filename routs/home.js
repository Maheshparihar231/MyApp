import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity, Button} from 'react-native';
import { collection, doc, setDoc,addDoc ,updateDoc,deleteDoc,getDoc, getDocs, query, where} from "firebase/firestore";
import {db} from '../componant/config'
import { useNavigation } from '@react-navigation/native';
import { ref,uploadBytes } from "firebase/storage";
import { storage } from '../componant/config';


const Home = () => {
  const navigation = useNavigation();
  const [username, setusername] = useState(' ');
  const [email, setemail] = useState(' ');
  const [image, setimage] = useState('');

  function create(){
    //submit data
    // setDoc(doc(db, "users", "XeMLbLKGXmKBM750Tzq6"), {
    //   username: username,
    //   email: email,
    // }).then(()=>{
    //   console.log('data submitted');
    //   alert('submitted')
    // }).catch((error)=>{
    //   console.log(error);
    // });


    // add collection
    // addDoc(collection(db, "users"), {
    //   username: username,
    //   email: email,
    // }).then(()=>{
    //   console.log('data submitted');
    //   alert('submitted')
    // }).catch((error)=>{
    //   console.log(error);
    // });

    //updatedoc
    // updateDoc(doc(db, "users", "XeMLbLKGXmKBM750Tzq6"), {
    //   username: username,
    //   email: email,
    // }).then(()=>{
    //   console.log('data submitted');
    //   alert('submitted')
    // }).catch((error)=>{
    //   console.log(error);
    // });

    //delete doc
    //deleteDoc(doc(db, "users", "la"));

    //read data
    getDoc(doc(db, "users", "VuZwVkWYi46oAEiWSd71")).then((docdata)=>{
      if(docdata.exists()){
        //console.log(docdata.data());
        setusername(docdata.data().username);
        setemail(docdata.data().email);
      }else{
        console.log('error');
      }
    }).catch((error)=>{
      console.log(error);
    });
    //get data
    // getDocs(collection(db,'users',)).then(docSnap=>{
    //   let user=[];
    //   docSnap.forEach((doc)=>{
    //     user.push({...doc.data(), id:doc.id})
    //   });
    //       console.log('document data',user);
    // });

    //get seperate data
    // getDocs(query(collection(db,'users'),where('email','==','F48fw'))).then(docSnap=>{
    //   let users=[];
    //   docSnap.forEach((doc)=>{
    //     users.push({...doc.data(), id:doc.id})
    //   });
    //       console.log('document data',users[0].username);
    // });
    }
    return (
        <View style={styles.container}>
      {/* <Text>your app!</Text> */}

      <TextInput value={username} onChangeText={(username)=>{setusername(username)}} placeholder='Username' style={styles.texbox}></TextInput>
      <TextInput value={email} onChangeText={(email)=>{setemail(email)}} placeholder='email' style={styles.texbox}></TextInput>
      <TouchableOpacity 
        onPress={()=>{create()}}>
          <View style={styles.button}>
              <Text>
                Submit data
              </Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{navigation.navigate('detail')}}>
          <View style={styles.button}>
              <Text>
                Detail page
              </Text>
          </View>
      </TouchableOpacity>
    </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texbox:{
      width:'90%',
      fontSize:17,
      padding:12,
      marginBottom:20,
      borderWidth:0.2,
      borderColor:'black',
      borderRadius:15,
    },
    button: {
    marginBottom: 30,
      height:45,
      width: 260,
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: '#2196F3',
      borderRadius:15,
    },
    buttonText: {
      //textAlign: 'center',
      padding: 20,
      color: 'white',
      fontSize:40,
    },
  
});
  