import { urlFor } from "@/sanity";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
const navigation = useNavigation();



  return (
    <TouchableOpacity
      onPress={() => {navigation.navigate("Restaurant", {id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat})}}
      activeOpacity={0.5}
      className=" bg-white rounded-xl"
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="w-64 h-36 rounded-xl"
      />
      <View className="px-2 pb-4 flex gap-1.5">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center gap-2 ">
          <StarIcon color="#000000" size={20} />
          <Text className=" text-xs ">
            <Text className="">{rating}</Text> | {genre}
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <MapPinIcon color="#000000" size={20} />
          <Text className="text-xs">Nearby | {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default RestaurantCard;
