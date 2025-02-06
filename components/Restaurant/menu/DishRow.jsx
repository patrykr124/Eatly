import { Image, Text, TouchableOpacity, View } from "react-native";
import {
  addToBasket,
  removeFromBasket,
  selectedBasketItemsQuantity,
} from "@/features/basketSlice";
import { urlFor } from "@/sanity";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";

const DishRow = ({ dish, desc, imgUrl,restaurantTitle }) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) =>
    selectedBasketItemsQuantity(state, dish._id)
  );
  
  const name = dish.name;
  const price = dish.price;
  const img = imgUrl.asset._ref;

  function handleAdd() {
    if(!dish._id){
      console.log("ID not found");
      return
    }
    dispatch(addToBasket({ id: dish._id,restaurantTitle, name, price, desc, img }));
  }

  function handleRemove() {
    dispatch(removeFromBasket({ id: dish._id }))
  }
  

  return (
    <>
      <TouchableOpacity>
        <View className="flex-row px-2 py-4 items-center border-b border-gray-200 bg-white ">
          <View className="flex-1">
            <Text className="text-xl mb-1 font-medium">{dish?.name}</Text>
            <Text className="text-gray-400 text-xs">{desc}</Text>
            <Text className="text-gray-600 mt-2">{dish?.price} zł</Text>
          </View>
        
            <View className="flex-col items-center gap-2 mr-4">
              <TouchableOpacity onPress={handleAdd}>
                <PlusCircleIcon size={35} color="green" />
              </TouchableOpacity>
              <Text>{quantity}</Text>
              <TouchableOpacity onPress={handleRemove}>
                <MinusCircleIcon size={35} color="red" />
              </TouchableOpacity>
            </View>
      
          <View className="flex-row items-center space-x-2">
            <Image
              source={{ uri: urlFor(imgUrl.asset._ref).url() }}
              className="h-32 w-40  rounded-lg"
            />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
export default DishRow;
