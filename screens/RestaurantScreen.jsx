import { urlFor } from "@/sanity";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/Restaurant/menu/DishRow";
const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      address,
      dishes,
      genre,
      id,
      imgUrl,
      lat,
      long,
      rating,
      short_description,
      title,
    },
  } = useRoute();

  return (
    <>
      <ScrollView className="mb-20">
        <View className="relative">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-56 "
            resizeMode="cover"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-20 left-5 p-2 bg-gray-100 rounded-full "
          >
            <ArrowLeftIcon size={24} color="#000000" className="" />
          </TouchableOpacity>
        </View>

        <View className="bg-white px-2">
          <View className=" py-4 ">
            <Text className="text-3xl font-bold mb-2">{title}</Text>
            <View className="flex-row space-x-2 gap-4 ">
              <View className="flex-row  items-center gap-2">
                <StarIcon color="#000000" size={20} />
                <Text className=" text-xs ">
                  <Text className="">{rating}</Text> | {genre}
                </Text>
              </View>
              <View className="flex-row  items-center gap-2">
                <MapPinIcon color="#000000" size={20} />
                <Text className=" text-xs ">
                  <Text className="">{address}</Text>
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center gap-2 border-y-[1px] border-gray-300 py-4">
            <QuestionMarkCircleIcon color="#000000" size={18} />
            <Text className="text-black font-bold">Have a food allergy?</Text>
            <ChevronRightIcon color="#000000" size={18} />
          </TouchableOpacity>
        </View>
        <View className="">
          <Text className="py-4 px-2 font-bold text-lg bg-gray-200/60 ">
            Menu
          </Text>

          {dishes.map((info, index) => (
            <DishRow
              key={index}
              dish={info}
              restaurantTitle={title}
              desc={short_description}
              imgUrl={imgUrl}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};
export default RestaurantScreen;
