import {
  removeFromBasket,
  selectedBasketItems,
  selectedBasketItemsTotal,
} from "@/features/basketSlice";
import { urlFor } from "@/sanity";
import { useNavigation } from "@react-navigation/native";
import HeaderInfo from "../components/UI/HeaderInfo";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { XCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
const BasketScreen = () => {
  const items = useSelector(selectedBasketItems);
  const allPrice = useSelector(selectedBasketItemsTotal);
  const subtotalPrice = allPrice + 20;
  let lastDisplayedRestaurantTitle = null;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="mx-2 flex-1 ">
      <View className="flex-1">
       <HeaderInfo text={"Basket"} />
        <View className="flex-row items-center gap-4 rounded-xl px-4 py-3 bg-white my-5">
          <Image
            className="h-7 w-9 bg-gray-300 p-4 rounded-full"
            source={{
              uri: "https://links.papareact.com/wru",
            }}
          />
          <Text className="flex-1 ">
            Deliver in<Text className=" text-black font-bold">  50-75 min</Text>
          </Text>
          <TouchableOpacity>
            <Text className="text-emerald-600">Change</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView  style={{ display: "flex" }} className="">
          {items.map((item) => {
            const shouldDisplayRestaurantTitle =
              lastDisplayedRestaurantTitle !== item.restaurantTitle;
            if (shouldDisplayRestaurantTitle) {
              lastDisplayedRestaurantTitle = item.restaurantTitle;
            }
            return (
              <View key={item.id} className="">
                {shouldDisplayRestaurantTitle && (
                  <Text className="font-bold my-4 text-xl">
                    {item.restaurantTitle}
                  </Text>
                )}

                <View className="flex-row gap-4 mb-2 items-center bg-white p-3 rounded-xl">
                  <Text>{item.quantity}x</Text>
                  <Image
                    source={{ uri: urlFor(item.img).url() || item?.img }}
                    className="h-16 w-16 rounded-full"
                  />
                  <Text>{item.name}</Text>
                  <Text className="flex-1 text-right">{item.price} zł</Text>
                  <TouchableOpacity
                    onPress={() => dispatch(removeFromBasket({ id: item.id }))}
                  >
                    <XCircleIcon color={"#000000"} height={20} width={20} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View className="bg-white w-full px-3 py-4 rounded-xl">
          <View className="flex gap-1.5">
            <View className="flex-row justify-between items-center">
              <Text className="">Subtotal</Text>

              <Text className=" text-sm text-gray-400">
                {allPrice} zł
              </Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="">Delivery Fee</Text>

              <Text className=" text-sm text-gray-400">+ 20 zł</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="">Subtotal</Text>

              <Text className="font-bold text-lg">{subtotalPrice} zł</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Billing")} className="rounded-lg bg-emerald-500 p-4 mt-5">
            <Text className="text-center text-white font-bold text-lg">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default BasketScreen;
