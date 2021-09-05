import React from 'react';
import { View,Image,StyleSheet, Button, TouchableOpacity } from 'react-native';

export const Market = () => {
  global.foo = "Lazada";
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(0).then(() => setRefreshing(false));
  }, []);
  
  return (
    <View style={styles.container}>
      <TouchableOpacity 
          onPress={()=>
            {
              foo = "Lazada";
              alert("you clicked Lazada");
              onRefresh();

            }}
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}>
          
          <Image
            source={{
              uri:
                'https://cdn.chanhtuoi.com/uploads/2020/06/logo-lazada-2.png',
            }}
            style={styles.buttonImageIconStyle}
          />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=>
          {
            foo = "Tiki"; 
            alert("you clicked Tiki")
            onRefresh();

          }}
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://storage.googleapis.com/hust-files/images/tiki_21.1k.png',
            }}
            style={styles.buttonImageIconStyle}
          />
      </TouchableOpacity>
      <TouchableOpacity
          onPress={()=>
            {
              foo = "Shoppee";
              alert("you clicked Shoppee")
              onRefresh();
            }}
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://i.pinimg.com/originals/52/6e/71/526e7194884d4a9141dbd637d89b202b.png',
            }}
            style={styles.buttonImageIconStyle}
          />
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={()=>
          {
            foo = "Sendo";
            alert("you clicked Sendo")
            onRefresh();
          }}
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}>
          <Image
            source={{
              uri:
                'https://2momart.vn/upload/medium/042020/sendo-app-01.png',
            }}
            style={styles.buttonImageIconStyle}
          />
      </TouchableOpacity>     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    marginTop: 20,
    marginLeft: -10,
  },
  icon:{
    marginLeft:20,
    width: 70,
   height: 70,

  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 70,
    borderRadius: 15,
    marginLeft:20,

  },
  buttonImageIconStyle: {


    height: 70,
    width: 70,
    resizeMode: 'stretch',
  },

});