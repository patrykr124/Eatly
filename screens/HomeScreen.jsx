import { useEffect, useState } from "react";
import {
  Image,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  UserIcon,
} from "react-native-heroicons/solid";
import Categories from "../components/Home/categories/Categories";
import FeaturedRow from "../components/Home/features/FeaturedRow";
import image from "../constants/image";
import sanityClient from "../sanity.js";
const HomeScreen = () => {
  const [refresh, setRefresh] = useState(false);

  const [featured, setFeatured] = useState([]);

  function fetchSanityData() {
    sanityClient
      .fetch(
        `
       *[_type == "featured"]{
  ...,
  restaurants[]->{
    ...,
    category->{
      name
    },
    dishes[]->{
      _id,
      name,
      price,
      description
    }
  }
}
      `
      )
      .then((data) => {
        setFeatured(data);
      })
      .catch((err) => console.error("Sanity Fetch Error:", err));
  }

  useEffect(() => {
    fetchSanityData();
  }, []);

  function onRefresh() {
    setRefresh(true);
    fetchSanityData();
    setRefresh(false);
  }

  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-2 space-x-2">
        <Image
          source={image.avatar}
          alt="avatar"
          className="avatar w-12 h-12  "
        />
        <View className="flex-1 ml-2">
          <Text className="font-bold text-gray-500 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current location
            <ChevronDownIcon size={20} color="#000000" className="" />
          </Text>
        </View>
        <UserIcon size={30} color={"#000000"} />
      </View>
      {/* Search */}
      <View className="flex-row items-center gap-4 justify-center pb-2 mx-2">
        <View className="flex-row flex-1 space-x-2 px-2 py-1 bg-gray-200 rounded-xl items-center justify-between">
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
            className=" text-black "
          />
          <MagnifyingGlassIcon size={20} color={"#000000"} />
        </View>

        <AdjustmentsVerticalIcon size={30} color={"#000000"} />
      </View>
      {/* BODY */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        className="bg-gray-100 "
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
      >
        {/* Categories */}
        <Categories />
        {/* FEATURED-ROW */}

        {featured?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            restaurants={category.restaurants}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomeScreen;
