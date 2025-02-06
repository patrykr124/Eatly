import DeliveryDetails from "@/components/UI/DeliveryDetails";
import HeaderInfo from "@/components/UI/HeaderInfo";
import {
  selectedBasketItems,
  selectedBasketItemsTotal,
} from "@/features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
const BillingScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectedBasketItems);
  const allPrice = useSelector(selectedBasketItemsTotal);
  const subtotalPrice = allPrice + 20;

  return (
    <SafeAreaView className="flex-1 mx-2 ">
      <View className="flex-1">
        <View className="">
          <HeaderInfo text={"Delivery Information"} />
        </View>
        <ScrollView className="flex-1">
          <View className="flex-1 my-5">
            <Text className="text-lg font-bold">Payment Information</Text>
            <DeliveryDetails />

            <View className="py-5">
              <Text className="text-lg font-bold">Order Summary</Text>

              {items.map((item) => (
                <View key={item.id} className="flex-row gap-4  mt-2 items-center bg-white p-3 rounded-xl">
                  <Text>{item.quantity}x</Text>

                  <Text>{item.name}</Text>
                  <Text className="flex-1 text-right">{item.price} zł</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        <View className="bg-white w-full px-3 py-4 rounded-xl">
          <View className="flex gap-1.5">
            <View className="flex-row justify-between items-center">
              <Text className="">Subtotal</Text>

              <Text className=" text-sm text-gray-400">{allPrice} zł</Text>
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
          <TouchableOpacity
            onPress={() => navigation.navigate("Preparing")}
            className="rounded-lg bg-emerald-500 p-4 mt-5"
          >
            <Text className="text-center text-white font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default BillingScreen;
