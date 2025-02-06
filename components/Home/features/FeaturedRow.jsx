import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
const FeaturedRow = ({ title, description, restaurants }) => {

  return (
    <View className="px-2">
      <View className="mt-4 flex-row items-center justify-between ">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#000000" />
      </View>

      <Text className="text-xs text-gray-600">{description}</Text>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 15, gap: 10 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        className=" "
      >
        {restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.category?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default FeaturedRow;
