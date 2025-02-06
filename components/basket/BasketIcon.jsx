"use client";
import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import {
  selectedBasketAllItemsQuantity,
  selectedBasketItemsTotal,
} from "../../features/basketSlice";

const BasketIcon = () => {
  const navigation = useNavigation();
  const price = useSelector(selectedBasketItemsTotal);
  const items = useSelector(selectedBasketAllItemsQuantity);

  return (
    <View
      className={`absolute w-full z-50 bottom-8 ${
        items === 0  ? "opacity-0" : "opacity-100"
      }  transition-all duration-150 `}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="flex-row items-center justify-around gap-4 flex  bg-emerald-500 rounded-lg h-16 mx-2 px-4"
      >
        <Text className="text-white font-extrabold bg-emerald-600 rounded-lg px-3 py-1.5 text-lg">
          {items}
        </Text>
        <Text className="text-white  text-center justify-center items-center">
          View basket
        </Text>
        <Text className="text-lg text-white text-bold ">{price} zł</Text>
      </TouchableOpacity>
    </View>
  );
};
export default BasketIcon;
