import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  FlatList,
  AsyncStorage,
  RefreshControl,SafeAreaView,
} from 'react-native';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../reducers';
//Colors
import Colors from '../../utils/Colors';
//Animation
import Animated from 'react-native-reanimated';
//Components
import {
  Carousel,
  Header,
  CategorySection,
  FloatButton,
  categories,
  Market,
  

} from './components';
import Skeleton from '../../components/Loaders/SkeletonLoading';
import Snackbar from '../../components/Notification/Snackbar';
//FloatButton
import { Portal, Provider } from 'react-native-paper';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
//height
const { height } = Dimensions.get('window');

export const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const dispatch = useDispatch();
  //Header Animation
  let scrollY = new Animated.Value(0);
  const Ixd = useSelector((state) => state.auth.Ixd);

  const user = useSelector((state) => state.auth.user);
  const products = useSelector((state) => state.store.products);
  const isLoading = useSelector((state) => state.store.isLoading);
  const notification = useSelector((state) => state.auth.notification);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(0).then(() => setRefreshing(false));
  }, []);
  //fetch Api
  useEffect(() => {
    // AsyncStorage.removeItem("isFirstTime");
    const fetching = async () => {
      try {
        await dispatch(fetchProducts());
      } catch (err) {
        alert(err);
      }
    };
    fetching();
  }, [user.userid]);
  //console.log(products)

  return (
    <Provider>
      {isLoading ? (
        <Skeleton />
      ) : (
        <View style={styles.container}>
          <Header
            scrollPoint={scrollY}
            navigation={navigation}
            products={products}
          ></Header>
          <Portal>
            <FloatButton />
          </Portal>
          <AnimatedFlatList
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <View  style={styles.banner}>
                
                <Carousel />
                <Market
                 
                  
                />
              </View>
            )}
            scrollEventThrottle={1}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: scrollY } },
                },
              ],
              { useNativeDriver: true },
            )}
            data={categories}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <CategorySection
                name={item.name}
                bg={item.bg}
                data={products}
                navigation={navigation}
              />
            )}
          />
          {Object.keys(notification).length === 0 ? (
            <View />
          ) : (
            <Snackbar
              checkVisible={true}
              message={
                Object.keys(user).length === 0
                  ? notification
                  : notification + ' ' + user.name
              }
            />
          )}
        </View>
      )}
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  list: {
    width: '100%',
    marginTop: 50,
    paddingBottom: 20,
  },
});
