import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
//Icon
import { AntDesign } from "@expo/vector-icons";
//Colors
import Colors from "../../../utils/Colors";
//NumberFormat
import NumberFormat from "../../../components/UI/NumberFormat";
//Text
import CustomText from "../../../components/UI/CustomText";
import { BlurView } from "expo-blur";
//PropTypes check
import PropTypes from "prop-types";

export class ProductItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  render() {
    const { navigation, item } = this.props;
    const toDetail = () => {
      navigation.navigate("Detail", { item });
    };
    return (
      <View style={{ width: "30%" }}>
        <BlurView tint='light' intensity={70} style={styles.container}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={toDetail}>
              <Image
                source={{ uri: item.url }}
                style={styles.image}
                onLoadStart={() => {
                  this.setState({ loading: true });
                }}
                onLoadEnd={() => this.setState({ loading: false })}
              />
            </TouchableOpacity>
            {this.state.loading && (
              <View
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ActivityIndicator size='small' color={Colors.grey} />
              </View>
            )}
          </View>
          <View style={styles.center}>
            <CustomText style={styles.name}>{item.filename}</CustomText>
          </View>
          <View style={styles.rate}>
              <AntDesign name='star' color='#fed922' size={15} />
              <Text style={styles.score}>4.5</Text>
              <Text style={styles.score}>S??n: {foo}</Text>

            </View>
          <View style={styles.info}>
            <NumberFormat price={item.price} />
          </View>
          <View style={{ marginHorizontal: 5 }}>
            <TouchableOpacity style={styles.btn} onPress={toDetail}>
              <CustomText style={styles.detailBtn}>Chi ti???t SP</CustomText>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    );
  }
}

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 190,
    // backgroundColor: "rgba(255, 255, 255, 0.9)",
    marginBottom: 15,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    borderRadius: 8,
    aspectRatio: 16 / 9,
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    marginTop: 3,
    color: Colors.red,
    textAlign: "center",
    fontWeight: "500",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
  },
  rate: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  score: {
    fontSize: 12,
    marginLeft: 5,
    color: Colors.text,
  },
  btn: {
    width: "100%",
    height: 35,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  detailBtn: {
    color: Colors.purple,
    marginRight: 5,
  },
});
