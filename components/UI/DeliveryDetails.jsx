import { selectedBasketItems } from "@/features/basketSlice";
import { Text, TouchableOpacity, View } from "react-native";
import {
  ClockIcon,
  CreditCardIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import { useSelector } from "react-redux";
const DeliveryDetails = () => {
  const items = useSelector(selectedBasketItems);

  return (
    <View className="  items-center py-6 ">
      <View className="w-full flex ">
        <View className="flex-row gap-4 px-3">
          <View className="flex-row items-center">
            <MapPinIcon color={"#059669"} height={20} width={20} />
          </View>
          <View className="flex-1">
            <Text>DELIVERY ADDRESS</Text>
            <Text className="font-bold">123 Main Street</Text>
          </View>
          <View className="flex-row items-center">
            <TouchableOpacity>
              <Text className="text-emerald-600">Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="border-b border-black/20 my-4 "></View>

        <View className="flex-row gap-4 px-3">
          <View className="flex-row items-center">
            <ClockIcon color={"#059669"} height={20} width={20} />
          </View>
          <View className="flex-1">
            <Text>DELIVERY TIME</Text>
            <Text className="font-bold">25TH OCTOBER, 2025 AT 6PM</Text>
          </View>
          <View className="flex-row items-center">
            <TouchableOpacity>
              <Text className="text-emerald-600">Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="border-b border-black/20 my-4 "></View>

        <View className="flex-row gap-4 px-3">
          <View className="flex-row items-center">
            <CreditCardIcon color={"#059669"} height={20} width={20} />
          </View>
          <View className=" flex-1">
            <Text>PAYMENT METHOD</Text>
            <Text className="font-bold">**** **** **** 1234</Text>
          </View>
          <View className="flex-row items-center">
            <TouchableOpacity>
              <Text className="text-emerald-600">Change</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="border-b border-black/20 my-4 "></View>
      </View>
    </View>
  );
};
export default DeliveryDetails;
