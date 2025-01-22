import { urlFor } from "@/sanity";
import { Image, Text, TouchableOpacity, View } from "react-native";
const CategoriesCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity style={{boxShadow: '2px 1px 6px 0px rgba(0, 0, 0, 0.4)'}} activeOpacity={0.5} className="rounded-xl relative overflow-hidden">
      <Image source={{ uri: urlFor(imgUrl).url() }} className="h-32 w-32   overflow-hidden"   />
      <Text className="absolute bottom-0 left-0 px-2 py-2 text-white font-bold bg-black/60 w-full">{title}</Text>
    </TouchableOpacity>
  );
};
export default CategoriesCard;
