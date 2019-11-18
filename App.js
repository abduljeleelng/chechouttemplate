import React from 'react';
import { StyleSheet, Text, View,Dimensions,Platform,ScrollView,SafeAreaView,Image,TouchableOpacity,Alert} from 'react-native';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.viewStyle}>
          <Image source={require('./assets/amazon.png')} style={styles.iconStyle}/>
            <Text style={styles.priceTextStyle}>&#8358;25,500.00</Text>
            <Text style={styles.smallTestStyle}>Online Shopping </Text>
            <Text style={styles.codeTextStyle}>Code expiring in 01:35  </Text>
        </View>
          {/*Divider between Views */}
          <View
              style={{
                  width: '100%',
                  height:1,
                  backgroundColor: '#7A7A7A',
                  padding:1,
                  alignItems: 'center',
                  marginTop:40,
              }}
          />
          {/*** details view ***/}
          <View style={styles.detailView}>
              <Text style={[styles.detail,styles.textStyle]}>
                  <Text style={styles.textStyle}> Date </Text>
              </Text>
              <Text style={[styles.detail,styles.textStyle]}>
                  <Text style={styles.textStyle}> 5 Nov,2019 11:26:11 </Text>
              </Text>
          </View>
            <View style={styles.detailView}>
                <Text style={[styles.detail,styles.textStyle]}>
                    <Text style={styles.textStyle}>Paying to </Text>
                </Text>
                <Text style={styles.detail}>
                    <Text style={styles.textStyle}>Amazon</Text>
                </Text>
            </View>
          <View style={styles.buttonView}>
            <TouchableOpacity style={[styles.detail,styles.button,{backgroundColor:'#fff'}]} onPress={() =>Alert.alert("Cancel")}>
                <Text style={{ alignContent: 'center', color: '#606' }}  > Cancel </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.detail,styles.button]} onPress={() =>Alert.alert("Pay") }>
                <Text style={{ alignContent: 'center', color: '#fff' }}  > Pay </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewStyle:{
    flex:1,
      marginTop:20,
      marginLeft:20,
      backgroundColor: '#ffffff',
      width:Dimensions.get('window').width/1,
      alignItems: 'flex-start',
      color:'#000',
      alignSelf: 'center',
    },
    iconStyle: {
        marginTop:40,
        backgroundColor: "#eee",
        borderRadius:50,
        width: 90,
        height: 90,
        padding: 50,
        marginBottom: 10,
    },
    priceTextStyle:{
    color: "#606",
    fontSize:35,
    fontFamily:Platform.OS === 'ios' ? 'AlNile-Bold' : 'monospace',
    marginBottom: 10,
    },
    smallTestStyle:{
        color: "#000",
        fontSize:20,
        fontFamily:Platform.OS === 'ios' ? 'AlNile-Bold' : 'monospace',
        marginTop:-10,
        marginBottom: 40,
    },
    codeTextStyle:{
        color: "blue",
        fontSize:25,
        fontFamily:Platform.OS === 'ios' ? 'AlNile-Bold' : 'monospace',
    },
    detailView:{
        flex:1,
        flexDirection:'row',
    },
    detail:{
        padding: 10,
        width:Dimensions.get('window').width/2.2,
        marginLeft: 20,
        marginRight:20,
        alignItems: 'flex-end',
    },
    textStyle:{
        color:'#000'
    },
    buttonView:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    button:{
        height:50,
        width:200,
        backgroundColor:'#606',
        borderColor:'#000',
        borderWidth:2,
        borderRadius:50,
        color: '#fff',
        fontSize:14,
        padding:10,
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 5,},
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
});
